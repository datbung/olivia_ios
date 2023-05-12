
import {Injectable, EventEmitter} from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root' // <- ADD THIS
})

export class ticketService{
  
  private filterTourSubject = new Subject<any>();
  private scrollToDepartureDivSubject = new Subject<any>();
  private searchTicketSubject = new Subject<any>();
  itemTicketList: any;
  itemTicketDetail: any;
  itemTicketService: any;
  totalPrice: string;
  qrimg: any;
  BillingCode: any;
  periodPaymentDate: any;
  discountPrice: any;
  paymentType: number=0;
  totalPriceStr: Promise<boolean>;
  backPage: string;
  itemSearchTicket = new EventEmitter();
  itemTicketTopic: any;
  ticketDetailId: any;
  hasAllotment:any
  totalPriceNum: number;
  indexDetail: number;
  departureCalendarStr: string;
  itemSearchDestination: any;
  itemShowList: any;
  itemSearchDepature: any;
  input: any;
  experience: any;
  publicFilterTour(data: any) {
    this.filterTourSubject.next(data);
  }

  getObservableFilterTour(): Subject<any> {
    return this.filterTourSubject;
  }

  publicScrollToDepartureDiv(data: any) {
    this.scrollToDepartureDivSubject.next(data);
  }

  getObservableScrollToDepartureDiv(): Subject<any> {
    return this.scrollToDepartureDivSubject;
  }
  
  publicSearchTicketRegion(data:any) {
    this.searchTicketSubject.next(data);
  }

  getObservableSearchTicketRegion(): Subject<any> {
    return this.searchTicketSubject;
  }
  
}
