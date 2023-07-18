import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';
@Injectable({
    providedIn: 'root'  // <- ADD THIS
})
export class Booking {
    CheckInDate: string;
    CheckOutDate: string;
    roomNb: any;
    Adults: any;
    Child: any;
    CName: string;
    CEmail: string;
    CPhone: string;
    cost: string;
    indexroom: string;
    indexmealtype: any;
    ChildAge: Array<string>;
    HotelId: string;
    timestamp: string;
    Hotels: any;
    HotelName: string;
    RoomName: string;
    note:string;
    Customers: Array<string>;
    MemberId:string;
    MealTypeName: string;
    code:string;
    RatingHotel:string;
     //thời gian check in/out
     CheckinTime:string;
     CheckoutTime:string;
  OriginalRoomClass: any;
  HotelLink: any;
  Avatar: any;
  RegionId: any;
  Address: any;
}
export class RoomInfo {
    Address: string;
    imgHotel: string;
    dur:string;
    arrroom:Array<string>;
    roomnumber:string;
    roomtype:any;
    jsonroom:Array<string>;
    imgRoom: string;
    ho: string;
    ten: string;
    phone: string;
    note: string;
    companyname: string;
    address: string;
    tax: string;
    addressorder: string;
    ischeck: boolean;
    RoomId: string;
    payment:string;
    arrcustomer:Array<string>;
    bed:string;
    notetotal: string;
    arrrbed:Array<string>;
    pricepoint:number;
    setInter:any;
    ischeckpoint:boolean;
    priceshow:string;
    order:string;
    point:string;
    priceshowtt:string;
    HotelRoomHBedReservationRequest:string;
    ischeckpayment:boolean;
    hoten: string;
  objMealType: any;
  promocode:string;
  roomcancelhbed:number;
  textcancel:string;
  nameroom:string;
  email: any;
  ischeckpaymentCard: boolean;
    ischeckpaymentLater: boolean;
    BillingCode:string;
    nameOrder:string;
    qrimg:string;
     //thông tin bank
     accountNumber:string;
     textbank:string;
     bankName:string;
     bankBranch:string;
     paymentbank:string;
     //Hạn thanh toán vé xe rẻ
    expiredtime:string;
    bookingCode:string;
    PeriodPaymentDate:string;
    ExcludeVAT:any;
    RoomClass: any;
    DescriptionTaxFee:any
  discountpromo: any;
}
export class ValueGlobal {
    checksendcb:boolean;
    name:string;
    objchangeinfo:any;
    flag: number;
    flagreview: number;
    arrhotellist: Array<string>;
    arrtopdeal:Array<string>;
    logingoback:string;
    urlblog:string;
    backValue:string;
    countNotifi:number;
  fbObject: any;
  loader:any;
  interval:any;
  blogid: any;
  dealid:string;
  phone:string;
      //thay đổi pass
      resettoken:string;
      userid:string
      token:string;
  bookingsComboData: any;
  popover: HTMLIonPopoverElement;
  countclaim: number;
  likePlaceCount: number;
  listlunar:any;
    //total
    PriceAvgPlusTAStr:string;
  notRefreshDetail: boolean;
  arrimgreview:Array<string>;
  updatedLastestVersion: boolean = false;
  dataNewVersion: any;
  activeTab: number;
  titlecombo:string;
  refreshUserToken = new EventEmitter(); 
  backpageCathay:string;
  dayhot:any;
  daily:any;
  promotionPackage:any;
  notSuggestDaily:any;
  notSuggestDailyCB:any;
  refreshFBAccessToken: any= new EventEmitter(); 
  arrsuggest: any;
  BookingCodeHis: any;
  listhistory: any;
  ischeckFavourite : any
  notifyAction: string;
    flightAvgPoint: any;
  wasTappedNoti: boolean;
  flightNumOfReview: any;
}
export class SearchHotel {
  paymentType: string='';
    recent: Array<ItemBook>;
    minprice: string;
    maxprice: string;
    star: Array<number>;
    review: number;
    adult: number;
    child: number;
    elder: number=0;
    roomnumber: number;
    input: string;
    flag: number;
    gbmsg: any;
    gbitem: any;
    chuoi: string;
    CheckInDate: string;
    CheckOutDate: string;
    arrchild: Array<child>=[];
    sortOrder: string;
    meal1check :boolean;
    meal2check :boolean;
    meal3check :boolean;
    local0check :boolean;
    local1check :boolean;
    local2check :boolean;
    local3check :boolean;
    local4check :boolean;
    local5check :boolean;
    local6check :boolean;
    local7check :boolean;
    local8check :boolean;
    local9check :boolean;
    local10check :boolean;
    local11check :boolean;
    local12check :boolean;
    local13check :boolean;
    local14check :boolean;
    local15check :boolean;
    local16check :boolean;
    local17check :boolean;
    local18check :boolean;
    local19check :boolean;
    arrlocalcheck:any= [];
    arrtrademarkcheck:any =[];
    arrfacilitycheck:any =[];
    arrstylecheck:any=[];
    arrhoteltypecheck:any=[];
    facility0check :boolean;
    facility1check :boolean;
    facility2check :boolean;
    facility3check :boolean;
    facility4check :boolean;
    facility5check :boolean;
    facility6check :boolean;
    facility7check :boolean;
    facility8check :boolean;
    facility9check :boolean;
    style0check :boolean;
    style1check :boolean;
    style2check :boolean;
    style3check :boolean;
    style4check :boolean;
    style5check :boolean;
    style6check :boolean;
    style7check :boolean;
    style8check :boolean;
    style9check :boolean;
    hoteltype0check :boolean;
    hoteltype1check :boolean;
    hoteltype2check :boolean;
    hoteltype3check :boolean;
    hoteltype4check :boolean;
    hoteltype5check :boolean;
    hoteltype6check :boolean;
    hoteltype7check :boolean;
    hoteltype8check :boolean;
    hoteltype9check :boolean;
    location: string;//Khu vực
    tagIds: string;//Phong cách
    classIds: string;//Loại hình nơi ở
    facsearch: string;//Tiện ích
    ischeckAL: boolean = false;//check có allotment
    hotelID:string;
    rootPage: string;
    isRefreshDetail: boolean;
    showPopup: boolean;//Biến xác định là đang show popup khi close sẽ pop để về trang trước đó
    backPage:string;
    ChildAgeTo:number
    roomID:string;
    ischeckBOD;
    arrimgreview:any=[];
    indexreviewimg:number;
    cusnamereview:string;
    datereview:string;

