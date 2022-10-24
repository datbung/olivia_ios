import { Component, OnInit, NgZone } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { C } from './../../providers/constants';
import { GlobalFunction } from '../../providers/globalfunction';
import { flightService } from '../../providers/flightService';
import * as moment from 'moment';
import { FlightConditionAndPriceInternationalPage } from '../flightconditionandpriceinternational/flightconditionandpriceinternational.page';
@Component({
  selector: 'app-flightdetailinternational',
  templateUrl: './flightdetailinternational.page.html',
  styleUrls: ['./flightdetailinternational.page.scss'],
})
export class FlightDetailInternationalPage implements OnInit {
  itemFlight: any;
  //ticketInfo: any;
  loadticketinfodone = true;
  arrsdk = [1,2,3];
  itemDepart: any;
  itemReturn: any;
  departTimeDisplay = '';
  returnTimeDisplay = '';
  departFlightNumber ='';
  returnFlightNumber ='';
  departFlightDepartTime: string='';
  departFlightLandingTime: string='';
  returnFlightDepartTime: string='';
  returnFlightLandingTime: string='';
  textDepartStops: string='';
  textReturnStops: string='';
  priceAdult = 0;
  priceChild = 0;
  priceInfant = 0;
  priceTax= 0;
  quantityAdult= 0;
  quantityChild= 0;
  quantityInfant= 0;
  
  constructor(public modalCtrl: ModalController, public zone: NgZone, public navCtrl: NavController,
    public gf: GlobalFunction,public _flightService: flightService,
    ) {
     this.itemFlight = this._flightService.itemFlightInternational;
     this.itemDepart = this._flightService.itemFlightCache.itemFlightInternationalDepart;
     this.departTimeDisplay = `${this.gf.getDayOfWeek(this._flightService.itemFlightCache.itemFlightInternationalDepart.departTime).dayname}, ${moment(this._flightService.itemFlightCache.itemFlightInternationalDepart.departTime).format('DD/MM/YYYY')}`;
     this.departFlightNumber = this._flightService.itemFlightCache.itemFlightInternationalDepart.details.map((item) => item.flightNumber).join(', ');
     this.departFlightDepartTime = moment(this._flightService.itemFlightCache.itemFlightInternationalDepart.departTime).format('HH:mm');
     this.departFlightLandingTime = moment(this._flightService.itemFlightCache.itemFlightInternationalDepart.landingTime).format('HH:mm');
     
     this.zone.run(() => this.itemDepart.priceSummaries.sort(function (a, b) {
      return a.passengerType - b.passengerType;
    }));

    this.itemDepart.priceSummaries.forEach(element => {
      if(element.passengerType ==0 && element.code == 'NET'){
        this.priceAdult += element.total;
        this.quantityAdult = element.quantity;
      }
     
      else if(element.passengerType ==1 && element.code == 'NET'){
        this.priceChild += element.total;
        this.quantityChild = element.quantity;
      }
      else if(element.passengerType ==2 && element.code == 'NET'){
        this.priceInfant += element.total;
        this.quantityInfant = element.quantity;
      }
      else if(element.code == 'TAX'){
        this.priceTax += element.total;
      }
    
    });
   

     if(this.itemDepart && this.itemDepart.stops >0){
        this.textDepartStops = `+${this.itemDepart.stops} chặng dừng`;

        let totallayover = Math.floor(this.itemDepart.details.reduce((total,b)=>{ return total + b.layover; }, 0)/60);
        //let hourslayover:any =  Math.floor(this.itemDepart.layover/60);
        if(this.itemDepart.landingTime) {
          let hourslanding:any = moment(this.itemDepart.landingTime).format('HH');
          let layoverNights = Math.floor((hourslanding*1 + totallayover*1) / 24);
          if(layoverNights >0){
            this.textReturnStops += ` (${layoverNights} ngày)`;
          }
        }
     }

     if(this._flightService.itemFlightCache.itemFlightInternationalReturn){
      this.itemReturn = this._flightService.itemFlightCache.itemFlightInternationalReturn;
      this.returnTimeDisplay = `${this.gf.getDayOfWeek(this._flightService.itemFlightCache.itemFlightInternationalReturn.departTime).dayname}, ${moment(this._flightService.itemFlightCache.itemFlightInternationalReturn.departTime).format('DD/MM/YYYY')}`;
      this.returnFlightNumber = this._flightService.itemFlightCache.itemFlightInternationalReturn.details.map((item) => item.flightNumber).join(', ');
      this.returnFlightDepartTime = moment(this._flightService.itemFlightCache.itemFlightInternationalReturn.departTime).format('HH:mm');
      this.returnFlightLandingTime = moment(this._flightService.itemFlightCache.itemFlightInternationalReturn.landingTime).format('HH:mm');

      this.itemReturn.priceSummaries.forEach(element => {
        if(element.passengerType ==0 && element.code == 'NET'){
          this.priceAdult += element.total;
          this.quantityAdult = element.quantity;
        }
       
        else if(element.passengerType ==1 && element.code == 'NET'){
          this.priceChild += element.total;
          this.quantityChild = element.quantity;
        }
        else if(element.passengerType ==2 && element.code == 'NET'){
          this.priceInfant += element.total;
          this.quantityInfant = element.quantity;
        }
        else if(element.code == 'TAX'){
          this.priceTax += element.total;
        }
      
      });

      if(this.itemReturn && this.itemReturn.stops >0){
        this.textReturnStops = `+${this.itemReturn.stops} chặng dừng`;
        //let hourslayover:any = Math.floor(this.itemReturn.layover/60);
        let totallayover = Math.floor(this.itemReturn.details.reduce((total,b)=>{ return total + b.layover; }, 0)/60);
        if(this.itemReturn.landingTime) {
          let hourslanding:any = moment(this.itemReturn.landingTime).format('HH');
          let layoverNights = Math.floor((hourslanding*1 + totallayover*1) / 24);
          if(layoverNights >0){
            this.textReturnStops += ` (${layoverNights} ngày)`;
          }
          
        }
     }
     }

    
  }

  ngOnInit() {
  }

  close(){
      this.modalCtrl.dismiss();
  }

  confirm(){
      
    
  }

  async showFlightInfo() {
    const modal: HTMLIonModalElement =
      await this.modalCtrl.create({
        component: FlightConditionAndPriceInternationalPage,
      });
      modal.present();
  }

}