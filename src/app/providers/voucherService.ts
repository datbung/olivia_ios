import {Injectable, EventEmitter} from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
    providedIn: 'root' // <- ADD THIS
})

export class voucherService{
    itemVoucher;
  hasVoucher: boolean;
  selectVoucher: any;
  itemSelectVoucher: any = new EventEmitter();
  rollbackSelectedVoucher: any= new EventEmitter();
  vouchers: any[];
  isFlightPage: boolean;
  deSelectedVoucher: any= new EventEmitter();
  itemSelectVoucherFlightCombo: any= new EventEmitter();
  itemSelectVoucherHotel: any = new EventEmitter();
  itemSelectVoucherTour: any = new EventEmitter();
  openFrom: string;

  private clearVoucherSubject = new Subject<any>();
  voucherSelected: any=[];
  voucherSelectedMap: any;
  listPromoCode: any=[];
  totalDiscountPromoCode: any=0;
  listObjectPromoCode: any=[];
  voucherUsedSubject= new Subject<any>();
  voucherRefreshListSubject= new Subject<any>();
  hotelPromoCode: string;
  hotelTotalDiscount: number;
  rollbackAllSelectedVoucher= new Subject<any>();
  comboFLightTotalDiscount: any;
  comboFlightPromoCode: string;
  comboFlightTotalDiscount: number;
  comboCarPromoCode: string;
  comboCarTotalDiscount: number;
  flightPromoCode: string;
  flightTotalDiscount: number;
  ticketPromoCode: any;
  ticketTotalDiscount: any;

  publicRollbackAllSelectedVoucher(data: any) {
    this.rollbackAllSelectedVoucher.next(data);
  }
  getRollbackAllSelectedVoucher(): Subject<any> {
    return this.rollbackAllSelectedVoucher;
  }

  getVoucherRefreshList(): Subject<any> {
    return this.voucherRefreshListSubject;
  }
  publicVoucherRefreshList(data: any) {
    this.voucherRefreshListSubject.next(data);
  }
  publicClearVoucherAfterPaymentDone(data: any) {
    this.clearVoucherSubject.next(data);
  }

  getObservableClearVoucherAfterPaymentDone(): Subject<any> {
    return this.clearVoucherSubject;
  }

  private voucherSubject = new Subject<any>();
  private voucherFlightComboSubject = new Subject<any>();
  private voucherHotelSubject = new Subject<any>();
  private voucherCarComboSubject = new Subject<any>();
  private voucherTourSubject = new Subject<any>();
  private voucherTicketSubject = new Subject<any>();
  private voucherInternationalUsedSubject = new Subject<any>();
  private voucherHotelUsedSubject = new Subject<any>();

  publicVoucherClicked(data: any) {
    this.voucherSubject.next(data);
  }

  publicInternationalVoucherUsedClicked(data: any) {
    this.voucherInternationalUsedSubject.next(data);
  }

  publicVoucherUsedClicked(data: any) {
    this.voucherUsedSubject.next(data);
  }
  publicVoucherHotelUsedClicked(data: any) {
    this.voucherHotelUsedSubject.next(data);
  }

  getObservable(): Subject<any> {
    return this.voucherSubject;
  }

  getVoucherUsedObservable(): Subject<any> {
    return this.voucherUsedSubject;
  }

  getVoucherInternationalUsedObservable(): Subject<any> {
    return this.voucherInternationalUsedSubject;
  }

  getVoucherHotelUsedObservable(): Subject<any> {
    return this.voucherHotelUsedSubject;
  }

  publicVoucherFlightComboClicked(data: any) {
    this.voucherFlightComboSubject.next(data);
  }

  getFlightComboObservable(): Subject<any> {
    return this.voucherFlightComboSubject;
  }

  publicVoucherHotelClicked(data: any) {
    this.voucherHotelSubject.next(data);
  }

  getHotelObservable(): Subject<any> {
    return this.voucherHotelSubject;
  }

  publicVoucherCarComboClicked(data: any) {
    this.voucherCarComboSubject.next(data);
  }

  getCarComboObservable(): Subject<any> {
    return this.voucherCarComboSubject;
  }

  publicVoucherTourClicked(data: any) {
    this.voucherTourSubject.next(data);
  }
  publicVoucherTicketClicked(data: any) {
    this.voucherTicketSubject.next(data);
  }
  getTourObservable(): Subject<any> {
    return this.voucherTourSubject;
  }
  getTicketObservable(): Subject<any> {
    return this.voucherTicketSubject;
  }
}