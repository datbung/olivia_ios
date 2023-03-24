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
  voucherSelected: any=[];åß
  voucherSelectedMap: any;
  listPromoCode: any=[];
  totalDiscountPromoCode: any=0;
  listObjectPromoCode: any=[];
  voucherUsedSubject= new Subject<any>();
  voucherRefreshListSubject= new Subject<any>();
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

  publicVoucherClicked(data: any) {
    this.voucherSubject.next(data);
  }

  publicVoucherUsedClicked(data: any) {
    this.voucherUsedSubject.next(data);
  }

  getObservable(): Subject<any> {
    return this.voucherSubject;
  }

  getVoucherUsedObservable(): Subject<any> {
    return this.voucherUsedSubject;
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

  getTourObservable(): Subject<any> {
    return this.voucherTourSubject;
  }
}