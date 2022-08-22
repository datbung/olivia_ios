
import {Injectable, EventEmitter} from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root' // <- ADD THIS
})

export class tourService{
  menuFooterClick = new EventEmitter();
  itemSearchTour = new EventEmitter();
  itemSearchDeparture = new EventEmitter();
  itemPaymentDone = new EventEmitter();
  
  
  private filterTourSubject = new Subject<any>();
  listTourTopic: any[];
  dataBookResponse: any;
  periodPaymentDate: any;
  publicFilterTour(data: any) {
    this.filterTourSubject.next(data);
  }

  getObservableFilterTour(): Subject<any> {
    return this.filterTourSubject;
  }
  
  itemDeparture: any;
  tabFoodIndex: any;
  recent: any;
  itemsearchTourHome: any;
  input: any;
  flag: number;
  foreignList = [];
  itemHot: any;
  itemDepartureCalendar :any = [];
  //tourService: { Adult: number; AllotmentDate: string; AllotmentNo: number; AvaibleNo: number; BlackOut: boolean; BlockedNo: number; CommissionAdult: number; ContractName: string; Cutoff: boolean; DepartureTime: string[]; Id: number; IsHoliday: boolean; IsSpecial: boolean; PrepaidNo: number; PriceAdult: number; PriceAdultAvg: number; Status: string; UsedNo: number; AllotmentDateStr: string; PriceAdultAvgStr: string; IsMinPrice: boolean; };
  itemShowList: any;
  listTopSale: any;
  itemSearchDepature: any;
  itemSearchDestination:any;
  totalPrice: number;
  totalPriceStr: number;
  itemDetail: any;
  departureCalendarStr: string;
  hasDeparture: boolean;
  localList=[];
  typeList=[];
  topicList=[];
  tourDetailId: any;
  departures: any;
  departuresItemList: any[];
  backPage: string;
  DepartureDate: any;
  order: string;
  notetotal: any;
  ischeck: boolean;
  TourBooking: any;
  tourBookingCode: any;
  tourTotal: any;
  hasAllotment: boolean;
  paymentType: number;//1 - đặt ngay; 2 - yêu cầu đặt; 3 - liên hệ tư vấn
  BillingCode: any;
  qrimg: any;
  
}
