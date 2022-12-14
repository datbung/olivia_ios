
import {Injectable, EventEmitter} from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root' // <- ADD THIS
})

export class flightService{
    itemFlightChangePax = new EventEmitter();
    itemFlightChangeLocation = new EventEmitter();
    itemTabFlightActive = new EventEmitter();
    itemFlightLuggagePriceChange = new EventEmitter();
    itemFlightMealPriceChange = new EventEmitter();
    itemFlightSeatPriceChange = new EventEmitter();
    itemFlightFilterChange = new EventEmitter();
    itemFlightFilterChangeReturn= new EventEmitter();
    itemFlightLogin = new EventEmitter();
    itemMenuFlightClick = new EventEmitter();
    itemFlightMytripRefresh= new EventEmitter();
    itemChangeTicketFlight= new EventEmitter();
    itemFlightReloadInfo= new EventEmitter();
    itemTabFlightFocus= new EventEmitter();
    itemUseFulClick= new EventEmitter();
    itemHomeFlightScrollTop= new EventEmitter();
    itemAllFlightCount= new EventEmitter();
    itemTimePriorityChange= new EventEmitter();
    itemFlightReChoiceSeat= new EventEmitter();
    itemResetCheckSeat= new EventEmitter();
    itemCheckHotelCity= new EventEmitter();
    itemHotelCityChangeRoom= new EventEmitter();
    itemHotelCityAddHotel= new EventEmitter();
    itemHotelCityChange= new EventEmitter();
    itemHotelCityAddHotelFromDetail= new EventEmitter();
    itemTranferChange = new EventEmitter();
    itemFlightCache:any={};
    fromPage:any;
    objSearch: any;
  searchDepartCode: boolean;
  listAllFlight: any=[];
  listAllFlightDepart: any=[];
  listAllFlightReturn: any=[];
  objectFilter = null;
  listFlightFilter: any=[];
  listflightDepartFilter: any=[];
  listflightReturnFilter: any=[];
  reservationId: any;
  objBooking: any;
  
  tabFlightIndex: any=1;
  listAirport: any;
  objectFilterReturn= null;
  bookingCodePayment: any;
  isConnected: any;
  bookingSuccess: any;
    itemFlightTopDeal: any;
  paymentError: any;
  itemFlightPaymentLater: any = [];
  itemCheckTabActive = new EventEmitter();
  
  private ItemFlightReloadInfoSubject = new Subject<any>();
  itemFlightInternationalInfo: any;
  itemFlightInternationalDepartureDetail: any;
  listflightInternationalFilter = [];
  listAllFlightInternational = [];
  objectFilterInternational:any = {};
  listAirlinesFilter: any;
  listStops: any;
  itemFlightInternational: any;
  indexFlightInternational: any;
  indexReturnFlightInternational: any;
  loadFlightInfoType: any;
  listAllPlaceByArea: any;
  listPrices: any=[];
  keyLoadMorePrices: string;

  publicItemFlightReloadInfo(data: any) {
    this.ItemFlightReloadInfoSubject.next(data);
  }

  getItemFlightReloadInfo(): Subject<any> {
    return this.ItemFlightReloadInfoSubject;
  }
  
  private ItemFlightInternationalFilterSubject = new Subject<any>();
  publicItemFlightInternationalFilter(data: any) {
    this.ItemFlightInternationalFilterSubject.next(data);
  }

  getItemFlightInternationalFilter(): Subject<any> {
    return this.ItemFlightInternationalFilterSubject;
  }
  
  
  
    
  
    
    
  
  
  
  
  
  
  
  
  
}