    ef_houropen:string;//Giờ mở cửa (trải nghiệm)
    ef_location:string;//Khu vực (trải nghiệm)
    ef_style:string;//Phong cách (trải nghiệm)
    ef_hoteltype:string;//Loại hình (trải nghiệm)
    ef_arrlocalcheck:any= [];
    ef_arrhouropencheck:any =[];
    ef_arrstylecheck:any=[];
    ef_arrhoteltypecheck:any=[];
    ef_arrdistancecheck:any=[];
    clearFilterExperience: boolean = false;
    ItemExperienceRegionRecent=[];
    inputExperienceRegionCode:any;
    inputExperienceText:any;
    experiencesearchTagsId:any;
    inputExperienceItem:any;
    stringFilterName:string;
  ef_arrlocalnamecheck: any=[];
  ef_arrhoteltypenamecheck: any=[];
  ef_arrhouropennamecheck: any=[];
  ef_arrdistancenamecheck: any=[];
  deviceLocation: any;
  ef_arrstylenamecheck: any=[];
  ef_arrsubregioncheck: any=[];
  ef_arrsubregionnamecheck: any=[];
  inputExperienceRegionName: any;
  inputExperienceSearchPlaceText: any;
  hotelName: any;
  itemTabHotel = new EventEmitter();
  duplicateItem: any;
  duplicateName: any;
  searchCityName: string='';
  OriginalCity: string;
  destinationCity: any='';
  selectedRegion: any = [];
  hotelCityId: any;
  itemHotelCityDetail: any;
  listHotelCityRoomUpgrade: any;
  fromPage: string;
  changeInfoFromPage: string ='';
  //changeInfoHotelList = new EventEmitter();
  changeInfoHotelList= new Subject<any>();
  publicChangeInfoHotelList(data: any) {
    this.changeInfoHotelList.next(data);
  }
  getChangeInfoHotelList(): Subject<any> {
    return this.changeInfoHotelList;
  }
  hasSortHotelList: string | boolean;
  itemSearchHotelHome = new EventEmitter();
  hasShowCalendarFirstTime :boolean;
  cindisplay: string;
  coutdisplay: string;
  datecin: any;
  datecout: any;
  cinthu: string;
  coutthu: string;
  isRecent:any;
  objRecent:any;
  tourDetailName: any;
  trustedVideoUrl: any;
  gaHotelId: any;
  gaHotelDetail: any;
  totalPrice: string;
  gaComboName: string;
  gaComboId: any;
  gaDiscountPromo: any;
  RatingValue: number;
  keysearchhoteldetail: string;
  keySearchHotelDetail: string;
  ischeckDate: any;
  allowbookcombofc: boolean;
  allowbookcombofx: boolean;
  comboType: string;
  reviewName: any;
  openFromTopReviewList: boolean;
  keySearchHotelList: string='';
}
export class child {
    text: string;
    numage: string;
}
export class ItemBook {
    type: string;
    hotelId: string;
    hotelName: string;
    regionId: string;
    regionCode: string;
    regionName: string;
    flag: string;
    totalHotels: string
}
export class Bookcombo {
    objComboDetail:any;
    CheckInDate: string;
    CheckOutDate: string;
    Adults: number;
    Child: number;
    Childss: number;
    ChildAge: Array<childAge>;
    roomNb: number;
    location: string;
    tolocation: string;
    ComboRoomPrice: number;
    Nightnum: number;
    roomid: string;
    ReturnTicketSale: string;
    DepartTicketSale: string;
    MealTypeCode: string;
    PriceDepart: number;
    PriceDepartc: number;
    PriceDepartss: number;
    PriceReturn: number;
    PriceReturnc: number;
    PriceReturnss: number;
    totalprice: number;
    imgroom: string;
    MealTypeName: string;
    MealTypeIndex: number;
    MealTypePrice: number;
    PriceDepartpt: number;
    PriceReturnpt: number;
    Pricecpt: number;
    numchildpt: number;
    Pricecptmb: number;
    arrDepart: Array<string>;
    arrReturn: Array<string>;
    Hotelid: string;
    HotelName: string;
    Email: string;
    Avatar: string;
    Address: string;
    HotelLink: string;
    RegionId: number;
    isFlashSale: boolean;
    isFlightCombo: boolean;
    isNormalCombo: boolean;
    ComboId: number;
    ListHotelRoomClasses = [];
    ComboDetail:any;
    arrivalCode:string;
    ComboTitle:string;
    transportDepartTime:string;
    transportReturnTime:string;
    FormParam:any;
    arrPassengers: Array<string>;
    arrlugage: Array<string>;
    lastname:string;
    firstname:string;
    phone:string;
    ischecklugage:boolean;
    totalpricecombo:string;
    pricePointShow:any;
    point:any;
    PriceAvgPlusTAStr:any;
    HotelCode:any;
    tileComboShort:any;
    hoten:string;
    titleComboShort:any;
    ischeckbtnpromo:boolean;
    discountpromo:number;
    ObjectHotelDetail:any;
    departObjectCar:any;
    returnObjectCar:any;
    totalAdult:number;
        //thay đổi điểm đón/đến
    arrplacedepd: Array<string>;
    arrplacedept: Array<string>;
    arrplaceretd: Array<string>;
    arrplacerett: Array<string>;
    
