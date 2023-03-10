import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MytripService {
  listmytrips: any;
  listMyTrips: any[];
  listHistoryTrips: any[];
  listrequesttrips: any;
  listRequestTrips: any[];
  listSupport: any[];
  tripdetail: any;
  currentTrip: number;
  mylistOrders: any=[];
  backroute: string;
    orderPageState = new EventEmitter();
  rootPage: string;
  backfrompage: string;
  itemLoginUser = new EventEmitter();
  totalHistoryTrip: any;
  itemEnableHeader = new EventEmitter();
  isFlightPaymentBank: any;
  totalHistoryTripText: string;
  totalHistoryFoodCountText: string="";
  listcount: number;

  constructor() { }
}
