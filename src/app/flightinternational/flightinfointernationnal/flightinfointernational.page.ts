import { Component, OnInit, NgZone } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { C } from './../../providers/constants';
import { GlobalFunction } from '../../providers/globalfunction';
import { flightService } from '../../providers/flightService';
@Component({
  selector: 'app-flightinfointernational',
  templateUrl: './flightinfointernational.page.html',
  styleUrls: ['./flightinfointernational.page.scss'],
})
export class FlightInfoInternationalPage implements OnInit {
  itemFlight: any;
  //ticketInfo: any;
  loadticketinfodone = false;
  arrsdk = [1,2,3];
  itemFlightTicket: any;
  changeDepartTime: boolean;
  ticketRefund: any;
  
  constructor(public modalCtrl: ModalController, public zone: NgZone, public navCtrl: NavController,
    public gf: GlobalFunction,public _flightService: flightService,
    ) {
     this.itemFlightTicket = this._flightService.itemFlightInternationalInfo;
     if(this.itemFlightTicket.penaltyFlighs && this.itemFlightTicket.penaltyFlighs.length >0 ){
      let itemmap = this.itemFlightTicket.penaltyFlighs.filter((i) => i.penaltyType == 1 && i.feePenalty >0 && i.descriptionPenalty);
      let itemmapcancel = this.itemFlightTicket.penaltyFlighs.filter((i) => i.penaltyType == 2 && i.feePenalty >0 && i.descriptionPenalty);
      if(itemmap && itemmap.length >0){
        this.changeDepartTime = itemmap[0].descriptionPenalty;
      }
      if(itemmapcancel && itemmapcancel.length >0){
        this.ticketRefund = itemmapcancel[0].descriptionPenalty;
      }
     }
     
     this.loadTicketInfo();
  }

  loadTicketInfo() {
    let url = C.urls.baseUrl.urlFlightInt + "api/bookings/get-airline-details";
    let body = {
      "Aircraft" : this._flightService.itemFlightCache.itemFlightInternationalDepart ? this._flightService.itemFlightCache.itemFlightInternationalDepart.aircraft : this._flightService.itemFlightInternationalInfo.aircraft,
      "AircraftStr" : this._flightService.itemFlightCache.itemFlightInternationalDepart ? this._flightService.itemFlightCache.itemFlightInternationalDepart.aircraftStr : this._flightService.itemFlightInternationalInfo.aircraftStr,
      "Airline" : this._flightService.itemFlightCache.itemFlightInternationalDepart ? this._flightService.itemFlightCache.itemFlightInternationalDepart.airline : this._flightService.itemFlightInternationalInfo.airline,
      "FlightNumber" : this._flightService.itemFlightCache.itemFlightInternationalDepart ? this._flightService.itemFlightCache.itemFlightInternationalDepart.flightNumber : this._flightService.itemFlightInternationalInfo.flightNumber,
      "FromPlaceCode" : this._flightService.itemFlightCache.itemFlightInternationalDepart ? this._flightService.itemFlightCache.itemFlightInternationalDepart.fromPlaceCode : this._flightService.itemFlightInternationalInfo.fromPlaceCode,
      "SessionId" : this._flightService.itemFlightCache.SessionId,
      "TicketClass" : this._flightService.itemFlightCache.itemFlightInternationalDepart ? this._flightService.itemFlightCache.itemFlightInternationalDepart.ticketClass : this._flightService.itemFlightInternationalInfo.ticketClass,
      "TicketClassShort" : this._flightService.itemFlightCache.itemFlightInternationalDepart ? this._flightService.itemFlightCache.itemFlightInternationalDepart.ticketClassShort : this._flightService.itemFlightInternationalInfo.ticketClassShort,
      "ToPlaceCode" : this._flightService.itemFlightCache.itemFlightInternationalDepart ? this._flightService.itemFlightCache.itemFlightInternationalDepart.toPlaceCode : this._flightService.itemFlightInternationalInfo.toPlaceCode,
      "UrlLogo" : this._flightService.itemFlightCache.itemFlightInternationalDepart ? this._flightService.itemFlightCache.itemFlightInternationalDepart.urlLogo : this._flightService.itemFlightInternationalInfo.urlLogo,
      "departFlightId" : this._flightService.itemFlightCache.itemFlightInternationalDepart ? this._flightService.itemFlightCache.itemFlightInternationalDepart.id : this._flightService.itemFlightInternationalInfo.id,
      "fareId" : this._flightService.itemFlightInternational.fare.key,
      "returnFlightId" : this._flightService.itemFlightCache.roundTrip ? this._flightService.itemFlightCache.itemFlightInternationalReturn ? this._flightService.itemFlightCache.itemFlightInternationalReturn.id : (this._flightService.itemFlightInternational.returnFlights && this._flightService.itemFlightInternational.returnFlights.length -1 >= this._flightService.indexFlightInternational ? this._flightService.itemFlightInternational.returnFlights[this._flightService.indexFlightInternational].id: 0 ) : ""
    }
    this.gf.RequestApi('POST', url, {}, body, 'flightinfointernational', 'loadTicketInfo').then((data) => {
      if(data) {
        console.log(data);
        this.itemFlight = data.data;
        this.loadticketinfodone = true;
      }
    })
  }

  ngOnInit() {
  }

  close(){
      this.modalCtrl.dismiss();
  }

  confirm(){
      
    
  }
}