    arrplacedeptcd: Array<string>;
    arrplacedeptct: Array<string>;
    arrplacerettcd: Array<string>;
    arrplacerettct: Array<string>;

    isDepart:string;
    idpointdepd:string;
    idpointrett:string;
    idpointretd:string;
    idpointdept:string;
    pricedep:number;
    priceret:number;
  hasInsurrance: boolean;
  checkInsurranceFee: any;
  objInsurranceFee: any;
   //id chuyến bay
   iddepart:string;
   idreturn:string;
   de_departdatestr:string;
   ar_departdatestr:string;
   departTimeStr:string;
   returnTimeStr:string;
   //book combo vmb tra truoc
   bookingcode:string;
   DepartATCode:string;
   ReturnATCode:string;
   FlightCode:string;
   Luggage:number;
   airlineMemberCode:any;
   totalseatsdep: any;
   totalseatsret: any;
       //thông tin hành lý
       departConditionInfo: any;
       returnConditionInfo: any;
       itemFlightLuggagePriceChange = new EventEmitter(); 
       upgradeRoomChange = new EventEmitter();
  ischeckShowupgrade: boolean;
  mealTypeRates: any;
  isshuttlebus: any;
  promoCode: string;
  totalPriceBeforeApplyVoucher: number;
  isHBEDBooking: any;
  isAGODABooking: any;
  roomPenalty: any;
}
export class childAge {
    numage: string;
    text: string;
}

export class DeviceLocation {
    latitude: any;
    longitude: any;
    regioncode: any = '';
  regionName: string;
  };

export class itemLocal {
  name: string;
  arrlocalcheck: any = [];
}