import { Component, NgZone, ViewChild, OnInit } from '@angular/core';
import { NavController, ModalController, AlertController,Platform, LoadingController, ToastController } from '@ionic/angular';
import { Booking, ValueGlobal, RoomInfo, Bookcombo, SearchHotel } from '../providers/book-service';
import { Storage } from '@ionic/storage';
import { C } from '../providers/constants';
import { GlobalFunction, ActivityService } from '../providers/globalfunction';
import * as request from 'requestretry';
import jwt_decode from 'jwt-decode';
import * as moment from 'moment';
import {FlightDeparturePage } from '../flightdeparture/flightdeparture';
import { OverlayEventDetail } from '@ionic/core';
import {RequestComboPage} from '../requestcombo/requestcombo';
import { AdddiscountPage } from './../adddiscount/adddiscount.page';
import * as $ from 'jquery';
import { FlightcomboupgraderoomPage } from '../flightcomboupgraderoom/flightcomboupgraderoom.page';
import { CalendarModal, CalendarModalOptions, DayConfig } from 'ion2-calendar';
import { Facebook } from '@ionic-native/facebook/ngx';
/**
 * Generated class for the FacilitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'app-flightcomboreviews',
  templateUrl: 'flightcomboreviews.html',
  styleUrls: ['flightcomboreviews.scss'],
})
export class FlightComboReviewsPage implements OnInit{
 
  Avatar; Name; Address; cin; cout; dur; room; nameroom; jsonroom; textage = ""; arrchild
  roomnumber; adults; children; breakfast; PriceAvgPlusTAStr: any = 0; ischeckpoint = false;
  imgroom; roomtype; indexme; indexroom; cin1; cout1; point; price; ischeck = false; Pricepoint; Pricepointshow; roomcancel;
  titlecombo; TravPaxPrices;
  listDeparture = [];
  //listReturn =[];
  listDepart: any;
  listReturn: any;
  de_departtime; re_departtime;
  de_departdatestr;
  ar_departtime; ar_returntime; ar_departdatestr;
  de_flightpricetitle; ar_flightpricetitle;
  de_departpriceincrease = false;
  de_returnpriceincrease = false;
  ar_departpriceincrease = false;
  ar_returnpriceincrease = false;
  loadflightpricedone = false;
  paxtitle = '';
  daydeparttitle;
  dayreturntitle;
  currentDepartFlight: any;
  currentReturnFlight: any;
  objhoteldetail: any;
  roomclass: any;
  basepricesale;
  duration;
  loadpricedone = false;
  adultCombo = 2;
  elementMealtype;
  username;
  email;
  adultUnit = 0;
  commissionAdult = 0;
  adultUnitExb = 0;
  childUnit = 0;
  infantUnit = 0;
  departTicketSale = 0;
  returnTicketSale = 0;
  transportPriceSale = 0;
  transportPriceNet = 0;
  transportPriceSaleForChild = 0;
  transportPriceNetForChild = 0;
  totalPriceSale = 0;
  totalSurchargeWeekendFee = 0;
  totalTransportPriceSale = 0;
  TotalPriceCombo = 0;
  totalAirLineLuggage = 0;
  totalPriceForEXBA = 0;
  totalPriceForChildCWE = 0;
  totalPriceForChildEXBC = 0;
  totalPriceInfant = 0;
  totalPriceForOtherFee = 0;
  totalGetSubPriceForAdultExtrabed = 0;
  totalGetSubPriceForChild = 0;
  totalQuantityChildCWEAndEXBC = 0;
  totalQuantityFlightForChildAndInfant = 0;
  totalQuantityFlightForChild = 0;
  totalPriceChild = 0;
  ChildOtherFeeTotal = 0;
  ChildOtherFee = 0;
  FlightDepartSelected: any;
  FlightReturnSelected: any;
  totalChild = 0;
  totalAdult = 0;
  totalInfant = 0;
  totalFlightDepart = 0;
  totalFlightReturn = 0;
  commissionFlight = 0;
  commissionDepart = 0;
  Commission = 0;
  AdultCombo = 0;
  totalAdultExtrabed = 0;
  totalExtraBedAndGalaDinerListTA = 0;
  AdultOtherFee = 0;
  roomPriceSale = 0;
  TotalNight = 0;
  PriceDiffUnit = 0;
  adultFlightNumber = 0;
  JsonSurchargeFee =
    {
      RoomDifferenceFee: 0,
      AdultUnit: 0,
      DepartTicketDifferenceFee: 0,
      TransportPriceSale: 0,
      ReturnTicketDifferenceFee: 0,
      BaggageDepart: 0,
      BaggageReturn: 0,
      SurchargeWeekendFee: 0,
      SurchargeFee: [],
      TotalAll: 0,
      ComboData: {}
    };
  ComboPriceDiff = {
    RoomDiff: { AdultUnit: 0, ChildUnit: 0, Total: 0 },
    DepartFlightDiff: { AdultUnit: 0, AdultUnitExb: 0, ChildUnit: 0, InfantUnit: 0, Total: 0, CommissionAdult: 0 },
    ReturnFlightDiff: { AdultUnit: 0, AdultUnitExb: 0, ChildUnit: 0, InfantUnit: 0, Total: 0, CommissionAdult: 0 },
  };
  infant = 0; intervalID; listkeys = []; flightdeparttitle; bookcombodetail; fromPlace = ""; toPlace = "";
  departfi = []; returnfi = [];titlecomboshort;hotelcode;
  adultsdisplay: number;
  childrendisplay: number;
  loaddatafromcache: boolean = false;
  discountpromo;msg;ischecktext=3;ischeckerror=0; ischeckbtnpromo = false;ischeckpromo;  promocode;
  objInsurranceFee: any;
  hasInsurrance:any;
  showInsurranceText: any;
  textpromotion="Nhập mã giảm giá";
  pointshow;
  myCalendar: HTMLIonModalElement;
  _daysConfig: DayConfig[] = [];
  cofdate: number;
  cotdate: number;
  cinthu: string;
  coutthu: string;index;
  stoprequest: boolean = false;
  allowSearch: boolean = true;
  allowSearchReturn: boolean = true;loader: any;
  cinthudisplay: string;
  coutthudisplay: string; Rating; departlocationdisplay; returnlocationdisplay;
  cindisplay;coutdisplay;RoomType;operatedBydep="";operatedByret="";TotalPrice
  departConditionInfo: any; returnConditionInfo: any;
  ischecklugage = false;
  //thay đổi chuyến bay có thay đổi thì true
  ischangefly = true;

  departLuggage: any = [];
  returnLuggage: any = [];
  totaldepluggage = 0;
  totalretluggage = 0;
  ischeckBOD=false;
  allowclickcalendar: boolean = true;
  ischeckwaitlug=false;
  msgEmptyFlight: any='';
  arrBOD: any;
  elementRooom: any;
  constructor(public platform: Platform, public valueGlobal: ValueGlobal, public navCtrl: NavController, private Roomif: RoomInfo, public zone: NgZone,private loadingCtrl: LoadingController,
    public booking: Booking, public storage: Storage, public alertCtrl: AlertController, public value: ValueGlobal, public modalCtrl: ModalController, public gf: GlobalFunction,
    public bookCombo: Bookcombo, public searchhotel: SearchHotel,
    public activityService: ActivityService,
    private toastCtrl: ToastController,
    private fb: Facebook) {
    

    setTimeout(()=>{
      this.storage.get('username').then(name => {
        if (name !== null) {
          this.username = name;
        }
      })
      this.storage.get('email').then(e => {
        if (e !== null) {
          this.email = e;
        }
      })
      this.booking.ChildAge.forEach(element => {
        if (element == "<1" || Number(element) < 2) {
          this.infant += 1;
        }
      });
      this.arrchild = this.searchhotel.arrchild;
      this.Rating = this.booking.RatingHotel
      this.Avatar = Roomif.imgHotel;
      this.Name = booking.HotelName;
      this.Address = Roomif.Address;
      this.cin = booking.CheckInDate;
      this.cout = booking.CheckOutDate;
      this.cinthudisplay = this.getDayOfWeek(this.cin);
      this.coutthudisplay = this.getDayOfWeek(this.cout);
      this.duration = moment(this.cout).diff(moment(this.cin), 'days');
      var cintemp=new Date(this.cin);
      this.cindisplay=moment(cintemp).format('DD')+ ' '+ 'thg' + ' ' +  moment(cintemp).format('MM')
  
      var couttemp=new Date(this.cout);
      this.coutdisplay=moment(couttemp).format('DD')+ ' '+ 'thg' + ' ' +  moment(couttemp).format('MM')

      this.TotalNight = this.duration;
      this.dur = this.duration;
      this.roomnumber = Roomif.roomnumber;
      this.adults = booking.Adults;
      this.totalAdult = booking.Adults;
      if (booking.Child) {
        this.children = booking.Child;
      }
      else {
        this.children = 0;
      }
      this.totalChild = booking.Child;
      this.roomtype = Roomif.roomtype;
      this.jsonroom = Roomif.jsonroom;
      this.room = Roomif.arrroom;
      var chuoicin = this.cin.split('-');
      var chuoicout = this.cout.split('-');
      this.cin = chuoicin[2] + "-" + chuoicin[1] + "-" + chuoicin[0];
      this.cout = chuoicout[2] + "-" + chuoicout[1] + "-" + chuoicout[0];
      this.nameroom = this.room[0].ClassName;
      this.breakfast = this.bookCombo.MealTypeName;
      this.value.flagreview = 1;
      this.titlecombo = this.bookCombo.ComboTitle;
      this.hotelcode = this.bookCombo.HotelCode;
      this.objInsurranceFee = this.bookCombo.objInsurranceFee;
      this.hasInsurrance = this.bookCombo.hasInsurrance;
      this.showInsurranceText = this.hasInsurrance ? this.hasInsurrance : (this.bookCombo.checkInsurranceFee ? true : false);
      
      this.titlecombo=this.valueGlobal.titlecombo;
      this.bookCombo.tileComboShort = this.titlecombo;
      var cb;
      if (this.bookCombo.ComboDetail.details.length == 1) {
        cb = this.bookCombo.ComboDetail.details[0];
        this.bookcombodetail = cb;
      } else {
        this.bookCombo.ComboDetail.details.forEach(element => {
          let df = moment(element.stayFrom).format('YYYY-MM-DD');
          let dt = moment(element.stayTo).format('YYYY-MM-DD');
          if (moment(this.booking.CheckInDate).diff(moment(df), 'days') >= 0 && moment(dt).diff(moment(this.booking.CheckInDate), 'days') >= 0
            && moment(this.booking.CheckOutDate).diff(moment(df), 'days') >= 0 && moment(dt).diff(moment(this.booking.CheckOutDate), 'days') >= 0) {
            cb = element;
            this.bookcombodetail = element;
          }
        });
        if(!cb){
          cb= this.bookCombo.ComboDetail.details[0];
            this.bookcombodetail = cb;
        }
      }
      this.totalPriceSale = cb.totalPriceSale;
      this.departTicketSale = cb.departTicketSale;
      this.returnTicketSale = cb.returnTicketSale;
      this.basepricesale = cb.totalPriceSale - cb.departTicketSale - cb.returnTicketSale;
      this.roomPriceSale = this.basepricesale;
      this.totalInfant = this.infant;
      this.totalChild = this.children - this.infant;
      this.childrendisplay = this.children;
      
      this.adultsdisplay = this.booking.Adults;
      //PDANH 10/06/2019: Check tuổi trẻ em >=12 tuổi tính giá vé = người lớn
      if (this.arrchild) {
        for (let i = 0; i < this.arrchild.length; i++) {
          if (i == this.arrchild.length - 1) {
            this.textage = this.textage + this.arrchild[i].numage;
          } else {
            this.textage = this.textage + this.arrchild[i].numage + ",";
          }
          //PDANH 10/06/2019: Check tuổi trẻ em >=12 tuổi tính giá vé = người lớn
          if(this.arrchild[i].numage >=12){
            this.children--;
            this.totalChild--;
            this.adults++;
            this.totalAdult++;
          }
        }
        if (this.textage) {
          this.textage = "(" + this.textage + ")";
        }
      }
      if (this.adultsdisplay > 0) {
        this.paxtitle += this.adultsdisplay + ' người lớn';
      }
      if (this.childrendisplay > 0) {
        this.paxtitle += ', ' + this.childrendisplay + ' trẻ em';
      }
      
      this.getHotelContractPrice(this.bookCombo.FormParam);
      // this.GetUserInfo();
      this.storage.get('point').then(point => {
        if (point) {
          //point=500;
          if (point > 0) {
            this.pointshow=point;
            this.Roomif.point = point;
            this.point = point * 1000;
            this.price = this.point.toLocaleString();
          }
          else
          {
            this.point=0;
          }
        }
        else
        {
          this.point=0;
        }
      });
    }, 350)
    this.loadLunar();
  }

  loadLunar(){
    var se = this;
    if(se.valueGlobal.listlunar && se.valueGlobal.listlunar.length >0){
      se.cofdate = 0;
      se.cotdate = 0;
      se.bindlunar();
    }
    
  }
  checklunar(s) {
    return s.indexOf('Mùng') >= 0;
  }
  bindlunar() {
    var se = this;
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
        se.getDayName(se.cin, se.cout);
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
        se.getDayName(se.cin, se.cout);
      }
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
  ionViewWillEnter() {
    this.point=0;
    this.ischeck = false;
    this.Roomif.point=null;
    this.price=0;

    this.textpromotion="Nhập mã giảm giá";
    this.promocode="";
    this.ischeckbtnpromo=false;
    this.ischeckpromo=false;
    this.msg="";
    this.GetUserInfo();
  }
  ionViewDidEnter() {
    var se = this;
    if (se.valueGlobal.backValue == "flightcomboinfoluggage" || se.valueGlobal.backValue == "flightcomboupgraderoom") {
      se.valueGlobal.backValue = "";
    }
    else{
      if(se.valueGlobal.backValue != "flightcombopaymentbreakdown"){
        
        se.ischangefly = true;
        se.bookCombo.Luggage = 0;
        se.ischeck=false;
        se.GetUserInfo();
        se.loadflightpricedone = false;
        se.listDepart=[];
        se.listReturn=[];
        if(se.bookCombo.MealTypeIndex)
        {
          se.index=se.bookCombo.MealTypeIndex;
        }
        
        setTimeout(()=> {
          se.loadFlightDataNew(true);
        }, 400)
      }else{
        se.valueGlobal.backValue = "";
      }
    }
    
  }
  ngOnInit() {
    var se = this;
    this.bookCombo.itemFlightLuggagePriceChange.pipe().subscribe((data) => {
      if (data) {
        var objectFlight = this.gf.getParams('flightcombo');
        // var total=Number(this.JsonSurchargeFee.TotalAll)+Number(this.bookCombo.Luggage);
        // this.TotalPrice=total;
        if (this.departConditionInfo && this.departConditionInfo.luggageSigned && this.departConditionInfo.luggageSigned.length <= 4) {
          this.totaldepluggage = Number(this.departConditionInfo.luggageSigned);
        }
        else {
          this.totaldepluggage = 0;
        }

        if (this.returnConditionInfo && this.returnConditionInfo.luggageSigned && this.returnConditionInfo.luggageSigned.length <= 4) {
          this.totalretluggage = Number(this.returnConditionInfo.luggageSigned);
        }
        else {
          this.totalretluggage = 0;
        }
        this.edit();
        var totaldepartluggage = 0;
        var totalreturnluggage = 0;
        for (let index = 0; index < objectFlight.airLineLuggageDepart.length; index++) {
          const element = objectFlight.airLineLuggageDepart[index];
          if (element.quantity > 0) {
            totaldepartluggage = Number(totaldepartluggage) + Number((element.quantity * element.Weight));
          }
        }
        this.totaldepluggage = Number(this.totaldepluggage) + Number(totaldepartluggage);

        for (let index = 0; index < objectFlight.airLineLuggageReturn.length; index++) {
          const element = objectFlight.airLineLuggageReturn[index];
          if (element.quantity > 0) {
            totalreturnluggage = Number(totalreturnluggage) + Number((element.quantity * element.Weight));
          }
        }
        this.totalretluggage = Number(this.totalretluggage) + Number(totalreturnluggage);
      }
    })
   
    se.bookCombo.upgradeRoomChange.pipe().subscribe((dataRoomChange)=>{
        if(dataRoomChange){
            se.updateRoomChange(dataRoomChange);
        }
    })
    
  }

  updateRoomChange(data){
    var se = this;
    if (data) {
          se.zone.run(() => {
            let itemroom = data.itemroom;
            let itemmealtype = data.itemmealtype;
            se.index=data.index;
            se.RoomType=itemroom.RoomType;
            if(itemmealtype.Name != null && itemmealtype.Notes.length==0){
              se.breakfast = itemmealtype.Name;
            }
            else if(itemmealtype.Name != null && itemmealtype.Notes.length!=0 && itemmealtype.Notes[0].length == itemmealtype.Name.length)
            {
              se.breakfast = itemmealtype.Notes.join(', ')
              itemmealtype.Name = itemmealtype.Notes.join(', ');
            }
            else if(itemmealtype.Name != null && itemmealtype.Notes.length!=0 && itemmealtype.Notes[0].length != itemmealtype.Name.length)
            {
              se.breakfast = itemmealtype.Name  +", " +itemmealtype.Notes.join(', ');
              itemmealtype.Name = itemmealtype.Name  +", " +itemmealtype.Notes.join(', ');
            }
            se.elementMealtype = itemmealtype;
            se.bookCombo.MealTypeName=se.breakfast 
            //se.breakfast = itemmealtype.Name;
            se.Roomif.arrroom = [];
            se.Roomif.arrroom.push(itemroom);
            if(itemroom && itemmealtype){
              se.callSummaryPriceAfterUpgradeRoom(itemroom, itemmealtype)
            }
          })
        }
  }
  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  //Lấy số điểm
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
          if (response.statusCode != 200) {
            var objError = {
              page: "roomdetailreview",
              func: "GetUserInfo",
              message: response.statusMessage,
              content: response.body,
              type: "warning",
              param: JSON.stringify(options)
            };
            C.writeErrorLog(objError, response);
          }
          if (error) {
            error.page = "roomdetailreview";
            error.func = "GetUserInfo";
            error.param = JSON.stringify(options);
            C.writeErrorLog(error, response);
          } else {
            se.point = 0;
            if (body) {
              var data = JSON.parse(body);
              se.zone.run(() => {
                if (data.point) {
                  if (data.point > 0) {
                    se.pointshow = data.point;
                    se.Roomif.point = data.point;
                    se.point = data.point * 1000;
                    se.price = se.point.toLocaleString();
                  }
                }
                se.storage.remove('point');
                se.storage.set('point', data.point);
              })
              //se.storage.set('userInfoData', data);
            }

          }
        });
      }
    })
  }
  /**Hàm sort list khách sạn theo giá, điểm trung bình 
     * PDANH 23/01/2018
     */
  sort(property, listsort) {
    var se = this;
    if (listsort && listsort.length > 0) {
      se.zone.run(() => listsort.sort(function (a, b) {
        let direction = -1;
        if (property == "priceorder") {
          if (a[property] * 1 < b[property] * 1) {
            return 1 * direction;
          }
          else if (a[property] * 1 > b[property] * 1) {
            return -1 * direction;
          }
          //chiều đi
          else if (a[property] * 1 == b[property] * 1 && a["rangeTime"] && b["rangeTime"]) {
            if(a["rangeTime"] >= 600 && a["rangeTime"] <=720){
              return 1 * direction;
            }
            else if(b["rangeTime"] >= 600 && b["rangeTime"] <=720){
              return -1 * direction;
            }
            else{
              return 1 * direction;
            }
          }
          //chiều về
          else if (a[property] * 1 == b[property] * 1 && a["rangeTimeReturn"] && b["rangeTimeReturn"]) {
            if(a["rangeTimeReturn"] >= 840 && a["rangeTimeReturn"] <=1020){
              return 1 * direction;
            }
            else if(b["rangeTimeReturn"] >= 840 && b["rangeTimeReturn"] <=1020){
              return -1 * direction;
            }
            else{
              return 1 * direction;
            }
          }
        }
      }));
    }
  };
  /**
   * Load giá phòng của combo 
   * @param data - data giá phòng (Nếu không có dữ liệu = ko có phòng trống)
   */
  getHotelContractPrice(data) : Promise<any> {
    var se = this;
    return new Promise((resolve, reject) => {
      if (data) {
        data.IsPackageRateInternal = true;
        data.IsPackageRate = true;
        data.GetVinHms = 1;
        data.GetSMD= 1;
        data.IsB2B=true;
        var form = data;
        var options = {
          method: 'POST',
          url: C.urls.baseUrl.urlContracting + '/api/contracting/HotelSearchReqContractAppV2',
          timeout: 10000, maxAttempts: 5, retryDelay: 2000,
          headers:
            {},
          form
        };
        request(options, function (error, response, body) {
          if (response.statusCode != 200) {
            var objError = {
              page: "flightcomboreviews",
              func: "getHotelContractPrice",
              message: response.statusMessage,
              content: response.body,
              type: "warning",
              param: JSON.stringify(options)
            };
            C.writeErrorLog(objError,response);
          }
          if (error) {
            error.page = "flightcomboreviews";
            error.func = "getHotelContractPrice";
            error.param = JSON.stringify(options);
            C.writeErrorLog(error,response);
          };
          se.zone.run(() => {
            var result = JSON.parse(body);
  
            if (result.Hotels) {
              se.jsonroom = result.Hotels[0].RoomClasses;
              //Hàm tính tiền chênh khi nâng cấp phòng
              se.calculateDiffPriceUnit();
              let cbp = se.bookcombodetail;
              var element = se.checkElement(se.jsonroom);
              if (element) {
                 //check lấy theo meal
                 var index=0;
                 for (let i = 0; i < element.MealTypeRates.length; i++) {
                   if (element.MealTypeRates[i].Code==se.bookCombo.MealTypeCode) {
                     index=i;
                     break;
                   }
                 }
  
                se.nameroom = element.ClassName;
                se.RoomType = element.RoomType;

                //se.breakfast = element.element.MealTypeRates[0].Name;
                se.roomnumber = element.TotalRoom;
                se.index=index;
                se.callSummaryPrice(element,index);
                //se.getBOD(element.MealTypeRates[0].RoomId);
                se.arrBOD =  se.valueGlobal.notSuggestDaily;
              } else {
                se.jsonroom = result.Hotels[0].RoomClassesRecomments;
                let cbp = se.bookcombodetail;
                var element = se.checkElement(se.jsonroom);
                se.elementRooom=element;
                //check lấy theo meal
                if (element) {
                  var index = 0;
                  for (let i = 0; i < element.MealTypeRates.length; i++) {
                    if (element.MealTypeRates[i].Code == se.bookCombo.MealTypeCode) {
                      index = i;
                      break;
                    }
                  }
                  if (element) {
                    se.nameroom = element.ClassName;
                    se.roomnumber = element.TotalRoom;
                    se.RoomType = element.RoomType;
                    se.index = index;
                    se.callSummaryPrice(element, index);
                    se.getBOD(element.MealTypeRates[0].RoomId);
                  } else {
                    se.loadpricedone = true;
                  }
                  //Hàm tính tiền chênh khi nâng cấp phòng
                  se.calculateDiffPriceUnit();
                  resolve(true);
                }
                else {
                  se.loadpricedone = true;
                  //Không valid thì hiển thị gửi yêu cầu
                  se.loadflightpricedone = true;
                  se.PriceAvgPlusTAStr = 0;
                  se.TotalPrice = 0;
                  resolve(false);
                }
              }
              resolve(true);
            } else {
              se.loadpricedone = true;
              se.PriceAvgPlusTAStr=0;
              se.loadflightpricedone = true;
              resolve(false);
            }
          })
        })
      }
    })
    
  }

  checkElement(object) {
    var el: any = null;
    var se = this;
    object.forEach(element => {
      if (element && element.MealTypeRates[0].RoomId == se.bookcombodetail.roomId && !element.MSGCode) {
        el = element;
      }
    })

    if (!el) {
      var arr = object.filter(function (e) { return !e.MSGCode })
      if (arr && arr.length > 0) {
        el = arr[0];
      }
    }
    return el;
  }
  /**
   * Tính tổng tiền combo
   */
  callSummaryPrice(element,index) {
    var se = this;
    if (element && !element.MSGCode) {
      // Giá nhà cung cấp
      se.TravPaxPrices = element.MealTypeRates[index].PriceAvgPlusNet * se.roomnumber * se.TotalNight;

      se.roomclass = element;
      se.elementMealtype = element.MealTypeRates[index];
      se.breakfast= element.MealTypeRates[index].Name;
      this.index=index;
      se.AdultCombo = element.Rooms[0].IncludeAdults * se.elementMealtype.TotalRoom;
      se.AdultCombo = se.AdultCombo > se.totalAdult ? se.totalAdult : se.AdultCombo;

      se.transportPriceSale = se.transportPriceSale * (se.totalAdult - se.AdultCombo);
      se.transportPriceNet = se.transportPriceNet * (se.totalAdult - se.AdultCombo);

      se.TotalPriceCombo = se.totalPriceSale * se.AdultCombo;
      se.totalAdultExtrabed = se.totalAdult - se.AdultCombo;
      se.MathGaladinnerAdExtrabed();
      if (se.currentDepartFlight != undefined) {
        se.SaveFlightDepartSelected();
      }
      if (se.currentDepartFlight != undefined) {
        se.SaveFlightReturnSelected();
      }
      se.MathPriceAll();
    }
  }
  /**
   * Hàm tính lại giá vé máy bay
   * PDANH 27/04/2019
   */
  getFlightPriceSale(departFlight, returnFlight): number {
    var se = this;
    var flightprice = 0;
    if (departFlight && departFlight.priceSummaries) {
      flightprice += departFlight.totalPrice;
      se.daydeparttitle = se.getDayOfWeek(new Date(departFlight.departTime)) + ', ' + moment(new Date(departFlight.departTime)).format('DD-MM-YYYY');
    } if (returnFlight && returnFlight.priceSummaries) {
      flightprice += returnFlight.totalPrice;
      se.dayreturntitle = se.getDayOfWeek(new Date(returnFlight.departTime)) + ', ' + moment(new Date(returnFlight.departTime)).format('DD-MM-YYYY');
    }
    if (!departFlight && !returnFlight) {
      let cb = se.bookcombodetail;
      flightprice = (cb.departTicketSale + cb.returnTicketSale) * se.adults;
    }
    return flightprice;
  }

  goback() {
    this.navCtrl.navigateBack('/hoteldetail/' + this.booking.HotelId);
    //this.navCtrl.navigateBack(['/app/tabs/hoteldetail/'+this.booking.HotelId]);
  }
  /**
   * Hàm lấy thông tin chuyến bay
   * PDANH 27/04/2019
   */
  loadFlightDataNew(hascache) {
    var se = this;
    setTimeout(() => {
      se.stoprequest = true;
      se.loadpricedone = true;
      if (se.listDepart.length == 0 || se.listReturn.length == 0) {
        se.PriceAvgPlusTAStr = 0;
        se.loadflightpricedone=true;
        se.ischeckwaitlug=true;
        se.msgEmptyFlight = se.listDepart.length == 0 && se.listReturn.length == 0 ? 'Vé máy bay không có.' : (se.listDepart.length == 0 ? 'Vé máy bay chiều đi không có.' : 'Vé máy bay chiều về không có.');
      }
    }, 50 * 1000);

    se.checkLoadCacheData(hascache).then(data => {
      if (data) {
        se.stoprequest = false;
        se.loadFlightCacheDataByAirline(data, 'depart');

        se.loadFlightCacheDataByAirline(data, 'return');
      }
    })
  }
  checkLoadCacheData(hascache): Promise<any> {
    var se = this;
    se.stoprequest = true;
    return new Promise((resolve, reject) => {
      let objjson =
      {
        "requestFrom": {
          "fromPlace": se.bookCombo.ComboDetail.departureCode,
          "toPlace": se.bookCombo.arrivalCode,
          "departDate": moment(new Date(moment(se.booking.CheckInDate).format("YYYY-MM-DD"))).format("YYYY-MM-DDTHH:mm:ss.SSS"),
          "returnDate": moment(new Date(moment(se.booking.CheckInDate).format("YYYY-MM-DD"))).format("YYYY-MM-DDTHH:mm:ss.SSS"),
          "adult": se.adults,
          "child": (se.children - se.infant),
          "infant": se.infant,
          "version": "2.0",
          "roundTrip": true
        },
        "requestTo": {
          "fromPlace": se.bookCombo.arrivalCode,
          "toPlace": se.bookCombo.ComboDetail.departureCode,
          "departDate": moment(new Date(moment(se.booking.CheckOutDate).format("YYYY-MM-DD"))).format("YYYY-MM-DDTHH:mm:ss.SSS"),
          "returnDate": moment(new Date(moment(se.booking.CheckOutDate).format("YYYY-MM-DD"))).format("YYYY-MM-DDTHH:mm:ss.SSS"),
          "adult": se.adults,
          "child": (se.children - se.infant),
          "infant": se.infant,
          "version": "2.0",
          "roundTrip": true
        },
        "roundTrip": true,
        "noCache": true
      }

      var options = {
        'method': 'POST',
        'url': C.urls.baseUrl.urlFlight + 'gate/apiv1/GetSessionFlight',
        //'url': 'https://55786b74.ngrok.io/gate/apiv1/GetSessionFlight',
        'headers': {
          "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(objjson)

      };
      request(options, function (error, response, body) {
        if (error) throw new Error(error);
        if (body) {
          //console.log(body);
          resolve(JSON.parse(body));
        }
      });

    })
  }
  loadFlightCacheDataByAirline(source, type) {
    var se = this;
    if (type == "depart") {
      se.allowSearch = false;
    } else {
      se.allowSearchReturn = false;
    }

    let urlfindflightincache = type == "depart" ? C.urls.baseUrl.urlFlight + "gate/apiv1/GetFlightDepart" : C.urls.baseUrl.urlFlight + "gate/apiv1/GetFlightReturn";
    let objbody = {
      "fromPlace": type == 'depart' ? se.bookCombo.ComboDetail.departureCode : se.bookCombo.arrivalCode,
      "toPlace": type == 'depart' ? se.bookCombo.arrivalCode : se.bookCombo.ComboDetail.departureCode,
      "departDate": type == 'depart' ? moment(new Date(moment(se.booking.CheckInDate).format("YYYY-MM-DD"))).format("YYYY-MM-DDTHH:mm:ss.SSS") : moment(new Date(moment(se.booking.CheckOutDate).format("YYYY-MM-DD"))).format("YYYY-MM-DDTHH:mm:ss.SSS"),
      "returnDate": type == 'depart' ? moment(new Date(moment(se.booking.CheckInDate).format("YYYY-MM-DD"))).format("YYYY-MM-DDTHH:mm:ss.SSS") : moment(new Date(moment(se.booking.CheckOutDate).format("YYYY-MM-DD"))).format("YYYY-MM-DDTHH:mm:ss.SSS"),
      "adult": se.adults,
      "child": (se.children - se.infant),
      "infant": se.infant,
      "sources": source,
      "version": "2.0",
      "roundTrip": true
    };

    var options = {
      method: "POST",
      url: urlfindflightincache,
      body: JSON.stringify(objbody),
      headers: {
        "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
        'Content-Type': 'application/json; charset=utf-8'
      }
    }

    request(options, function (error, response, body) {
      let objError = {
        page: "flightsearchresult",
        func: "findflightincache",
        message: response.statusMessage,
        content: response.body,
        type: "warning",
        param: JSON.stringify(options)
      };
      if (error) {
        error.page = "flightsearchresult";
        error.func = "findflightincache";
        error.param = JSON.stringify(options);
        C.writeErrorLog(objError, response);
      }
      else {
        let result = JSON.parse(body);
        if (type == "depart") {
          se.allowSearch = true;
        } else {
          se.allowSearchReturn = true;
        }
        if (result) {
          if (result.data && result.data.length > 0) {
            result.data.forEach(element => {
              var arrfly=[];
              for (let i = 0; i < element.flights.length; i++) {
               if (element.flights[i].stops==0) {
                arrfly.push(element.flights[i]);
               }
              }
              se.loadmultidata(arrfly, type);
            });
            
          }

          if (!result.stop && !se.stoprequest && type == 'depart' && se.allowSearch) {

            setTimeout(() => {
              se.zone.run(() => {
                source = result.sources;
              })
              se.loadFlightCacheDataByAirline(source, 'depart');
            }, 1500)
            // obj.countretry++;
          }

          else if (!result.stop && !se.stoprequest && type == 'return' && se.allowSearchReturn) {
            source = result.sources;
            setTimeout(() => {
              se.zone.run(() => {
                source = result.sources;
              })
              se.loadFlightCacheDataByAirline(source, 'return');
            }, 1500)
            // obj.countretry++;
          }
        }
      }
    })
  }
  loadmultidata(data, type) {
    var se = this;
    let jsondata = data;
    //se.loadpricedone = true;
    se.ischeckwaitlug=false;
    se.zone.run(() => {
      if (type == 'depart') {
        if (!se.listDepart || (se.listDepart && se.listDepart.length == 0)) {
          se.listDepart = jsondata;
        }
        else {
          if (se.listDepart && se.listDepart.length > 0) {
            se.listDepart = [...se.listDepart, ...jsondata];
          }
        }
      }

      if (type == 'return') {
        if (!se.listReturn || (se.listReturn && se.listReturn.length == 0)) {
          se.listReturn = jsondata;
        }
        else {
          if (se.listReturn && se.listReturn.length > 0) {
            se.listReturn = [...se.listReturn, ...jsondata];
          }
        }
      }
      se.getdata();
    });
  }
  getdata() {
    var se = this;
    se.loadpricedone = true;
    se.zone.run(() => {
      if (se.listDepart && se.listDepart.length > 0) {
        se.listDepart.forEach(element => {
          var priceFlightAdult = 0;
          element.priceSummaries.forEach(e => {
            if (e.passengerType == 0) {
              priceFlightAdult += e.price;
            }
          });
          //25/12/2020: Sửa lại lấy đúng giá giảm (sau khi trừ giá bán default)
          element.priceorder = priceFlightAdult - se.departTicketSale;
          if (element.airlineCode == "VietnamAirlines") {
            element.priceorder = element.priceorder * 0.75;
          }
          else if (element.airlineCode == "BambooAirways") {
            element.priceorder = element.priceorder * 0.8;
          }
          let ar_time = element.departTime.toString().split('T')[1];
          let Hour = ar_time.toString().split(':')[0];
          let Minute = ar_time.toString().split(':')[1];
          let kq = Hour * 60 + Number(Minute);
          element.rangeTime = kq;
        });
        se.sort('priceorder', se.listDepart);
        se.checkvalue(se.listDepart, 0);
        se.currentDepartFlight = se.departfi;
      }

      if (se.listReturn && se.listReturn.length > 0) {
        se.listReturn.forEach(element => {
          var priceFlightAdult = 0;
          element.priceSummaries.forEach(e => {
            if (e.passengerType == 0) {
              priceFlightAdult += e.price;
            }
          });
          //25/12/2020: Sửa lại lấy đúng giá giảm (sau khi trừ giá bán default)
          element.priceorder = priceFlightAdult - se.returnTicketSale;

          if (element.airlineCode == "VietnamAirlines") {
            element.priceorder = element.priceorder * 0.75;
          }
          else if (element.airlineCode == "BambooAirways") {
            element.priceorder = element.priceorder * 0.8;
          }
        });
        se.sort('priceorder', se.listReturn);
        se.checkvalue(se.listReturn, 1);
        se.currentReturnFlight = se.returnfi;
      }
      se.loadFlightData(se.departfi, se.returnfi);
    })
    //tạm rem
    // if (se.listDepart.length == 0 || se.listReturn.length == 0) {
    //   se.PriceAvgPlusTAStr = 0;
    // }
  }

  //Hàm check VMB giá thấp nhất trong khung giờ chấp nhận được
  checkvalue(list, stt) {
    var Hour; var Minute; var kq;
    var good = [];
    var medium = [];
    var other = [];
    if (stt == 0) {
      for (let i = 0; i < list.length; i++) {
        // var dateTime = new Date(list.flights[i].departTime);
        // Hour = moment(dateTime).format("HH");
        // Minute = moment(dateTime).format("mm");
        let ar_time = list[i].departTime.toString().split('T')[1];
        Hour = ar_time.toString().split(':')[0];
        Minute = ar_time.toString().split(':')[1];
        kq = Hour * 60 + Number(Minute);
        list[i].rangeTime = kq;

        if (kq >= 360 && kq <= 960) {
          if (kq >= 480 && kq <= 660) {
            good.push(list[i]);
          }
          else {
            medium.push(list[i]);
          }
        }
        else {
          other.push(list[i]);
        }
      }
      if (medium && medium.length > 0 && good && good.length > 0) {
        if (good[0].priceorder <= medium[0].priceorder) {
          this.departfi = good;
        } else {
          if (medium.length > 0) {
            this.departfi = medium;
          } else {
            if (good.length > 0) {
              this.departfi = good;
            }

          }
        }
      } else {
        if (medium.length > 0) {
          this.departfi = medium;
        } else {
          if (good.length > 0) {
            this.departfi = good;
          }

        }
      }


      if (this.departfi && this.departfi.length == 0) {
        this.departfi = other;
      }
    }
    else {
      for (let i = 0; i < list.length; i++) {
        // var dateTime = new Date(list.flights[i].departTime);
        // Hour = moment(dateTime).format("HH");
        // Minute = moment(dateTime).format("mm");
        let ar_time = list[i].departTime.toString().split('T')[1];
        Hour = ar_time.toString().split(':')[0];
        Minute = ar_time.toString().split(':')[1];
        kq = Hour * 60 + Number(Minute);

        if (kq >= 600 && kq < 1440) {
          if (kq >= 840 && kq <= 1020) {
            good.push(list[i]);
          }
          else {
            medium.push(list[i]);
          }
        }
        else {
          other.push(list[i]);
        }
      }
      if (medium.length > 0) {
        this.returnfi = medium;
      }
      else {
        if (good.length > 0) {
          this.returnfi = good;
        }

      }
      if (this.returnfi.length == 0) {
        this.returnfi = other;
      }
    }

  }

  checkReturnList(list){
    var Hour; var Minute; var kq;
    var good = [];
    var medium = [];
    var other = [];
      for (let i = 0; i < list.flights.length; i++) {
        // var dateTime = new Date(list.flights[i].departTime);
        // Hour = moment(dateTime).format("HH");
        // Minute = moment(dateTime).format("mm");
        let ar_time = list.flights[i].departTime.toString().split('T')[1];
        Hour = ar_time.toString().split(':')[0];
        Minute = ar_time.toString().split(':')[1];
        kq = Hour * 60 + Number(Minute);

        if (kq >= 600 && kq < 1440) {
          if (kq >= 840 && kq <= 1020) {
            good.push(list.flights[i]);
          }
          else {
            medium.push(list.flights[i]);
          }
        }
        else {
          other.push(list.flights[i]);
        }
      }
      if(medium && medium.length >0 && good && good.length >0){
        if(good[0].priceorder <= medium[0].priceorder ){
          this.returnfi = good;
        }else{
          if (medium.length > 0) {
            this.returnfi = medium;
          }else{
           if(good.length>0)
            {
              this.returnfi = good;
            }
            
          }
        }
      }else {
        if (medium.length > 0) {
          this.returnfi = medium;
        }else{
         if(good.length>0)
          {
            this.returnfi = good;
          }
          
        }
      }
      
      if(this.returnfi.length ==0){
        this.returnfi = other;
      }
  }

  /**
   * Hàm bind lại thông tin chuyến bay + tiền vé khi thay đổi chuyến
   * PDANH 27/04/2019
   */
  loadFlightData(departFlight, returnFlight) {
    var se = this;
    se.listDeparture = [];
    if (departFlight && departFlight.length > 0) {
      se.listDeparture.push(departFlight[0]);
    
      let de_date = new Date(departFlight[0].departTime);
      let de_date_landing = new Date(departFlight[0].landingTime);
      let de_hour = moment(de_date).format("HH");
      let de_minute = moment(de_date).format("mm");
      let de_hour_landing = moment(de_date_landing).format("HH");
      let de_minute_landing = moment(de_date_landing).format("mm");
      if (departFlight[0].departTime.toString().indexOf('T')) {
        de_date = new Date(departFlight[0].departTime.toString().split('T')[0]);
        de_date_landing = new Date(departFlight[0].landingTime.toString().split('T')[0]);
        let de_time = departFlight[0].departTime.toString().split('T')[1];
        de_hour = de_time.toString().split(':')[0];
        de_minute = de_time.toString().split(':')[1];
        let ar_time_landing = departFlight[0].landingTime.toString().split('T')[1];
        de_hour_landing = ar_time_landing.toString().split(':')[0];
        de_minute_landing = ar_time_landing.toString().split(':')[1];
      }

      // se.de_departtime = de_hour + ':' + de_minute + ' → ' + de_hour_landing + ':' + de_minute_landing;
      se.de_departtime = de_hour + ':' + de_minute;
      se.re_departtime = de_hour_landing + ':' + de_minute_landing;
      se.bookCombo.departTimeStr = de_hour + ':' + de_minute + ' → ' + de_hour_landing + ':' + de_minute_landing;
      se.de_departdatestr = se.getDayOfWeek(de_date)+', '+moment(de_date).format('DD')+ ' '+ 'thg' + ' ' +  moment(de_date).format('MM');
      se.bookCombo.de_departdatestr = "Đi " + se.getDayOfWeek(de_date) + ', ' + moment(de_date).format('DD-MM-YYYY');
      se.daydeparttitle = se.getDayOfWeek(de_date) + ', ' + moment(de_date).format('DD-MM-YYYY');
      se.operatedBydep=departFlight[0].operatedBy;
      //tính thời gian bay
      let hours: any = Math.floor(departFlight[0].flightDuration / 60);
      let minutes: any = departFlight[0].flightDuration * 1 - (hours * 60);
      if (hours < 10) {
        hours = hours != 0 ? "0" + hours : "0";
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      departFlight[0].departTimeDisplay = moment(departFlight[0].departTime).format("HH:mm");
      departFlight[0].landingTimeDisplay = moment(departFlight[0].landingTime).format("HH:mm");
      departFlight[0].flightTimeDisplay = hours + "h" + minutes;
      departFlight[0].flightTimeDetailDisplay = hours + "h" + minutes + "m";
      se.departlocationdisplay = departFlight[0].fromPlaceCode + "   ·   " + departFlight[0].flightTimeDetailDisplay + "   ·   " + departFlight[0].toPlaceCode;
      if (departFlight[0].operatedBy && departFlight[0].urlLogo.indexOf('content/img') == -1) {
        departFlight[0].urlLogo = "https://www.ivivu.com/ve-may-bay/content/img/brands/w100/" + departFlight[0].urlLogo;
      }
      let priceFlightAdult = 0;
      departFlight[0].priceSummaries.forEach(e => {
        if (e.passengerType == 0) {
          priceFlightAdult += e.price;
        }
      });
      if (se.bookcombodetail.departTicketSale > priceFlightAdult) {

        let pricesdepartstr = se.bookcombodetail.departTicketSale - priceFlightAdult;
        se.PriceAvgPlusTAStr.toString().replace(/\./g, '').replace(/\,/g, '') - pricesdepartstr;
        //se.de_flightpricetitle = pricesdepartstr.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") + 'đ';
        se.de_departpriceincrease = false;

      }
      if (se.bookcombodetail.departTicketSale <= priceFlightAdult) {

        let pricesdepartstr = priceFlightAdult - se.bookcombodetail.departTicketSale;
        se.PriceAvgPlusTAStr.toString().replace(/\./g, '').replace(/\,/g, '') + pricesdepartstr;
        //se.de_flightpricetitle = pricesdepartstr.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") + 'đ';
        se.de_departpriceincrease = true
      }
      //Gán giá vé máy bay chênh
      se.JsonSurchargeFee.DepartTicketDifferenceFee = priceFlightAdult - se.bookcombodetail.departTicketSale;
      //thông tin hành lý
      if (departFlight[0].ticketCondition) {
        se.departConditionInfo = departFlight[0].ticketCondition;
        if (se.departConditionInfo && se.departConditionInfo.luggageSigned && se.departConditionInfo.luggageSigned.length <= 4) {
          se.totaldepluggage = se.departConditionInfo.luggageSigned;
        }
        else {
          se.totaldepluggage = 0;
        }
      }

    }

    if (returnFlight && returnFlight.length > 0) {
      se.listDeparture.push(returnFlight[0]);
  
      let ar_date = new Date(returnFlight[0].departTime);
      let ar_date_landing = new Date(returnFlight[0].landingTime);
      let ar_hour = moment(ar_date).format("HH");
      let ar_minute = moment(ar_date).format("mm");
      let ar_hour_landing = moment(ar_date_landing).format("HH");
      let ar_minute_landing = moment(ar_date_landing).format("mm");
      if (returnFlight[0].departTime.toString().indexOf('T')) {
        ar_date = new Date(returnFlight[0].departTime.toString().split('T')[0]);
        ar_date_landing = new Date(returnFlight[0].landingTime.toString().split('T')[0]);
        let ar_time = returnFlight[0].departTime.toString().split('T')[1];
        ar_hour = ar_time.toString().split(':')[0];
        ar_minute = ar_time.toString().split(':')[1];
        let ar_time_landing = returnFlight[0].landingTime.toString().split('T')[1];
        ar_hour_landing = ar_time_landing.toString().split(':')[0];
        ar_minute_landing = ar_time_landing.toString().split(':')[1];
      }

      // se.ar_departtime = ar_hour + ':' + ar_minute + ' → ' + ar_hour_landing + ':' + ar_minute_landing;
      se.ar_departtime = ar_hour + ':' + ar_minute
      se.ar_returntime = ar_hour_landing + ':' + ar_minute_landing;
      se.bookCombo.returnTimeStr = ar_hour + ':' + ar_minute + ' → ' + ar_hour_landing + ':' + ar_minute_landing;
      se.ar_departdatestr = se.getDayOfWeek(ar_date) +', '+moment(ar_date).format('DD')+ ' '+ 'thg' + ' ' +  moment(ar_date).format('MM'), 
      se.bookCombo.ar_departdatestr = "Về " + se.getDayOfWeek(ar_date) + ', ' + moment(ar_date).format('DD-MM-YYYY');
      se.dayreturntitle = se.getDayOfWeek(ar_date) + ', ' + moment(ar_date).format('DD-MM-YYYY');
      //tính thời gian bay
      let hours: any = Math.floor(returnFlight[0].flightDuration / 60);
      let minutes: any = returnFlight[0].flightDuration * 1 - (hours * 60);
      if (hours < 10) {
        hours = hours != 0 ? "0" + hours : "0";
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      returnFlight[0].departTimeDisplay = moment(returnFlight[0].departTime).format("HH:mm");
      returnFlight[0].landingTimeDisplay = moment(returnFlight[0].landingTime).format("HH:mm");
      returnFlight[0].flightTimeDisplay = hours + "h" + minutes;
      returnFlight[0].flightTimeDetailDisplay = hours + "h" + minutes + "m";
      se.returnlocationdisplay = returnFlight[0].fromPlaceCode + "   ·   " + returnFlight[0].flightTimeDetailDisplay + "   ·   " + returnFlight[0].toPlaceCode;
      se.operatedByret=returnFlight[0].operatedBy;
      if (returnFlight[0].operatedBy && returnFlight[0].urlLogo.indexOf('content/img') == -1) {
        returnFlight[0].urlLogo = "https://www.ivivu.com/ve-may-bay/content/img/brands/w100/" + returnFlight[0].urlLogo;
      }
      let priceFlightAdult = 0;
      returnFlight[0].priceSummaries.forEach(e => {
        if (e.passengerType == 0) {
          priceFlightAdult += e.price;
        } 
      });
      if (se.bookcombodetail.returnTicketSale > priceFlightAdult) {
        let pricesreturnstr = se.bookcombodetail.returnTicketSale - priceFlightAdult;
        se.PriceAvgPlusTAStr.toString().replace(/\./g, '').replace(/\,/g, '') - pricesreturnstr;
        //se.ar_flightpricetitle = pricesreturnstr.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") + 'đ';
        se.ar_departpriceincrease = false
      }
      if (se.bookcombodetail.returnTicketSale <= priceFlightAdult) {
        let pricesreturnstr = priceFlightAdult - se.bookcombodetail.returnTicketSale;
        se.PriceAvgPlusTAStr.toString().replace(/\./g, '').replace(/\,/g, '') + pricesreturnstr;
        //se.ar_flightpricetitle = pricesreturnstr.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") + 'đ';
        se.ar_departpriceincrease = true
      }
      //Gán giá vé máy bay chênh
      se.JsonSurchargeFee.ReturnTicketDifferenceFee = priceFlightAdult - se.bookcombodetail.returnTicketSale;
      //thông tin hành lý
      if (returnFlight[0].ticketCondition) {
        se.returnConditionInfo = returnFlight[0].ticketCondition;
        if (se.returnConditionInfo && se.returnConditionInfo.luggageSigned && se.returnConditionInfo.luggageSigned.length <= 4) {
          se.totalretluggage = se.returnConditionInfo.luggageSigned;
        }
        else {
          se.totalretluggage = 0;
        }
      }
    }
    if(se.currentDepartFlight){
      se.flightdeparttitle = 'Từ ' + se.currentDepartFlight[0].fromPlace + ' đi ' + se.currentDepartFlight[0].toPlace;
      se.fromPlace = se.currentDepartFlight[0].fromPlace;
      se.toPlace = se.currentDepartFlight[0].toPlace;
      se.callSummaryPrice(se.roomclass,se.index);
    }
    setTimeout(() => {
      se.ischeckwaitlug=true;
    }, 10 *1000)
    setTimeout(() => {
      se.loadflightpricedone = true;
    },4000)
  }

  getDayOfWeek(date): string {
    let coutthu = moment(date).format('dddd');
    switch (coutthu) {
      case "Monday":
        coutthu = "Thứ 2"
        break;
      case "Tuesday":
        coutthu = "Thứ 3"
        break;
      case "Wednesday":
        coutthu = "Thứ 4"
        break;
      case "Thursday":
        coutthu = "Thứ 5"
        break;
      case "Friday":
        coutthu = "Thứ 6"
        break;
      case "Saturday":
        coutthu = "Thứ 7"
        break;
      default:
        coutthu = "Chủ nhật"
        break;
    }
    return coutthu;
  }
  changeDate() {

  }
  next(value) {
    //build object flight json
    if (!this.currentDepartFlight || !this.currentReturnFlight) {
      if (!this.currentDepartFlight) {
        this.gf.showToastWarning('Không lấy được thông tin chuyến bay đi, mong quý khách thông cảm! Vui lòng chọn lại lịch bay.');
      } else {
        this.gf.showToastWarning('Không lấy được thông tin chuyến bay về, mong quý khách thông cảm! Vui lòng chọn lại lịch bay.');
      }
      this.zone.run(() => {
        this.PriceAvgPlusTAStr = 0;
        this.TotalPrice = 0;
      })

      return;
    }
    var pointprice = 0;
    var total = this.TotalPrice;
    if (this.ischeck) {
      pointprice = this.point;
      if (this.ischeckpoint) {
        pointprice = this.TotalPrice;
      }
      total = this.Pricepointshow.toString().replace(/\./g, '').replace(/\,/g, '');
    }
    if (this.ischeckbtnpromo) {
      total = this.Pricepointshow.toString().replace(/\./g, '').replace(/\,/g, '');
      this.bookCombo.ischeckbtnpromo = this.ischeckbtnpromo;
      this.bookCombo.discountpromo = this.discountpromo;
    }
    else {
      this.bookCombo.ischeckbtnpromo = this.ischeckbtnpromo;
      this.bookCombo.discountpromo = 0;
      this.promocode = "";
    }
    total = Number(total).toFixed(0);
    var officestr = "";
    if (this.bookCombo.ComboDetail.departureCode) {
      officestr = this.bookCombo.ComboDetail.departureCode == "SGN" ? "HCM" : (this.bookCombo.ComboDetail.departureCode == "HAN" ? "HN" : (this.bookCombo.ComboDetail.departureCode == "VCA" ? "CT" : ""));
    }
    this.storage.get('jti').then(jti => {
      if (jti) {
        if (value == 1) {
          if (this.ischangefly) {
            this.JsonSurchargeFee.ComboData = {
              ComboId: this.bookCombo.ComboId,
              MealTypeCode: this.bookCombo.MealTypeCode,
              AdultCombo: this.adultCombo
            }

            this.gf.googleAnalytionCustom('add_to_cart', { item_category: 'flightcombo', item_name: this.bookCombo.ComboTitle, item_id: this.bookCombo.HotelCode, start_date: this.cin, end_date: this.cout, origin: this.bookCombo.ComboDetail.departureCode, destination: this.bookCombo.arrivalCode, value: Number(this.PriceAvgPlusTAStr.toString().replace(/\./g, '').replace(/\,/g, '')), currency: "VND" });

            this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_INITIATED_CHECKOUT, {'fb_content_type': 'hotel'  ,'fb_content_id': this.bookCombo.HotelCode,'fb_num_items': 1, 'fb_value': this.gf.convertNumberToDouble(this.PriceAvgPlusTAStr) ,  'fb_currency': 'VND' ,
            'checkin_date': this.cin ,'checkout_date ': this.cout,'num_adults': this.searchhotel.adult,'num_children': (this.searchhotel.child ? this.searchhotel.child : 0),'value': this.gf.convertNumberToDouble(this.PriceAvgPlusTAStr) ,  'currency': 'VND' }, this.gf.convertNumberToFloat(this.PriceAvgPlusTAStr) );

            //thêm id chuyến bay để giữ chỗ
            this.bookCombo.iddepart = this.currentDepartFlight[0].id;
            this.bookCombo.idreturn = this.currentReturnFlight[0].id;
            this.bookCombo.MealTypeName = this.breakfast;
            this.bookCombo.MealTypeIndex = this.index;
            let objflight = {
              FlightBooking: {
                departFlightId: this.currentDepartFlight[0].id,
                returnFlightId: this.currentReturnFlight[0].id,
                fromPlaceCode: this.bookCombo.ComboDetail.departureCode,
                toPlaceCode: this.bookCombo.arrivalCode,
                flightType: "2",
                adult: this.adults,
                child: this.children - this.infant,
                infant: this.infant,
                departFlight: {
                  AirlineCode: this.currentDepartFlight[0].details[0].airlineCode,
                  FlightNumber: this.currentDepartFlight[0].details[0].flightNumber,
                  DepartTime: this.currentDepartFlight[0].details[0].departTime,
                  FareBasis: this.currentDepartFlight[0].fareBasis,
                  FlightDuration: this.currentDepartFlight[0].details[0].flightDuration,
                  LandingTime: this.currentDepartFlight[0].details[0].landingTime,
                  Stops: 0,
                  TicketType: this.currentDepartFlight[0].ticketType,
                  PriceSummaries: this.currentDepartFlight[0].priceSummaries,

                },
                returnFlight: {
                  AirlineCode: this.currentReturnFlight[0].details[0].airlineCode,
                  FlightNumber: this.currentReturnFlight[0].details[0].flightNumber,
                  DepartTime: this.currentReturnFlight[0].details[0].departTime,
                  FareBasis: this.currentReturnFlight[0].fareBasis,
                  FlightDuration: this.currentReturnFlight[0].details[0].flightDuration,
                  LandingTime: this.currentReturnFlight[0].details[0].landingTime,
                  Stops: 0,
                  TicketType: this.currentReturnFlight[0].ticketType,
                  PriceSummaries: this.currentReturnFlight[0].priceSummaries,
                }

              },
              HotelBooking: {
                NoteForSupp:this.elementMealtype.NoteForSupplier,
                HotelId: this.booking.HotelId.toString(),
                CheckIn: moment(this.booking.CheckInDate).format('YYYY-MM-DD'),
                CheckOut: moment(this.booking.CheckOutDate).format('YYYY-MM-DD'),
                TotalRoom: this.roomnumber,
                TotalPrices: total,
                //TotalPrices : this.bookCombo.totalprice,
                RoomStatus: this.elementMealtype.Status,
                BreakfastInclude: this.elementMealtype.Code,
                BreakfastIncludeName: this.elementMealtype.Name,
                PaymentMethod: "2",
                CName: this.username,
                CEmail: this.email,
                CAddress: "",
                CPhone: "",
                CTitle: "",
                LeadingName: "",
                LeadingEmail: "",
                LeadingPhone: "",
                LeadingNationality: "",
                IsInvoice: 0,
                Note: "",
                BookingStatus: "0",
                Adult: this.adults,
                AdultCombo: this.adultCombo,
                Child: this.children,
                TravPaxPrices: this.TravPaxPrices,
                Office: officestr,//Gán văn phòng khi tạo bkg
                FromPlaceCode: this.bookCombo.ComboDetail.departureCode,
                RoomName: this.elementMealtype.RoomName,
                RoomPrices: this.elementMealtype.PriceAvgPlusTA,
                RoomId: this.elementMealtype.RoomId,
                MealTypeNote: (this.elementMealtype.PromotionInclusions.length > 0 ? this.elementMealtype.PromotionInclusions.join(' \r\n') : "") + (this.elementMealtype.Notes != null && this.elementMealtype.Notes.length > 0 ? this.elementMealtype.Notes.join('\r\n,') : ""),
                PromotionNote: this.elementMealtype.PromotionNote,
                PersonIncharge: "",
                DiscountAmount: "0",
                SupplierRef: null,
                ChildAges: this.booking.ChildAge,
                PenaltyDescription: null,
                CompName: "",
                CompAddress: "",
                CompTaxCode: "",
                CompanyContactEmail:"",
                CompanyContactName:"",
                JsonSurchargeFee: JSON.stringify(this.JsonSurchargeFee),
                Commission: this.Commission,
                Source: '6',
                Supplier: (this.elementMealtype.IsHoliday ? "Holiday" : (this.elementMealtype.IsVoucher ? "Voucher" : this.elementMealtype.Supplier)),
                MemberId: jti,
                UsePointPrice: pointprice,
                promotionCode: this.promocode,
                AllomentBreak: this.elementMealtype.AllomentBreak,
                IsPromotionAllotment: this.elementMealtype.IsPromotionAllotment,
                //hasInsurrance = true: đã bao gồm bảo hiểm trong giá combo
                //hasInsurrance = false: chưa bao gồm bảo hiểm
                //checkInsurranceFee = true: Người dùng có tích chọn gói bảo hiểm
                //checkInsurranceFee = false: Người dùng không chọn gói bảo hiểm
                Insurance: this.hasInsurrance ? this.hasInsurrance : (this.bookCombo.checkInsurranceFee ? true : false),
                SurchargeFee: this.objInsurranceFee ? JSON.stringify({
                  type: "Insurance",
                  PassengerType: 0,
                  PriceType: 1,
                  Text: this.objInsurranceFee.name,
                  Quantity: this.adults + this.children,
                  Price: this.hasInsurrance ? 0 : this.objInsurranceFee.priceNetTotal,
                  PriceFormat: this.objInsurranceFee.priceNetTotal.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1."),
                  "$$hashKey": "object:473"
                }) : 0,
                SupplierName: this.elementMealtype.Supplier,
                HotelCheckDetailTokenVinHms: this.elementMealtype.HotelCheckDetailTokenVinHms ? this.elementMealtype.HotelCheckDetailTokenVinHms : "",
                HotelCheckPriceTokenSMD: this.elementMealtype.HotelCheckPriceTokenSMD ? this.elementMealtype.HotelCheckPriceTokenSMD : ""
              },
              airLineLuggageDepart: [],
              airLineLuggageReturn: [],
              ResId: ""
            };
            this.gf.setParams(objflight, 'flightcombo');
            this.initFlightBooking(objflight).then((checklug) => {
             
              var se = this;
              this.activityService.objFlightComboPaymentBreakDown = { objDetail: se };
              this.ischangefly = false;
              var objinfofly = {
                de_departdatestr: se.de_departdatestr,
                de_departtime: se.de_departtime,
                re_departtime: se.re_departtime,
                departlocationdisplay: se.departlocationdisplay,
                listDeparture: se.listDeparture,
                ar_departdatestr: se.ar_departdatestr,
                ar_departtime: se.ar_departtime,
                ar_returntime: se.ar_returntime,
                returnlocationdisplay: se.returnlocationdisplay,
                operatedBydep: se.operatedBydep,
                operatedByret: se.operatedByret
              }
              this.gf.setParams(objinfofly, 'objinfofly');
              
              this.navCtrl.navigateForward('/flightcomboadddetails');
            });
          }
          else {
            var objinfofly = {
              de_departdatestr: this.de_departdatestr,
              de_departtime: this.de_departtime,
              re_departtime: this.re_departtime,
              departlocationdisplay: this.departlocationdisplay,
              listDeparture: this.listDeparture,
              ar_departdatestr: this.ar_departdatestr,
              ar_departtime: this.ar_departtime,
              ar_returntime: this.ar_returntime,
              returnlocationdisplay: this.returnlocationdisplay,
              operatedBydep: this.operatedBydep,
              operatedByret: this.operatedByret
            }
            this.gf.setParams(objinfofly, 'objinfofly');
            objectFlight = this.gf.getParams('flightcombo');
            //set lại objhotel;
            var objhotel = {
              NoteForSupp:this.elementMealtype.NoteForSupplier,
              HotelId: this.booking.HotelId.toString(),
              CheckIn: moment(this.booking.CheckInDate).format('YYYY-MM-DD'),
              CheckOut: moment(this.booking.CheckOutDate).format('YYYY-MM-DD'),
              TotalRoom: this.roomnumber,
              TotalPrices: total,
              //TotalPrices : this.bookCombo.totalprice,
              RoomStatus: this.elementMealtype.Status,
              BreakfastInclude: this.elementMealtype.Code,
              BreakfastIncludeName: this.elementMealtype.Name,
              PaymentMethod: "2",
              CName: this.username,
              CEmail: this.email,
              CAddress: "",
              CPhone: "",
              CTitle: "",
              LeadingName: "",
              LeadingEmail: "",
              LeadingPhone: "",
              LeadingNationality: "",
              IsInvoice: 0,
              Note: "",
              BookingStatus: "0",
              Adult: this.adults,
              AdultCombo: this.adultCombo,
              Child: this.children,
              TravPaxPrices: this.TravPaxPrices,
              Office: officestr,//Gán văn phòng khi tạo bkg
              FromPlaceCode: this.bookCombo.ComboDetail.departureCode,
              RoomName: this.elementMealtype.RoomName,
              RoomPrices: this.elementMealtype.PriceAvgPlusTA,
              RoomId: this.elementMealtype.RoomId,
              MealTypeNote: (this.elementMealtype.PromotionInclusions.length > 0 ? this.elementMealtype.PromotionInclusions.join(' \r\n') : "") + (this.elementMealtype.Notes != null && this.elementMealtype.Notes.length > 0 ? this.elementMealtype.Notes.join('\r\n,') : ""),
              PromotionNote: this.elementMealtype.PromotionNote,
              PersonIncharge: "",
              DiscountAmount: "0",
              SupplierRef: null,
              ChildAges: this.booking.ChildAge,
              PenaltyDescription: null,
              CompName: "",
              CompAddress: "",
              CompTaxCode: "",
              JsonSurchargeFee: JSON.stringify(this.JsonSurchargeFee),
              Commission: this.Commission,
              Source: '6',
              Supplier: (this.elementMealtype.IsHoliday ? "Holiday" : (this.elementMealtype.IsVoucher ? "Voucher" : this.elementMealtype.Supplier)),
              MemberId: jti,
              UsePointPrice: pointprice,
              promotionCode: this.promocode,
              AllomentBreak: this.elementMealtype.AllomentBreak,
              IsPromotionAllotment: this.elementMealtype.IsPromotionAllotment,
              //hasInsurrance = true: đã bao gồm bảo hiểm trong giá combo
              //hasInsurrance = false: chưa bao gồm bảo hiểm
              //checkInsurranceFee = true: Người dùng có tích chọn gói bảo hiểm
              //checkInsurranceFee = false: Người dùng không chọn gói bảo hiểm
              Insurance: this.hasInsurrance ? this.hasInsurrance : (this.bookCombo.checkInsurranceFee ? true : false),
              SurchargeFee: this.objInsurranceFee ? JSON.stringify({
                type: "Insurance",
                PassengerType: 0,
                PriceType: 1,
                Text: this.objInsurranceFee.name,
                Quantity: this.adults + this.children,
                Price: this.hasInsurrance ? 0 : this.objInsurranceFee.priceNetTotal,
                PriceFormat: this.objInsurranceFee.priceNetTotal.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1."),
                "$$hashKey": "object:473"
              }) : 0,
              SupplierName: this.elementMealtype.Supplier,
              HotelCheckDetailTokenVinHms: this.elementMealtype.HotelCheckDetailTokenVinHms ? this.elementMealtype.HotelCheckDetailTokenVinHms : "",
              HotelCheckPriceTokenSMD: this.elementMealtype.HotelCheckPriceTokenSMD ? this.elementMealtype.HotelCheckPriceTokenSMD : ""
            }
            objectFlight.HotelBooking = objhotel;
            this.gf.setParams(objectFlight, 'flightcombo');
            this.navCtrl.navigateForward('/flightcomboadddetails');
          }
        } else {
          this.valueGlobal.backValue = 'flightcomboinfoluggage';
          if (this.ischangefly) {
            this.JsonSurchargeFee.ComboData = {
              ComboId: this.bookCombo.ComboId,
              MealTypeCode: this.bookCombo.MealTypeCode,
              AdultCombo: this.adultCombo
            }
            var objectFlight = {
              FlightBooking: {
                fromPlaceCode: this.bookCombo.ComboDetail.departureCode,
                toPlaceCode: this.bookCombo.arrivalCode,
                flightType: "2",
                adult: this.adults,
                child: this.children - this.infant,
                infant: this.infant,
                departFlight: {
                  AirlineCode: this.currentDepartFlight[0].details[0].airlineCode,
                  FlightNumber: this.currentDepartFlight[0].details[0].flightNumber,
                  DepartTime: this.currentDepartFlight[0].details[0].departTime,
                  FareBasis: this.currentDepartFlight[0].fareBasis,
                  FlightDuration: this.currentDepartFlight[0].details[0].flightDuration,
                  LandingTime: this.currentDepartFlight[0].details[0].landingTime,
                  Stops: 0,
                  TicketType: this.currentDepartFlight[0].ticketType,
                  PriceSummaries: this.currentDepartFlight[0].priceSummaries
                },
                returnFlight: {
                  AirlineCode: this.currentReturnFlight[0].details[0].airlineCode,
                  FlightNumber: this.currentReturnFlight[0].details[0].flightNumber,
                  DepartTime: this.currentReturnFlight[0].details[0].departTime,
                  FareBasis: this.currentReturnFlight[0].fareBasis,
                  FlightDuration: this.currentReturnFlight[0].details[0].flightDuration,
                  LandingTime: this.currentReturnFlight[0].details[0].landingTime,
                  Stops: 0,
                  TicketType: this.currentReturnFlight[0].ticketType,
                  PriceSummaries: this.currentReturnFlight[0].priceSummaries
                }

              },
              HotelBooking: {
                NoteForSupp:this.elementMealtype.NoteForSupplier,
                HotelId: this.booking.HotelId.toString(),
                CheckIn: moment(this.booking.CheckInDate).format('YYYY-MM-DD'),
                CheckOut: moment(this.booking.CheckOutDate).format('YYYY-MM-DD'),
                TotalRoom: this.roomnumber,
                TotalPrices: total,
                //TotalPrices : this.bookCombo.totalprice,
                RoomStatus: this.elementMealtype.Status,
                BreakfastInclude: this.elementMealtype.Code,
                BreakfastIncludeName: this.elementMealtype.Name,
                PaymentMethod: "2",
                CName: this.username,
                CEmail: this.email,
                CAddress: "",
                CPhone: "",
                CTitle: "",
                LeadingName: "",
                LeadingEmail: "",
                LeadingPhone: "",
                LeadingNationality: "",
                IsInvoice: 0,
                Note: "",
                BookingStatus: "0",
                Adult: this.adults,
                AdultCombo: this.adultCombo,
                Child: this.children,
                TravPaxPrices: this.TravPaxPrices,
                Office: officestr,//Gán văn phòng khi tạo bkg
                FromPlaceCode: this.bookCombo.ComboDetail.departureCode,
                RoomName: this.elementMealtype.RoomName,
                RoomPrices: this.elementMealtype.PriceAvgPlusTA,
                RoomId: this.elementMealtype.RoomId,
                MealTypeNote: (this.elementMealtype.PromotionInclusions.length > 0 ? this.elementMealtype.PromotionInclusions.join(' \r\n') : "") + (this.elementMealtype.Notes != null && this.elementMealtype.Notes.length > 0 ? this.elementMealtype.Notes.join('\r\n,') : ""),
                PromotionNote: this.elementMealtype.PromotionNote,
                PersonIncharge: "",
                DiscountAmount: "0",
                SupplierRef: null,
                ChildAges: this.booking.ChildAge,
                PenaltyDescription: null,
                CompName: "",
                CompAddress: "",
                CompTaxCode: "",
                JsonSurchargeFee: JSON.stringify(this.JsonSurchargeFee),
                Commission: this.Commission,
                Source: '6',
                Supplier: (this.elementMealtype.IsHoliday ? "Holiday" : (this.elementMealtype.IsVoucher ? "Voucher" : this.elementMealtype.Supplier)),
                MemberId: jti,
                UsePointPrice: pointprice,
                promotionCode: this.promocode,
                AllomentBreak: this.elementMealtype.AllomentBreak,
                IsPromotionAllotment: this.elementMealtype.IsPromotionAllotment,
                //hasInsurrance = true: đã bao gồm bảo hiểm trong giá combo
                //hasInsurrance = false: chưa bao gồm bảo hiểm
                //checkInsurranceFee = true: Người dùng có tích chọn gói bảo hiểm
                //checkInsurranceFee = false: Người dùng không chọn gói bảo hiểm
                Insurance: this.hasInsurrance ? this.hasInsurrance : (this.bookCombo.checkInsurranceFee ? true : false),
                SurchargeFee: this.objInsurranceFee ? JSON.stringify({
                  type: "Insurance",
                  PassengerType: 0,
                  PriceType: 1,
                  Text: this.objInsurranceFee.name,
                  Quantity: this.adults + this.children,
                  Price: this.hasInsurrance ? 0 : this.objInsurranceFee.priceNetTotal,
                  PriceFormat: this.objInsurranceFee.priceNetTotal.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1."),
                  "$$hashKey": "object:473"
                }) : 0,
                SupplierName: this.elementMealtype.Supplier,
                HotelCheckDetailTokenVinHms: this.elementMealtype.HotelCheckDetailTokenVinHms ? this.elementMealtype.HotelCheckDetailTokenVinHms : "",
                HotelCheckPriceTokenSMD: this.elementMealtype.HotelCheckPriceTokenSMD ? this.elementMealtype.HotelCheckPriceTokenSMD : ""
              },
              airLineLuggageDepart: [],
              airLineLuggageReturn: [],
              ResId: ""
            }
            this.gf.setParams(objectFlight, 'flightcombo');
            this.gf.googleAnalytionCustom('add_to_cart', { item_category: 'flightcombo', item_name: this.bookCombo.ComboTitle, item_id: this.bookCombo.HotelCode, start_date: this.cin, end_date: this.cout, origin: this.bookCombo.ComboDetail.departureCode, destination: this.bookCombo.arrivalCode, value: Number(this.PriceAvgPlusTAStr.toString().replace(/\./g, '').replace(/\,/g, '')), currency: "VND" });

            this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_INITIATED_CHECKOUT, {'fb_content_type': 'hotel'  ,'fb_content_id': this.bookCombo.HotelCode,'fb_num_items': 1, 'fb_value': this.gf.convertNumberToDouble(this.PriceAvgPlusTAStr) ,  'fb_currency': 'VND' ,
            'checkin_date': this.cin ,'checkout_date ': this.cout,'num_adults': this.searchhotel.adult,'num_children': (this.searchhotel.child ? this.searchhotel.child : 0), 'value': this.gf.convertNumberToDouble(this.PriceAvgPlusTAStr) ,  'currency': 'VND' }, this.gf.convertNumberToFloat(this.PriceAvgPlusTAStr) );

            //thêm id chuyến bay để giữ chỗ
            this.bookCombo.iddepart = this.currentDepartFlight[0].id;
            this.bookCombo.idreturn = this.currentReturnFlight[0].id;
            this.bookCombo.MealTypeName = this.breakfast;
            this.bookCombo.MealTypeIndex = this.index;
            let objflight = {
              FlightBooking: {
                departFlightId: this.currentDepartFlight[0].id,
                returnFlightId: this.currentReturnFlight[0].id,
                fromPlaceCode: this.bookCombo.ComboDetail.departureCode,
                toPlaceCode: this.bookCombo.arrivalCode,
                flightType: "2",
                adult: this.adults,
                child: this.children - this.infant,
                infant: this.infant,
                departFlight: {
                  AirlineCode: this.currentDepartFlight[0].details[0].airlineCode,
                  FlightNumber: this.currentDepartFlight[0].details[0].flightNumber,
                  DepartTime: this.currentDepartFlight[0].details[0].departTime,
                  FareBasis: this.currentDepartFlight[0].fareBasis,
                  FlightDuration: this.currentDepartFlight[0].details[0].flightDuration,
                  LandingTime: this.currentDepartFlight[0].details[0].landingTime,
                  Stops: 0,
                  TicketType: this.currentDepartFlight[0].ticketType,
                  PriceSummaries: this.currentDepartFlight[0].priceSummaries,

                },
                returnFlight: {
                  AirlineCode: this.currentReturnFlight[0].details[0].airlineCode,
                  FlightNumber: this.currentReturnFlight[0].details[0].flightNumber,
                  DepartTime: this.currentReturnFlight[0].details[0].departTime,
                  FareBasis: this.currentReturnFlight[0].fareBasis,
                  FlightDuration: this.currentReturnFlight[0].details[0].flightDuration,
                  LandingTime: this.currentReturnFlight[0].details[0].landingTime,
                  Stops: 0,
                  TicketType: this.currentReturnFlight[0].ticketType,
                  PriceSummaries: this.currentReturnFlight[0].priceSummaries,
                }

              }
            };
            this.initFlightBooking(objflight).then((checklug) => {
             
              this.ischangefly = false;
              this.bookCombo.departConditionInfo = this.departConditionInfo;
              this.bookCombo.returnConditionInfo = this.returnConditionInfo;
              // if (this.loader) {
              //   this.loader.dismiss();
              // }
              this.navCtrl.navigateForward('/flightcomboinfoluggage');
            });
          }
          else {
            this.navCtrl.navigateForward('/flightcomboinfoluggage');
          }
        }

      }
    })


  }

  initFlightBooking(objFlight): Promise<any> {
    var se = this;
    se.presentLoading();
    return new Promise((resolve, reject) => {
      objFlight.InitFlight = true;
      var settings = {
        "async": true,
        "crossDomain": true,
        "url": C.urls.baseUrl.urlContracting + '/api/ToolsAPI/CreateComboBooking',
        //url: "http://192.168.10.103:8000//api/ToolsAPI/CreateComboBooking",
        "method": "POST",
        "headers": {
          "content-type": "application/x-www-form-urlencoded"
        },
        "data": $.param(objFlight)
      }

      $.ajax(settings).done(function (response) {
        if (se.loader) {
          se.loader.dismiss();
        }
        if (response.Error) {
          var error = {
            page: "flightcomboadddetails",
            func: "CreateComboBooking",
            message: response.Error,
            content: response.body,
            type: "warning",
            param: JSON.stringify(settings)
          };
          C.writeErrorLog(error, response);
          resolve(false);
        }
        else {
          var res = response;
          if (res.flyBookingId) {
            let objflight = se.gf.getParams('flightcombo');
            objflight.ResId = res.flyBookingId;
            objflight.airLineLuggageDepart = (res.ancillary && res.ancillary.Baggage) ? res.ancillary.Baggage : [];
            objflight.airLineLuggageReturn = (res.ancillaryReturn && res.ancillaryReturn.Baggage) ? res.ancillaryReturn.Baggage : [];
            se.gf.setParams(objflight, 'flightcombo');
          }

          resolve(true);
        }
      })
    })

  }

  changedate() {
    this.navCtrl.navigateForward('/hoteldetail/' + this.booking.HotelId);
    //this.navCtrl.navigateBack(['/app/tabs/hoteldetail/'+this.booking.HotelId]);
  }

  async presentLoading() {
     this.loader = await this.loadingCtrl.create({
    });
    this.loader.present();
  }


  async showListFlight(index) {
    var se = this;
    se.gf.setParams({ listdepart: se.listDepart, listreturn: se.listReturn, title: index == 0 ? se.daydeparttitle : se.dayreturntitle, isdepart: index == 0 ? true : false, flightdeparttitle: se.flightdeparttitle }, 'listflight');
    const modal: HTMLIonModalElement =
      await this.modalCtrl.create({
        component: FlightDeparturePage
      });
    modal.present();

    modal.onDidDismiss().then((data: OverlayEventDetail) => {
      if (data.data) {
        se.zone.run(() => {
          se.ischangefly = true;
          se.bookCombo.Luggage = 0;
          let objDepart = se.listDepart;
          let objReturn = se.listReturn;
          if (!se.currentDepartFlight) {
            se.currentDepartFlight = objDepart;
          }

          if (!se.currentReturnFlight) {
            se.currentReturnFlight = objReturn;
          }

          if (data.data.isdepart) {
            se.currentDepartFlight = data.data.flights.flights;
            se.loadFlightData(se.currentDepartFlight, se.currentReturnFlight);
          } else {
            se.currentReturnFlight = data.data.flights.flights;
            se.loadFlightData(se.currentDepartFlight, se.currentReturnFlight);
          }

        })
      }
    })
  }


  ////////////////////////////////////
  /**
   * Hàm tính lại tổng tiền + phụ phí
   * PDANH 27/04/2019
   */
  MathPriceAll() {
    var se = this;
    var surchargePlus = se.JsonSurchargeFee.SurchargeFee.reduce(function (acc, val) { return acc + val.Price; }, 0);
    let adultFlightNumber = se.adults;
    se.JsonSurchargeFee.TransportPriceSale = se.transportPriceSale + se.transportPriceSaleForChild;
    se.totalTransportPriceSale = se.JsonSurchargeFee.TransportPriceSale;
    se.totalSurchargeWeekendFee = 0;

    se.JsonSurchargeFee.TotalAll = se.TotalPriceCombo +
      se.JsonSurchargeFee.RoomDifferenceFee
      + se.JsonSurchargeFee.DepartTicketDifferenceFee
      + se.JsonSurchargeFee.ReturnTicketDifferenceFee
      + se.totalSurchargeWeekendFee
      + se.totalTransportPriceSale
      + surchargePlus
      + se.totalAirLineLuggage;
    let GetSubPriceForAdultExtrabed = se.JsonSurchargeFee.SurchargeFee.filter(function (e) { return e.PassengerType == 0 && (e.Code == 'EXBA' || e.type == 'flightDepart' || e.type == 'flightReturn') });
    se.totalPriceForEXBA = se.JsonSurchargeFee.SurchargeFee.filter(function (e) { return e.Code == 'EXBA' }).reduce(function (acc, val) { return acc + val.Price / val.Quantity; }, 0);//= GetSubPriceForAdultExtrabed.reduce(function (acc, val) { return acc + val.Price / val.Quantity; }, 0);

    let GetSubPriceForChild = se.JsonSurchargeFee.SurchargeFee.filter(function (e) { return (e.PassengerType == 1 || e.PassengerType == 2) && (e.Code == 'CWE' || e.Code == 'EXBC' || e.type == 'flightDepart' || e.type == 'flightReturn') });
    se.totalPriceForChildCWE = se.JsonSurchargeFee.SurchargeFee.filter(function (e) { return e.Code == 'CWE' }).reduce(function (acc, val) { return acc + val.Price / val.Quantity; }, 0);
    se.totalPriceForChildEXBC = se.JsonSurchargeFee.SurchargeFee.filter(function (e) { return e.Code == 'EXBC' }).reduce(function (acc, val) { return acc + val.Price / val.Quantity; }, 0);
    se.totalPriceInfant = se.JsonSurchargeFee.SurchargeFee.filter(function (e) { return e.PassengerType == 2 }).reduce(function (acc, val) { return acc + val.Price; }, 0);

    let GetSubPriceForOtherFee = se.JsonSurchargeFee.SurchargeFee.filter(function (e) { return e.Code != 'EXBA' && e.Code != 'CWE' && e.Code != 'EXBC' && e.type != 'flightDepart' && e.type != 'flightReturn' });

    se.totalPriceForOtherFee = GetSubPriceForOtherFee.reduce(function (acc, val) { return acc + val.Price; }, 0);
    se.JsonSurchargeFee.TotalAll = se.JsonSurchargeFee.TotalAll - se.totalPriceForOtherFee;
    se.JsonSurchargeFee.AdultUnit = se.ComboPriceDiff.RoomDiff.AdultUnit;


    se.totalGetSubPriceForAdultExtrabed = GetSubPriceForAdultExtrabed.reduce(function (acc, val) { return acc + val.Price; }, 0);
    se.totalGetSubPriceForChild = GetSubPriceForChild.reduce(function (acc, val) { return acc + val.Price; }, 0);

    se.totalQuantityChildCWEAndEXBC = se.JsonSurchargeFee.SurchargeFee.filter(function (e) { return e.Code == 'CWE' || e.Code == 'EXBC' }).reduce(function (acc, val) { return acc + val.Quantity; }, 0);
    se.totalQuantityFlightForChildAndInfant = se.JsonSurchargeFee.SurchargeFee.filter(function (e) { return (e.PassengerType == 1 || e.PassengerType == 2) && (e.type == 'flightDepart' || e.type == 'flightReturn') }).reduce(function (acc, val) { return acc + val.Quantity; }, 0) / 2;
    se.totalQuantityFlightForChild = se.JsonSurchargeFee.SurchargeFee.filter(function (e) { return (e.PassengerType == 1) && (e.type == 'flightDepart' || e.type == 'flightReturn') }).reduce(function (acc, val) { return acc + val.Quantity; }, 0) / 2 - adultFlightNumber;

    se.totalPriceChild = 0;
    if (se.totalPriceForChildCWE > 0 && se.totalPriceForChildEXBC > 0) {
      se.totalPriceChild == 0
    }
    else if (se.totalQuantityChildCWEAndEXBC < (se.totalQuantityFlightForChildAndInfant) && se.currentDepartFlight != undefined && se.currentReturnFlight != undefined) {
      se.totalPriceChild = (se.totalQuantityFlightForChild - se.totalQuantityChildCWEAndEXBC) * (se.ComboPriceDiff.DepartFlightDiff.ChildUnit + se.ComboPriceDiff.ReturnFlightDiff.ChildUnit) + (se.ChildOtherFeeTotal - se.ChildOtherFee * se.totalQuantityChildCWEAndEXBC);  //$.grep(se.JsonSurchargeFee.SurchargeFee, function (e) { return e.PassengerType == 1 }).reduce(function (acc, val) { return acc + val.Price; }, 0);
    }

    if (adultFlightNumber > 0) {

      se.totalPriceChild += (se.ComboPriceDiff.DepartFlightDiff.AdultUnitExb + se.ComboPriceDiff.ReturnFlightDiff.AdultUnitExb) * adultFlightNumber;
    }

    if (se.totalChild > 0) {
      se.ComboPriceDiff.RoomDiff.ChildUnit = se.totalGetSubPriceForChild / se.totalChild;

    }
    se.totalFlightDepart = se.currentDepartFlight == undefined ? 0 : se.currentDepartFlight[0].priceSummaries.reduce(function (acc, val) { return acc + val.total; }, 0);
    se.totalFlightReturn = se.currentReturnFlight == undefined ? 0 : se.currentReturnFlight[0].priceSummaries.reduce(function (acc, val) { return acc + val.total; }, 0);
    se.commissionFlight = se.ComboPriceDiff.DepartFlightDiff.CommissionAdult * se.AdultCombo + se.ComboPriceDiff.ReturnFlightDiff.CommissionAdult * se.AdultCombo;
    se.commissionDepart = se.ComboPriceDiff.DepartFlightDiff.CommissionAdult * se.AdultCombo;
    if (se.commissionFlight < 0) {
      se.commissionFlight = 0;
    }
    se.Commission = (se.elementMealtype == undefined ? 0 : se.JsonSurchargeFee.TotalAll - (se.totalFlightDepart + se.totalFlightReturn + (se.transportPriceNet * se.totalAdult + se.transportPriceNetForChild * (se.totalInfant + se.totalChild) + se.elementMealtype.PriceAvgPlusNet * se.elementMealtype.TotalRoom * se.TotalNight) + se.JsonSurchargeFee.BaggageDepart + se.JsonSurchargeFee.BaggageReturn));
    if (!se.bookCombo.Luggage) {
      se.bookCombo.Luggage = 0;
    }
    let pricetotal =Math.ceil(se.JsonSurchargeFee.TotalAll) + se.bookCombo.Luggage;
    //Tính thêm tiền bảo hiểm nếu có tích chọn mua bảo hiểm đi kèm combo
    if(!se.hasInsurrance && se.bookCombo.checkInsurranceFee){
      pricetotal += se.objInsurranceFee.priceTaTotal;
    }
    se.PriceAvgPlusTAStr = pricetotal.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
    se.TotalPrice = pricetotal;
    var tempprice = se.TotalPrice;
    
    if (se.point > 0) {
      se.Pricepoint = tempprice - se.point;
      se.Pricepointshow = se.Pricepoint.toLocaleString();
      if (se.Pricepoint <= 0) {
        se.ischeckpoint = true;
        se.Pricepointshow = 0;
      }
      else{
        se.ischeckpoint = false;
      }
      //se.PriceAvgPlusTAStr = se.Pricepoint.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
    }
    if (se.ischeckbtnpromo) {
      var total = se.PriceAvgPlusTAStr.toString().replace(/\./g, '').replace(/\,/g, '');
      if (se.ischeck) {
        total = se.Pricepointshow.toString().replace(/\./g, '').replace(/\,/g, '');
      }
      se.Pricepointshow = total -  se.discountpromo;
      if (se.Pricepointshow>0) {
        se.Pricepointshow = se.Pricepointshow.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
        se.ischeckbtnpromo = true;
        se.ischeckpromo=true;
      }
      else
      {
        se.Pricepointshow=0;
      }
      se.ischecktext=0;
      se.ischeckerror=0;
    }
    se.bookCombo.totalprice = se.Pricepointshow ? se.Pricepointshow.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") : se.PriceAvgPlusTAStr;
    se.bookCombo.pricePointShow = se.Pricepointshow;
    se.bookCombo.PriceAvgPlusTAStr = se.PriceAvgPlusTAStr;
    se.bookCombo.point = se.point;
    if((!se.departfi || !se.returnfi) && se.loaddatafromcache){
      se.zone.run(()=>{
        se.PriceAvgPlusTAStr = 0;
        se.loadpricedone = true;
        se.loadflightpricedone = true;
      })
    }
  }

  edit() {
    this.zone.run(() => {
      //Tính thêm tiền bảo hiểm nếu có tích chọn mua bảo hiểm đi kèm combo
      if (!this.bookCombo.Luggage) {
        this.bookCombo.Luggage = 0;
      }
      var pricetotal = this.JsonSurchargeFee.TotalAll + this.bookCombo.Luggage;

      if (!this.hasInsurrance && this.bookCombo.checkInsurranceFee) {
        pricetotal += this.objInsurranceFee.priceTaTotal;
        this.PriceAvgPlusTAStr = pricetotal;
      }
      this.TotalPrice = pricetotal;
      if (this.ischeck) {
        if (this.ischeckpoint) {
          this.Pricepointshow = 0;
        }
        else {
          if (this.ischeckpromo) {
            this.price = this.point.toLocaleString();
            var tempprice = this.TotalPrice;
            this.Pricepoint = tempprice - this.point - this.discountpromo;
            this.Pricepointshow = this.Pricepoint.toLocaleString();
            this.bookCombo.totalprice = this.Pricepointshow.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
          } else {
            this.price = this.point.toLocaleString();
            var tempprice = this.TotalPrice;
            this.Pricepoint = tempprice - this.point;
            this.Pricepointshow = this.Pricepoint.toLocaleString();
            this.PriceAvgPlusTAStr = this.TotalPrice.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
            this.bookCombo.totalprice = this.Pricepointshow.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
          }
        }

      } else {
        if (this.ischeckpromo) {
          this.PriceAvgPlusTAStr = this.TotalPrice.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
          var tempprice = this.TotalPrice;
          this.Pricepointshow = tempprice - this.discountpromo;
          this.Pricepointshow = this.Pricepointshow.toLocaleString();
        }
        else {
          this.PriceAvgPlusTAStr = this.TotalPrice.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
          this.bookCombo.totalprice = this.TotalPrice;
        }

      }
    })
  }
  /**
   * Hàm tính lại phụ phí của phòng
   * PDANH 27/04/2019
   */
  MathGaladinnerAdExtrabed() {
    var se = this;
    if (se.elementMealtype == undefined) return false;


    se.totalExtraBedAndGalaDinerListTA = 0;
    se.JsonSurchargeFee.SurchargeFee = [];
    if (se.elementMealtype.ExtraBedAndGalaDinerList.length > 0) {
      for (var i = 0; i < se.elementMealtype.ExtraBedAndGalaDinerList.length; i++) {
        if (se.elementMealtype.ExtraBedAndGalaDinerList[i].ChargeType == "Per Night" || se.elementMealtype.ExtraBedAndGalaDinerList[i].ChargeType == "Per Bed" || se.elementMealtype.ExtraBedAndGalaDinerList[i].ChargeType == "Per Meal WithoutNo") {
          se.totalExtraBedAndGalaDinerListTA += se.elementMealtype.ExtraBedAndGalaDinerList[i].Quantity.value * se.elementMealtype.ExtraBedAndGalaDinerList[i].PriceOTA * se.TotalNight;
          var priceItem2 = { Code: se.elementMealtype.ExtraBedAndGalaDinerList[i].Code, type: 'room', PassengerType: (se.elementMealtype.ExtraBedAndGalaDinerList[i].ChargeOn == 'Per Adult' ? 0 : 1), PriceType: 0, Text: se.elementMealtype.ExtraBedAndGalaDinerList[i].NameDisplay, Quantity: se.elementMealtype.ExtraBedAndGalaDinerList[i].Quantity.value, Price: (se.elementMealtype.ExtraBedAndGalaDinerList[i].Quantity.value * se.elementMealtype.ExtraBedAndGalaDinerList[i].PriceOTA * se.TotalNight), PriceFormat: (se.elementMealtype.ExtraBedAndGalaDinerList[i].Quantity.value * se.elementMealtype.ExtraBedAndGalaDinerList[i].PriceOTA * se.TotalNight).toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") };
          se.JsonSurchargeFee.SurchargeFee.push(priceItem2);

        }
        else {
          se.totalExtraBedAndGalaDinerListTA += se.elementMealtype.ExtraBedAndGalaDinerList[i].Quantity.value * se.elementMealtype.ExtraBedAndGalaDinerList[i].PriceOTA;
          var priceItem2 = { Code: se.elementMealtype.ExtraBedAndGalaDinerList[i].Code, type: 'room', PassengerType: (se.elementMealtype.ExtraBedAndGalaDinerList[i].ChargeOn == 'Per Adult' ? 0 : 1), PriceType: 0, Text: se.elementMealtype.ExtraBedAndGalaDinerList[i].NameDisplay, Quantity: se.elementMealtype.ExtraBedAndGalaDinerList[i].Quantity.value, Price: (se.elementMealtype.ExtraBedAndGalaDinerList[i].Quantity.value * se.elementMealtype.ExtraBedAndGalaDinerList[i].PriceOTA), PriceFormat: (se.elementMealtype.ExtraBedAndGalaDinerList[i].Quantity.value * se.elementMealtype.ExtraBedAndGalaDinerList[i].PriceOTA).toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") };
          se.JsonSurchargeFee.SurchargeFee.push(priceItem2);
        }
      }
    }


    //AdultOtherFee
    se.AdultOtherFee = 0;
    se.elementMealtype.ExtraBedAndGalaDinerList.forEach(e => {
      if (e.ChargeOn == 'Per Adult' && e.Code != 'EXBA') {
        se.AdultOtherFee += e.PriceOTA;
      }
    });
    //ChildOtherFee
    se.ChildOtherFee = 0;
    se.elementMealtype.ExtraBedAndGalaDinerList.forEach(e => {
      if (e.ChargeOn == 'Per Child' && e.Code != 'CWE' && e.Code != 'EXBC') {
        se.ChildOtherFee += e.PriceOTA;
      }
    });
    //ChildOtherFeeTotal
    se.ChildOtherFeeTotal = 0;
    se.elementMealtype.ExtraBedAndGalaDinerList.forEach(e => {
      if (e.ChargeOn == 'Per Child' && e.Code != 'CWE' && e.Code != 'EXBC') {
        se.ChildOtherFeeTotal += e.PriceOTA * e.Quantity.value;
      }
    });

    se.AdultOtherFee = se.AdultOtherFee * (se.roomclass.Rooms[0].IncludeAdults * se.roomnumber) / se.AdultCombo;
    se.PriceDiffUnit = se.AdultOtherFee + ((se.elementMealtype.PriceAvgDefaultTA * se.roomnumber) * se.TotalNight / se.AdultCombo) - se.roomPriceSale;

    se.ComboPriceDiff.RoomDiff.Total = se.elementMealtype.PriceAvgPlusTotalTA - (se.roomPriceSale * se.AdultCombo) //- totalExtraBedAndGalaDinerListTA;
    se.ComboPriceDiff.RoomDiff.AdultUnit = se.PriceDiffUnit;

    se.JsonSurchargeFee.RoomDifferenceFee = se.PriceDiffUnit * se.AdultCombo + (se.totalAdult - se.AdultCombo) * se.AdultOtherFee + se.ChildOtherFeeTotal;

  }
  /**
   * Tính lại giá + phụ phí khi đổi vé máy bay chiều đi
   * PDANH 27/04/2019
   */
  SaveFlightDepartSelected() {
    var se = this;
    if (!se.currentDepartFlight) return;
    se.JsonSurchargeFee.SurchargeFee = se.JsonSurchargeFee.SurchargeFee.filter(function (e) { return e.type != 'flightDepart'; });
    var priceFlightAdult = 0;
    se.currentDepartFlight[0].priceSummaries.forEach(e => {
      if (e.passengerType == 0) {
        priceFlightAdult += e.price;
      }
    });

    se.ComboPriceDiff.DepartFlightDiff.AdultUnit = priceFlightAdult - se.departTicketSale;
    var tempDiff = se.ComboPriceDiff.DepartFlightDiff.AdultUnit;
    se.ComboPriceDiff.DepartFlightDiff.CommissionAdult = Math.ceil((se.ComboPriceDiff.DepartFlightDiff.AdultUnit < 0 ? Math.abs(se.ComboPriceDiff.DepartFlightDiff.AdultUnit * 0.3) : -tempDiff) / 1000) * 1000;
    //Hiển thị giá tăng/giảm chiều đi
    se.de_flightpricetitle = Math.ceil((se.ComboPriceDiff.DepartFlightDiff.AdultUnit < 0 ? Math.abs(se.ComboPriceDiff.DepartFlightDiff.AdultUnit * 0.7) : tempDiff) / 1000) * 1000;
    se.de_flightpricetitle = se.de_flightpricetitle.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") + 'đ';
    se.de_departpriceincrease = tempDiff > 0 ? true : false;
    se.ComboPriceDiff.DepartFlightDiff.AdultUnit = se.ComboPriceDiff.DepartFlightDiff.AdultUnit + (se.ComboPriceDiff.DepartFlightDiff.CommissionAdult > 0 ? se.ComboPriceDiff.DepartFlightDiff.CommissionAdult : 0);
    se.ComboPriceDiff.DepartFlightDiff.AdultUnitExb = 0;
    se.currentDepartFlight[0].priceSummaries.forEach(e => {
      if (e.passengerType == 0) {
        se.ComboPriceDiff.DepartFlightDiff.AdultUnitExb += e.price;
      }
    });

    se.ComboPriceDiff.DepartFlightDiff.ChildUnit = 0;
    if (se.totalChild > 0) {
      se.ComboPriceDiff.DepartFlightDiff.ChildUnit = 0;
      se.currentDepartFlight[0].priceSummaries.forEach(e => {
        if (e.passengerType == 1) {
          se.ComboPriceDiff.DepartFlightDiff.ChildUnit += e.price;
        }
      });

    }

    se.ComboPriceDiff.DepartFlightDiff.InfantUnit = 0;
    if (se.totalInfant > 0) {
      se.currentDepartFlight[0].priceSummaries.forEach(e => {
        if (e.passengerType == 2) {
          se.ComboPriceDiff.DepartFlightDiff.InfantUnit += e.price;
        }
      });
    }

    se.JsonSurchargeFee.DepartTicketDifferenceFee = se.ComboPriceDiff.DepartFlightDiff.AdultUnit * se.AdultCombo;
    if (se.totalChild > 0) {
      var priceItem = { type: 'flightDepart', PassengerType: 1, Quantity: (se.totalChild), PriceType: 1, Text: 'Vé máy bay chiều đi', Price: (se.ComboPriceDiff.DepartFlightDiff.ChildUnit * (se.totalChild)), PriceFormat: (se.ComboPriceDiff.DepartFlightDiff.ChildUnit * (se.totalChild)).toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") };
      se.JsonSurchargeFee.SurchargeFee.push(priceItem);
    }
    if (se.totalInfant > 0) {
      var priceItem = { type: 'flightDepart', PassengerType: 2, Quantity: (se.totalInfant), PriceType: 1, Text: 'Vé máy bay chiều đi', Price: (se.ComboPriceDiff.DepartFlightDiff.InfantUnit * se.totalInfant), PriceFormat: (se.ComboPriceDiff.DepartFlightDiff.InfantUnit * se.totalInfant).toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") };
      se.JsonSurchargeFee.SurchargeFee.push(priceItem);
    }
    if (se.totalAdultExtrabed > 0 && se.adultFlightNumber == 0) {
      var priceItem = { type: 'flightDepart', PassengerType: 0, Quantity: se.totalAdultExtrabed, PriceType: 1, Text: 'Vé máy bay chiều đi', Price: priceFlightAdult * se.totalAdultExtrabed, PriceFormat: (priceFlightAdult * se.totalAdultExtrabed).toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") };
      se.JsonSurchargeFee.SurchargeFee.push(priceItem);
    } else if (se.adultFlightNumber > 0) {
      if (se.totalAdultExtrabed > 0) {
        var priceItem = { type: 'flightDepart', PassengerType: 0, Quantity: se.totalAdultExtrabed, PriceType: 1, Text: 'Vé máy bay chiều đi', Price: priceFlightAdult * se.totalAdultExtrabed, PriceFormat: (priceFlightAdult * se.totalAdultExtrabed).toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") };
        se.JsonSurchargeFee.SurchargeFee.push(priceItem);
      }

      var priceItem1 = { type: 'flightDepart', PassengerType: 1, childAsAdult: true, Quantity: se.adultFlightNumber, PriceType: 1, Text: 'Vé máy bay chiều đi', Price: (priceFlightAdult * se.adultFlightNumber), PriceFormat: (priceFlightAdult * se.adultFlightNumber).toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") };
      se.JsonSurchargeFee.SurchargeFee.push(priceItem1);

    }

    se.MathPriceAll();
  }
  /**
   * Tính lại giá + phụ phí khi đổi vé máy bay chiều về
   * PDANH 27/04/2019
   */
  SaveFlightReturnSelected() {
    var se = this;
    if (!se.currentReturnFlight) return;
    se.JsonSurchargeFee.SurchargeFee = se.JsonSurchargeFee.SurchargeFee.filter(function (e) { return e.type != 'flightReturn'; });
    //var priceFlightAdult = $.grep(se.FlightReturnSelected.priceSummaries, function (e) { return e.passengerType == 0; }).reduce(function (acc, val) { return acc + val.price; }, 0);
    var priceFlightAdult = 0;
    se.currentReturnFlight[0].priceSummaries.forEach(e => {
      if (e.passengerType == 0) {
        priceFlightAdult += e.price;
      }
    });
    se.ComboPriceDiff.ReturnFlightDiff.AdultUnit = priceFlightAdult - se.returnTicketSale;
    var tempDiff = se.ComboPriceDiff.ReturnFlightDiff.AdultUnit;
    se.ComboPriceDiff.ReturnFlightDiff.CommissionAdult = Math.ceil((se.ComboPriceDiff.ReturnFlightDiff.AdultUnit < 0 ? Math.abs(se.ComboPriceDiff.ReturnFlightDiff.AdultUnit * 0.3) : -tempDiff) / 1000) * 1000;
    //Hiển thị giá tăng/giảm chiều về
    se.ar_flightpricetitle = Math.ceil((se.ComboPriceDiff.ReturnFlightDiff.AdultUnit < 0 ? Math.abs(se.ComboPriceDiff.ReturnFlightDiff.AdultUnit * 0.7) : tempDiff) / 1000) * 1000;
    se.ar_flightpricetitle = se.ar_flightpricetitle.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") + 'đ';
    se.ar_returnpriceincrease = tempDiff > 0 ? true : false;
    se.ComboPriceDiff.ReturnFlightDiff.AdultUnit = se.ComboPriceDiff.ReturnFlightDiff.AdultUnit + (se.ComboPriceDiff.ReturnFlightDiff.CommissionAdult > 0 ? se.ComboPriceDiff.ReturnFlightDiff.CommissionAdult : 0);
    //se.ComboPriceDiff.ReturnFlightDiff.AdultUnitExb = $.grep(se.FlightReturnSelected.priceSummaries, function (e) { return e.passengerType == 0 }).reduce(function (acc, val) { return acc + val.price; }, 0);
    se.ComboPriceDiff.ReturnFlightDiff.AdultUnitExb = 0;
    se.currentReturnFlight[0].priceSummaries.forEach(e => {
      if (e.passengerType == 0) {
        se.ComboPriceDiff.ReturnFlightDiff.AdultUnitExb += e.price;
      }
    });

    se.ComboPriceDiff.ReturnFlightDiff.ChildUnit = 0;
    if (se.totalChild > 0) {
      se.ComboPriceDiff.ReturnFlightDiff.ChildUnit = 0;
      se.currentReturnFlight[0].priceSummaries.forEach(e => {
        if (e.passengerType == 1) {
          se.ComboPriceDiff.ReturnFlightDiff.ChildUnit += e.price;
        }
      });

    }

    se.ComboPriceDiff.ReturnFlightDiff.InfantUnit = 0;
    if (se.totalInfant > 0) {
      se.currentReturnFlight[0].priceSummaries.forEach(e => {
        if (e.passengerType == 2) {
          se.ComboPriceDiff.ReturnFlightDiff.InfantUnit += e.price;
        }
      });
    }

    se.JsonSurchargeFee.ReturnTicketDifferenceFee = se.ComboPriceDiff.ReturnFlightDiff.AdultUnit * se.AdultCombo;
    if (se.totalChild > 0) {
      var priceItem = { type: 'flightReturn', PassengerType: 1, Quantity: (se.totalChild), PriceType: 1, Text: 'Vé máy bay chiều về', Price: (se.ComboPriceDiff.ReturnFlightDiff.ChildUnit * (se.totalChild)), PriceFormat: (se.ComboPriceDiff.ReturnFlightDiff.ChildUnit * (se.totalChild)).toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") };
      se.JsonSurchargeFee.SurchargeFee.push(priceItem);
    }
    if (se.totalInfant > 0) {
      var priceItem = { type: 'flightReturn', PassengerType: 2, Quantity: (se.totalInfant), PriceType: 1, Text: 'Vé máy bay chiều về', Price: (se.ComboPriceDiff.ReturnFlightDiff.InfantUnit * se.totalInfant), PriceFormat: (se.ComboPriceDiff.ReturnFlightDiff.InfantUnit * se.totalInfant).toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") };
      se.JsonSurchargeFee.SurchargeFee.push(priceItem);
    }
    if (se.totalAdultExtrabed > 0 && se.adultFlightNumber == 0) {
      var priceItem = { type: 'flightReturn', PassengerType: 0, Quantity: se.totalAdultExtrabed, PriceType: 1, Text: 'Vé máy bay chiều về', Price: priceFlightAdult * se.totalAdultExtrabed, PriceFormat: (priceFlightAdult * se.totalAdultExtrabed).toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") };
      se.JsonSurchargeFee.SurchargeFee.push(priceItem);
    }
    else
      if (se.adultFlightNumber > 0) {
        if (se.totalAdultExtrabed > 0) {
          var priceItem = { type: 'flightReturn', PassengerType: 0, Quantity: se.totalAdultExtrabed, PriceType: 1, Text: 'Vé máy bay chiều về', Price: priceFlightAdult * se.totalAdultExtrabed, PriceFormat: (priceFlightAdult * se.totalAdultExtrabed).toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") };
          se.JsonSurchargeFee.SurchargeFee.push(priceItem);
        }
        var priceItem1 = { type: 'flightReturn', PassengerType: 1, childAsAdult: true, Quantity: se.adultFlightNumber, PriceType: 1, Text: 'Vé máy bay chiều về', Price: (priceFlightAdult * se.adultFlightNumber), PriceFormat: (priceFlightAdult * se.adultFlightNumber).toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") };
        se.JsonSurchargeFee.SurchargeFee.push(priceItem1);
      }

    se.MathPriceAll();
  }

  async showPenalty() {
    let alert = await this.alertCtrl.create({
      header: "Giá rẻ (không hoàn tiền)",
      message: "Đây là giá đặc biệt thấp hơn giá thông thường, không thể hủy hoặc thay đổi. Trong trường hợp không thể sử dụng combo sẽ không hoàn lại tiền. <p style='text-align:center !important;font-style:italic;margin-bottom:0'>Nếu bạn đã có kế hoạch chắc chắn thì hãy chớp lấy cơ hội này.</p>",
      cssClass: "cls-alert-carcombo",
      buttons: [{
        text: 'OK',
        role: 'OK',
        handler: () => {
          alert.dismiss();
        }
      }
      ]
    });
    alert.present();
  }

  async sendRequestCombo() {
    this.bookCombo.Address = this.Address;
    this.bookCombo.ComboId = this.bookcombodetail.comboId;
    this.bookCombo.isFlightCombo = true;
    this.bookCombo.isFlashSale = false;
    this.bookCombo.isNormalCombo = false;
    const modal: HTMLIonModalElement =
      await this.modalCtrl.create({
        component: RequestComboPage
      });
    modal.present();

    modal.onDidDismiss().then((data: OverlayEventDetail) => {
      this.valueGlobal.backValue = 'flightcombo';
      //this.navCtrl.navigateBack(['/app/tabs/hoteldetail/'+this.booking.HotelId]);
      this.navCtrl.navigateBack('/hoteldetail/'+ this.booking.HotelId);
    })
  }
  promofunc() {
    var se = this;
    if (se.promocode) {
      var options = {
        method: 'POST',
        url: C.urls.baseUrl.urlMobile + '/api/data/validpromocode',
        headers:
        {
          'postman-token': '37a7a641-c2dd-9fc6-178b-6a5eed1bc611',
          'cache-control': 'no-cache',
          'content-type': 'application/json'
        },
        body: { code: se.promocode, totalAmount: se.PriceAvgPlusTAStr.toString().replace(/\./g, '').replace(/\,/g, ''),comboDetailId: this.bookCombo.ComboId },
        json: true
      };
  
      request(options, function (error, response, body) {
        if (error) throw new Error(error);
        se.zone.run(() => {
          var json = body;
          if (json.error==0) {
            var total = se.PriceAvgPlusTAStr.toString().replace(/\./g, '').replace(/\,/g, '');
            if (se.ischeck) {
              total = se.Pricepointshow.toString().replace(/\./g, '').replace(/\,/g, '');
            }
            se.discountpromo=json.data.discount;
            se.Pricepointshow = total -  se.discountpromo;
            if (se.Pricepointshow>0) {
              se.Pricepointshow = se.Pricepointshow.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
              se.ischeckbtnpromo = true;
              se.ischeckpromo=true;
            }
            else
            {
              se.ischeckbtnpromo = true;
              se.Pricepointshow=0;
            }
            se.msg=json.msg;
            se.ischecktext=0;
            se.ischeckerror=0;
          }
          else if(json.error==1)
          {
            se.ischeckbtnpromo = false;
            se.msg=json.msg;
            se.discountpromo=0;
            se.ischecktext=1;
            se.ischeckerror=1;
          }
          else if(json.error==2)
          {
            se.ischeckbtnpromo = false;
            se.msg=json.msg;
            se.discountpromo=0;
            se.ischecktext=2;
            se.ischeckerror=1;
          }
          else {
            se.ischeckbtnpromo = false;
            se.msg = json.msg;
            se.discountpromo = 0;
            se.ischecktext = 2;
            se.ischeckerror = 1;
          }
        })
      });
    }
  }
  textchange() {
    this.ischeckbtnpromo = false;
    this.discountpromo=0;
    this.ischeckerror=0;
    this.msg="";
    this.ischecktext=3;
    if (this.ischeck) {
      if (this.ischeckpoint) {
        this.Pricepointshow = 0;
      }
      else {
          this.price = this.point.toLocaleString();
          var tempprice = this.PriceAvgPlusTAStr.replace(/\./g, '').replace(/\,/g, '');
          this.Pricepoint = tempprice - this.point;
          this.Pricepointshow = this.Pricepoint.toLocaleString();
      }
    }
  }
  click()
  {
    this.ischecktext=3
  }
  async showdiscount(){
    if (!this.ischeck) {
      $('.div-point').removeClass('div-disabled');
    this.valueGlobal.PriceAvgPlusTAStr=this.PriceAvgPlusTAStr;
    this.textpromotion="Nhập mã giảm giá";
    this.promocode="";
    this.ischeckbtnpromo=false;
    this.ischeckpromo=false;
    this.msg="";
    const modal: HTMLIonModalElement =
    await this.modalCtrl.create({
      component: AdddiscountPage,
    });
    modal.present();
    modal.onDidDismiss().then((data: OverlayEventDetail) => {
      if (data.data) {
        this.zone.run(() => {
          if (data.data.promocode) {
            $('.div-point').addClass('div-disabled');
            this.promocode=data.data.promocode;
            this.textpromotion=data.data.promocode;
            this.promofunc();
          }
        })
      }
    })
    }
  }

  async upgradeRoom(){
    var se = this;
    se.activityService.objFlightComboUpgrade = {};
    se.activityService.objFlightComboUpgrade.Rooms = se.jsonroom;
    se.activityService.objFlightComboUpgrade.CurrentRoom = se.elementMealtype;
    se.activityService.objFlightComboUpgrade.roomPriceSale = se.roomPriceSale;
    se.activityService.objFlightComboUpgrade.address = se.Address;
    se.valueGlobal.backValue = "flightcomboupgraderoom";
    se.navCtrl.navigateForward('/flightcomboupgraderoom/0');
   
  }

  /**
   * Tính lại tổng tiền combo sau khi nâng cấp phòng
   */
  callSummaryPriceAfterUpgradeRoom(itemroom, itemmealtype) {
    var se = this;
    if (itemroom && !itemroom.MSGCode) {
      // Giá nhà cung cấp
      se.TravPaxPrices = itemmealtype.PriceAvgPlusNet * se.roomnumber * se.TotalNight;

      se.roomclass = itemroom;
      se.nameroom = itemroom.ClassName;
      se.elementMealtype = itemmealtype;

      se.AdultCombo = itemroom.Rooms[0].IncludeAdults * se.elementMealtype.TotalRoom;
      se.AdultCombo = se.AdultCombo > se.totalAdult ? se.totalAdult : se.AdultCombo;

      se.transportPriceSale = se.transportPriceSale * (se.totalAdult - se.AdultCombo);
      se.transportPriceNet = se.transportPriceNet * (se.totalAdult - se.AdultCombo);

      se.TotalPriceCombo = se.totalPriceSale * se.AdultCombo;
      se.totalAdultExtrabed = se.totalAdult - se.AdultCombo;
      se.MathGaladinnerAdExtrabed();
      if (se.currentDepartFlight != undefined) {
        se.SaveFlightDepartSelected();
      }
      if (se.currentDepartFlight != undefined) {
        se.SaveFlightReturnSelected();
      }
      se.MathPriceAll();
    }
  }

  /**
   * Hàm tính lại phụ phí của phòng
   * PDANH 27/04/2019
   */
  calculateDiffPriceUnit() {
    var se = this;

    if(se.jsonroom && se.jsonroom.length >0){

      se.jsonroom.forEach(room => {
        room.MealTypeRates.forEach(element => {
          //AdultOtherFee
          let adultOtherFee = 0;
          element.ExtraBedAndGalaDinerList.forEach(e => {
            if (e.ChargeOn == 'Per Adult' && e.Code != 'EXBA') {
              adultOtherFee += e.PriceOTA;
            }
          });
          //ChildOtherFee
          let childOtherFee = 0;
          element.ExtraBedAndGalaDinerList.forEach(e => {
            if (e.ChargeOn == 'Per Child' && e.Code != 'CWE' && e.Code != 'EXBC') {
              childOtherFee += e.PriceOTA;
            }
          });
          //ChildOtherFeeTotal
          let childOtherFeeTotal = 0;
          element.ExtraBedAndGalaDinerList.forEach(e => {
            if (e.ChargeOn == 'Per Child' && e.Code != 'CWE' && e.Code != 'EXBC') {
              childOtherFeeTotal += e.PriceOTA * e.Quantity.value;
            }
          });
          let adultCombo = room.Rooms[0].IncludeAdults * element.TotalRoom;
          adultCombo = adultCombo > se.totalAdult ? se.totalAdult : adultCombo;

          adultOtherFee = adultOtherFee * (room.Rooms[0].IncludeAdults * se.roomnumber) / adultCombo;
          element.PriceDiffUnit = adultOtherFee + ((element.PriceAvgDefaultTA * se.roomnumber) * se.TotalNight / adultCombo) - se.roomPriceSale;
          element.PriceDiffUnit = Math.round(element.PriceDiffUnit);
        });
      });
      
      //se.ComboPriceDiff.RoomDiff.Total = se.elementMealtype.PriceAvgPlusTotalTA - (se.roomPriceSale * se.AdultCombo) //- totalExtraBedAndGalaDinerListTA;
      //se.ComboPriceDiff.RoomDiff.AdultUnit = se.PriceDiffUnit;

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

  closecalendar(){
    this.modalCtrl.dismiss();
  }

  async changeDateInfo() {
    var se = this;
    
    if (!this.loadflightpricedone) {
      this.presentToastwarming('Đang tìm vé máy bay tốt nhất. Xin quý khách vui lòng đợi trong giây lát!');
      return;
    }
    if(!this.allowclickcalendar){
      return;
    }
    

    this.allowclickcalendar = false;
    this.msgEmptyFlight = '';
    let arr = se.cin.split('-');
    let arr1 = se.cout.split('-');
    let newdatecin = new Date(arr[2], arr[1] - 1, arr[0]);
    let newdatecout = new Date(arr1[2], arr1[1] - 1, arr1[0]);
    let fromdate = new Date(moment(newdatecin).format('YYYY-MM-DD'));
    let todate = new Date(moment(newdatecout).format('YYYY-MM-DD'));
     if(this.valueGlobal.notSuggestDailyCB){
      for (let j = 0; j < this.valueGlobal.notSuggestDailyCB.length; j++) {
        this._daysConfig.push({
          date: this.valueGlobal.notSuggestDailyCB[j],
          cssClass: 'strikethrough'
        })
      }
     }
     if(this.arrBOD && this.arrBOD.length>0){
      for (let j = 0; j < this.arrBOD.length; j++) {
        this._daysConfig.push({
          date: this.arrBOD[j],
          cssClass: 'strikethrough'
        })
      }
    }
     if(this.valueGlobal.listlunar){
      for (let j = 0; j < this.valueGlobal.listlunar.length; j++) {
        this._daysConfig.push({
          date: this.valueGlobal.listlunar[j].date,
          subTitle: this.valueGlobal.listlunar[j].name,
          cssClass: 'lunarcalendar'
        })
      }
    }
    
    let Year=new Date().getFullYear()
    let Month=new Date().getMonth()
    let Day=new Date().getDate()
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
      daysConfig: this._daysConfig,
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
      $('.hotel-calendar-custom ion-calendar-modal ion-toolbar ion-buttons[slot=start]').append("<div class='div-close' (click)='closecalendar()'> <img class='header-img-close' src='./assets/ic_flight/icon_back.svg' ></div>");
        //add event close header
        $('.hotel-calendar-custom .header-img-close').click((e => this.closecalendar()));
        // if(se.valueGlobal.dayhot.length>0){
        //   let divmonth = $('.month-box');
        //   if(divmonth && divmonth.length >0){
        //     for (let index = 0; index < divmonth.length; index++) {
        //        const em = divmonth[index];
        //       //   let divsmall = $('#'+em.id+' dayhot');
        //       //   if(divsmall && divsmall.length >0){
        //           $('#'+em.id).append("<div class='div-month-text-small'></div>")
        //           $('#'+em.id+' .div-month-text-small').append("<div class='div-hot-price'><img class='img-hot-price' src='./assets/imgs/ic_fire.svg'/>  Giai đoạn giá siêu hot</div>");
        //         // }
        //     }
        //   }
        // }
    });
  }
  async clickedElement(e: any) {
    var obj: any = e.currentTarget;
    if ($(obj.parentNode).hasClass('endSelection') || $(obj.parentNode).hasClass('startSelection')) {
      if (this.modalCtrl) {
        let fday: any;
        let tday: any;
        var monthenddate: any;
        var yearenddate: any;
        var monthstartdate: any;
        var yearstartdate: any;
        var objTextMonthEndDate: any;
        var objTextMonthStartDate: any;
        if ($(obj.parentNode).hasClass('endSelection')) {
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
          //theem phan check ngay bat dau va ket thuc combo
          //pdanh 14-03-2022: Sửa lại rule cho giống page detail
          var diffday = 1;
          var diffdaystart =1;
          if(this.bookCombo.objComboDetail && this.bookCombo.objComboDetail.comboDetail && this.bookCombo.objComboDetail.comboDetail.stayTo){
            diffday = moment(todate).diff(moment(this.bookCombo.objComboDetail.comboDetail.stayTo),'days');
          }
          if(this.bookCombo.objComboDetail && this.bookCombo.objComboDetail.comboDetail && this.bookCombo.objComboDetail.comboDetail.stayFrom){
            diffdaystart = moment(fromdate).diff(moment(this.bookCombo.objComboDetail.comboDetail.stayFrom),'days');
          }
          //Combo vé máy bay
          if(diffday >1 || diffdaystart<0){
            this.presentToastwarming('Combo bắt đầu từ '+ moment(this.bookCombo.objComboDetail.comboDetail.stayFrom).format('DD-MM-YYYY') +' đến '+ moment(this.bookCombo.objComboDetail.comboDetail.stayTo).format('DD-MM-YYYY')+', Xin vui lòng chọn lại ngày khởi hành.');
            return;
          }
   
          if (fromdate && todate && moment(todate).diff(fromdate, 'days') > 0) {
            if (moment(todate).diff(fromdate, "days") > 30) {
              this.presentToastwarming('Ngày nhận và trả phòng phải trong vòng 30 ngày');
              return;
            }
            var se = this;
            se.PriceAvgPlusTAStr = 0;
            se.loadflightpricedone=false
            //Nếu chọn duration = 1 thì tự cộng thêm 1 ngày cho = duration combo
            let _duration = moment(todate).diff( moment(fromdate), 'days');
            if(_duration == 1){
              se.booking.CheckInDate = moment(fromdate).format('YYYY-MM-DD');
              se.booking.CheckOutDate = (moment(todate).add('days',1)).format('YYYY-MM-DD');
              se.cin = moment(fromdate).format('DD-MM-YYYY');
              se.cout = (moment(todate).add('days',1)).format('DD-MM-YYYY');
            }else{
              se.booking.CheckInDate = moment(fromdate).format('YYYY-MM-DD');
              se.booking.CheckOutDate = moment(todate).format('YYYY-MM-DD');
              se.cin = moment(fromdate).format('DD-MM-YYYY');
              se.cout = moment(todate).format('DD-MM-YYYY');
            }
            se.searchhotel.CheckInDate = se.booking.CheckInDate;
            se.searchhotel.CheckOutDate = se.booking.CheckOutDate;
            se.bookCombo.FormParam.CheckInDate = se.booking.CheckInDate;
            se.bookCombo.FormParam.CheckOutDate = se.booking.CheckOutDate;
            se.bookCombo.CheckInDate = se.booking.CheckInDate;
            se.bookCombo.CheckOutDate = se.booking.CheckOutDate;
            se.duration = moment(se.booking.CheckOutDate).diff( moment(se.booking.CheckInDate), 'days');
            se.dur = se.duration;
            se.TotalNight = se.duration;
            //hiện ngày check in out
            var cintemp=new Date(se.searchhotel.CheckInDate);
            se.cindisplay=moment(cintemp).format('DD')+ ' '+ 'thg' + ' ' +  moment(cintemp).format('MM')

            var couttemp=new Date(se.searchhotel.CheckOutDate);
            se.coutdisplay=moment(couttemp).format('DD')+ ' '+ 'thg' + ' ' +  moment(couttemp).format('MM');
            se.cinthudisplay = se.getDayOfWeek(se.searchhotel.CheckInDate);
            se.coutthudisplay = se.getDayOfWeek(se.searchhotel.CheckOutDate);
            se.ischangefly = true;
            se.bookCombo.Luggage = 0;
            se.gf.setCacheSearchHotelInfo({checkInDate: se.searchhotel.CheckInDate, checkOutDate: se.searchhotel.CheckOutDate, adult: se.searchhotel.adult, child: se.searchhotel.child, childAge: se.searchhotel.arrchild, roomNumber: se.searchhotel.roomnumber});
            se.storage.set('hasChangeDate', true);
            se.checkComboAfterChangedate();
            setTimeout(() => {
              se.modalCtrl.dismiss();
            }, 100)
            
          }
        }
      }
    }
  }

  /**
   * Check ngày cin,cout có thuộc khoảng valid của combo hiện tại hay không
   * @param combodetail object combo
   */
  checkComboDuration(combodetail) : Promise<any>{
    var se = this;
    return new Promise((resolve, reject) => {
      if (combodetail && combodetail.endDate) {
        var arr = combodetail.endDate.split('-');
        var newdate = new Date(arr[2], arr[1] - 1, arr[0]);
        var d = moment(newdate).format('YYYY-MM-DD');
        resolve(moment(se.searchhotel.CheckOutDate).diff(moment(d), 'days') > 1 ? false : true);
      }else{
        resolve(true);
      }
    })
  }

  checkComboAfterChangedate(){
    var se = this;
    var cb;
    se.loadComboData(cb);
    this.roomPriceSale = this.basepricesale;
    se.checkComboDuration(se.bookCombo.objComboDetail).then((valid) => {
        if(valid){
          //Valid thì check tiếp BOD
          se.checkBOD(se.bookCombo.objComboDetail.comboDetail.roomId).then((checkbod) =>{
            if(checkbod){
              if(se.bookCombo.checkInsurranceFee ){
                se.getInsurranceFee(se.bookCombo.ComboId).then((data)=>{
                  se.objInsurranceFee = data.data;
                })
              }
              
              se.getHotelContractPrice(se.bookCombo.FormParam).then((data) => {
                if (data) {
                  se.listDepart=[];
                  se.listReturn=[];
                  se.loadpricedone = false;
                  se.loadflightpricedone = false;
                  se.loadFlightDataNew(false);
                }
       
              });
            }else{
              //Không valid thì hiển thị gửi yêu cầu
              se.loadpricedone = true;
              se.loadflightpricedone = true;
              se.PriceAvgPlusTAStr =0;
            }
          })
        }else{
          //Không valid thì hiển thị gửi yêu cầu
          se.loadpricedone = true;
          se.loadflightpricedone = true;
          se.PriceAvgPlusTAStr =0;
        }
      })
    
  }

  loadComboData(cb) {
      if (this.bookCombo.ComboDetail.details.length == 1) {
        cb = this.bookCombo.ComboDetail.details[0];
        this.bookcombodetail = cb;
      } else {
        this.bookCombo.ComboDetail.details.forEach(element => {
          let df = moment(element.stayFrom).format('YYYY-MM-DD');
          let dt = moment(element.stayTo).format('YYYY-MM-DD');
          if (moment(this.booking.CheckInDate).diff(moment(df), 'days') >= 0 && moment(dt).diff(moment(this.booking.CheckInDate), 'days') >= 0
            && moment(this.booking.CheckOutDate).diff(moment(df), 'days') >= 0 && moment(dt).diff(moment(this.booking.CheckOutDate), 'days') >= 0) {
            cb = element;
            this.bookcombodetail = element;
          }
        });
        if (!cb) {
          cb = this.bookCombo.ComboDetail.details[0];
          this.bookcombodetail = cb;
        }
      }
      this.totalPriceSale = cb.totalPriceSale;
      this.departTicketSale = cb.departTicketSale;
      this.returnTicketSale = cb.returnTicketSale;
      this.basepricesale = cb.totalPriceSale - cb.departTicketSale - cb.returnTicketSale;  
  }

  checkBOD(roomid): Promise<any> {
    var se = this;
    return new Promise((resolve, reject) =>{
      var options = {
        method: 'GET',
        url: C.urls.baseUrl.urlGate + '/get-blackout-date',
        qs: { hotelId: se.booking.HotelId ? se.booking.HotelId : se.searchhotel.hotelID, roomId: roomid },
        headers:
        {
          'postman-token': '86c67bdc-5fcd-0240-5549-f3ea2b31faf8',
          'cache-control': 'no-cache'
        }
      };
      request(options, function (error, response, body) {
        if (error) {
          resolve(true);
          throw new Error(error);
        };
        var BOD = JSON.parse(body);
        var arrBOD = BOD.BlackOutDates;
        if (arrBOD.length > 0) {
          var checkcintemp = new Date(se.booking.CheckInDate);
          var checkdatecout = new Date(se.booking.CheckOutDate);
          var checkcin = moment(checkcintemp).format('YYYYMMDD');
          var checkcout = moment(checkdatecout).format('YYYYMMDD');
          for (let i = 0; i < arrBOD.length; i++) {
            var checkBODtemp = new Date(arrBOD[i]);
            var checkBOD = moment(checkBODtemp).format('YYYYMMDD');
            if (checkcin <= checkBOD && checkBOD < checkcout) {
              resolve(false);
              break;
            }
          }
        }
        resolve(true);
      })
    })
    
  }

  
  showComboDetail(){
    var se = this;
    se.valueGlobal.backValue = 'flightcombopaymentbreakdown';
    if (!se.bookCombo.Luggage) {
      se.bookCombo.Luggage = 0;
    }
    se.activityService.objFlightComboPaymentBreakDown = { objDetail: se };
    
    se.navCtrl.navigateForward("/flightcombopaymentbreakdown");
  }

  async getInsurranceFee(comboid): Promise<any>{
    var se = this;
    //let days = moment(this.cout).diff(moment(this.cin),'days') + 1;
    return new Promise((resolve, reject) =>{
      var optionscombo = {
        method: 'GET',
        url: C.urls.baseUrl.urlMobile + '/mobile/OliviaApis/ComboServiceFee?comboId=' + (comboid ? comboid : se.bookCombo.ComboId) + '&days=' + (se.dur*1+1) + '&pax=' + (se.adults + se.children),
        timeout: 10000, maxAttempts: 5, retryDelay: 2000,
        headers: {
          apisecret: '2Vg_RTAccmT1mb1NaiirtyY2Y3OHaqUfQ6zU_8gD8SU',
          apikey: '0HY9qKyvwty1hSzcTydn0AHAXPb0e2QzYQlMuQowS8U',
        }
      };
      request(optionscombo, function (error, response, body) {
        if (!error) {
          var result:any = JSON.parse(body);
          resolve(result);
        }
      })
      
    })
  }
  buyLuggage() {
    this.next(2);
  }
  getBOD(roomid)
  {
    var se=this;
    this.ischeckBOD=false;
    var options = {
      method: 'GET',
      url: C.urls.baseUrl.urlGate + '/get-blackout-date',
      qs: { hotelId: this.booking.HotelId, roomId: roomid },
      headers:
      {
        'postman-token': '86c67bdc-5fcd-0240-5549-f3ea2b31faf8',
        'cache-control': 'no-cache'
      }
    };
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      var BOD=JSON.parse(body);
      se.arrBOD=BOD.BlackOutDates;
    })
  }
}
