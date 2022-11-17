import { Component,OnInit, NgZone, ViewChild } from '@angular/core';
import { NavController,Platform, ModalController, ActionSheetController, PickerController, IonSlides, IonContent } from '@ionic/angular';
import { SearchHotel } from '../providers/book-service';
import { C } from '../providers/constants';
import { GlobalFunction } from '../providers/globalfunction';
import { ValueGlobal } from '../providers/book-service';
import * as $ from 'jquery';
import { flightService } from '../providers/flightService';
import * as moment from 'moment';
import * as request from 'requestretry';
/**
 * Generated class for the OccupancyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'app-flightaddluggage',
  templateUrl: 'flightaddluggage.page.html',
  styleUrls: ['flightaddluggage.page.scss'],
})
export class FlightaddluggagePage implements OnInit {
  @ViewChild('slideTab') sliderTab: IonSlides;
  @ViewChild('scrollFlightAddLuggage') contentFlightAddLuggage: IonContent;
  slideOpts = {
    loop: false,
    slidesPerView: 1,
    centeredSlides: false,
    spaceBetween: 10,
    zoom: {
      toggle: false
    }
  };
  tabluggage = 1;
  adults = 2;
  child = 0;
  room = 1;
  arrchild = [];
  public numage;
  ischeckadults = true;
  ischeckchild = false;
  ischeckroom = false;
  cout; cin;
  ComboDayNum;namecombo;Address;imghotel;namehotel;
  showpopupfromrequestcombo = false;ChildAgeTo
  departLuggage: any=[];
  returnLuggage: any=[];
  quantitydisplay = "chưa chọn";
  quantityreturndisplay ="chưa chọn" ;
  totalprice: number=0;
  totalpricedisplay: any;
  totalquantity=0;
  totaldepartquantity: any=0;
  totalreturnquantity: any=0;
  totalquantityreturn: any=0;
  departConditionInfo: any;
  returnConditionInfo: any;
  hasDepartLuggage: boolean;
  hasReturnLuggage: boolean;
  roundtrip: number;
  constructor(public platform: Platform,public navCtrl: NavController, public modalCtrl: ModalController,public valueGlobal:ValueGlobal,
    public searchhotel: SearchHotel, public gf: GlobalFunction,
    public actionsheetCtrl: ActionSheetController,
    public pickerController: PickerController,
    private zone: NgZone,
    public _flightService: flightService) {
    if(this._flightService.itemFlightCache.departFlight){
      this.roundtrip = this._flightService.itemFlightCache.roundTrip;
      this.departLuggage = [];
      this.returnLuggage = [];
      //this.departLuggage = this._flightService.itemFlightCache.departFlight.airLineLuggage;
      if(this._flightService.itemFlightCache.departFlight){
        this.departLuggage = this._flightService.itemFlightCache.departFlight.airLineLuggage;
      }

      if(this._flightService.itemFlightCache.returnFlight){
        this.returnLuggage = this._flightService.itemFlightCache.returnFlight.airLineLuggage;
      }

      if(this._flightService.itemFlightCache.departLuggage && this._flightService.itemFlightCache.departLuggage.length >0){
        
        this.departLuggage = this._flightService.itemFlightCache.departLuggage;
      }

      if(this._flightService.itemFlightCache.returnLuggage && this._flightService.itemFlightCache.returnLuggage.length >0){
       
        this.returnLuggage = this._flightService.itemFlightCache.returnLuggage;
      }
      
      if(this._flightService.itemFlightCache.dataBooking && this._flightService.itemFlightCache.dataBooking.departCondition){
        //this.departConditionInfo = this._flightService.itemFlightCache.dataBooking.departCondition;
        this.getDetailTicket(this._flightService.itemFlightCache.departFlight).then((data) =>{
          if(data.ticketCondition){
            this.departConditionInfo = data.ticketCondition;
          }
        })
      }

      if(this._flightService.itemFlightCache.dataBooking && this._flightService.itemFlightCache.dataBooking.returnCondition){
          //this.returnConditionInfo = this._flightService.itemFlightCache.dataBooking.returnCondition;
          this.getDetailTicket(this._flightService.itemFlightCache.returnFlight).then((data) =>{
            if(data.ticketCondition){
              this.returnConditionInfo = data.ticketCondition;
            }
          })
      }
      
      if(this.departLuggage && this.departLuggage.length>0){
        this.departLuggage.forEach(element => {
          element.priceshow = "x "+ this.gf.convertNumberToString(element.amount) +"đ";
          if(!element.quantity){
            element.quantity = 0;
          }else{
            this.totalprice += element.quantity * element.amount;
            this.totaldepartquantity += element.quantity;
            this.totalquantity+= element.quantity;
            this.hasDepartLuggage = true;
          }
         
        });
        if(this.totaldepartquantity >0){
          this.quantitydisplay = this.totaldepartquantity + " kiện";
        }
      }

      if(this.returnLuggage && this.returnLuggage.length>0){
        // if(!this.hasDepartLuggage){
        //     this.tabluggage = 2;
        // }
        this.returnLuggage.forEach(element => {
          element.priceshow = "x "+ this.gf.convertNumberToString(element.amount) +"đ";
          if(!element.quantity){
            element.quantity = 0;
          }else{
            this.totalprice += element.quantity * element.amount;
            this.totalreturnquantity+= element.quantity;
            this.totalquantity+= element.quantity;
            this.hasReturnLuggage = true;
          }
        });
        if(this.totalreturnquantity >0){
          this.quantityreturndisplay = this.totalreturnquantity + " kiện";
        }
        
      }

      if(this.totalprice >0){
        this.totalpricedisplay = this.gf.convertNumberToString(this.totalprice) + "đ";
      }
      
      
    }
  }

  ngOnInit() {
   
  }

  goback(){
    if(!this.hasDepartLuggage){
      if(this.departLuggage && this.departLuggage.length >0){
        this.departLuggage.forEach(element => {
            element.quantity = 0;
        });
      }
      
    }

    if(!this.hasReturnLuggage){
      if(this.returnLuggage && this.returnLuggage.length >0){
        this.returnLuggage.forEach(element => {
            element.quantity = 0;
        });
      }
      
    }

    this.navCtrl.navigateBack('/flightaddservice');
  }

  plusroom(item, isdepart) {
    this.zone.run(()=>{
      let maxluggagepax = this._flightService.itemFlightCache.pax - (this._flightService.itemFlightCache.infant ? this._flightService.itemFlightCache.infant : 0);
      if((this.totaldepartquantity < maxluggagepax && isdepart) || (this.totalreturnquantity < maxluggagepax && !isdepart)){
        item.quantity++;
        if(isdepart){
          this.totalquantity++;
        }else{
          this.totalquantityreturn++;
        }
        
        if(isdepart){
          this.totaldepartquantity++;
          this.quantitydisplay = this.totaldepartquantity + " kiện";
        }else{
          this.totalreturnquantity++;
          this.quantityreturndisplay = this.totalreturnquantity + " kiện";
        }
        
        this.totalprice = this.departLuggage.reduce((total,b)=>{ return total + (b.quantity * b.amount); }, 0);
        this.totalprice += this.returnLuggage.reduce((total,b)=>{ return total + (b.quantity * b.amount); }, 0);
        this.totalpricedisplay = this.gf.convertNumberToString(this.totalprice) + "đ";

      }else{
        if(this._flightService.itemFlightCache.infant){
          this.gf.showToastWarning("Không chọn hành lý cho em bé. Xin vui lòng kiểm tra lại!");
        }else{
          this.gf.showToastWarning("Số kiện không được vượt quá số khách. Xin vui lòng kiểm tra lại!");
        }
        
      }
    })
    
  }
  minusroom(item, isdepart) {
    this.zone.run(()=>{
      if (item.quantity >= 1) {
        item.quantity--;
        this.totalquantity--;
        //this.totalprice = item.quantity * item.amount;
        
        if(isdepart){
          this.totaldepartquantity--;
          this.quantitydisplay = this.totaldepartquantity >0 ? (this.totaldepartquantity + " kiện") : "Chưa chọn";
        }else{
          this.totalreturnquantity--;
          this.quantityreturndisplay = this.totalreturnquantity >0 ? (this.totalreturnquantity + " kiện") : "Chưa chọn";
        }
        this.totalprice = this.departLuggage.reduce((total,b)=>{ return total + (b.quantity * b.amount); }, 0);
        this.totalprice += this.returnLuggage.reduce((total,b)=>{ return total + (b.quantity * b.amount); }, 0);
        this.totalpricedisplay = this.gf.convertNumberToString(this.totalprice) +"đ";
      }
    })
    
  }
  confirm()
  {
    if(this.tabluggage ==1 && this.roundtrip){
      this.SelectTab(2);
    }else{
      this._flightService.itemFlightLuggagePriceChange.emit(true);
      this.navCtrl.navigateBack('/flightaddservice');
    }
      
  }

  slidetabchange(){
    this.sliderTab.getActiveIndex().then(index => {
      this.tabluggage = index+1;
    });
    this.contentFlightAddLuggage.scrollToTop(200);
  }

  SelectTab(tabindex){
    this.tabluggage = tabindex;
    this.sliderTab.slideTo(tabindex-1);
    this.contentFlightAddLuggage.scrollToTop(200);
  }

  getDetailTicket(item) : Promise<any>{
    var se = this;
    return new Promise((resolve, reject) => {
      var options = {
        method: 'GET',
        url: C.urls.baseUrl.urlFlight + "gate/apiv1/GetDetailTicketAirBus?airlineCode="+item.airlineCode +"&ticketType="+item.ticketType+"&airbusCode="+item.aircraft+"&flightNumber="+item.flightNumber+"&fromPlace="+item.fromPlaceCode+"&toPlace="+item.toPlaceCode+"&departDate="+moment(item.departTime).format("MM-DD-YYYY")+"&bookingDate="+moment(new Date()).format("MM-DD-YYYY"),
        timeout: 180000, maxAttempts: 5, retryDelay: 20000,
        headers: {
          "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
          'Content-Type': 'application/json; charset=utf-8'
        }
      };
      request(options, function (error, response, body) {
        let objError = {
          page: "flightsearchresult",
          func: "selectTicket",
          message: response.statusMessage,
          content: response.body,
          type: "warning",
          param: JSON.stringify(options)
        };
        if (error) {
          error.page = "flightsearchresult";
          error.func = "selectTicket";
          error.param = JSON.stringify(options);
          C.writeErrorLog(objError,response);
        }
        if (response.statusCode == 200) {
          let result = JSON.parse(body);
          resolve(result);
          
      }
    })
    })
    
}
}