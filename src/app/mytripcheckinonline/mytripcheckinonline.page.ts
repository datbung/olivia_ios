import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { ValueGlobal } from "../providers/book-service";
import { flightService } from "../providers/flightService";
import { GlobalFunction } from "../providers/globalfunction";
import { MytripService } from "../providers/mytrip-service.service";

@Component({
    selector: 'app-mytripcheckinonline',
    templateUrl: './mytripcheckinonline.page.html',
    styleUrls: ['./mytripcheckinonline.page.scss'],
  })
  export class MytripCheckinOnlinePage implements OnInit {
    tripdetail: any;
    bookingjson: any;
    cindisplay: string;

    constructor(public _mytripservice: MytripService,
        public gf: GlobalFunction,
        private navCtrl: NavController,
        public _flightService: flightService,
        public valueGlobal: ValueGlobal
    )
    {
        this.tripdetail = this._mytripservice.tripdetail;
        this.bookingjson = JSON.parse(this.tripdetail.booking_json_data);
        
        if(this.bookingjson && this.bookingjson.length >0){
            this.bookingjson.forEach(element => {
                element.hadCheckinOnline = element.Passengers.some(p => p.CheckinInfo);
            });

            let arrdate = this.bookingjson[0].DepartureDate.split('/');
            let ndate = new Date(arrdate[2],arrdate[1]-1, arrdate[0]);
            this.cindisplay = this.gf.getDayOfWeek(this.gf.getCinIsoDate(ndate)).dayname+ ", " + this.bookingjson[0].DepartureDate;
        }
        
    }
    ngOnInit() {
        
    }

    goback(){
        this._mytripservice.itemEnableHeader.emit(1);
        if(this._mytripservice.backroute){
          this._mytripservice.backroute = "";
          this._mytripservice.backfrompage = "mytripdetail";
          
          if(this._mytripservice.rootPage == "homeflight"){
            this._flightService.itemTabFlightActive.emit(true);
            
            
            this.valueGlobal.backValue = "homeflight";
            this.navCtrl.navigateBack('/tabs/tab1', {animated: true});
            this._mytripservice.backfrompage= "";
          }
          else{
            if(this.valueGlobal.backValue == "homeflight"){
              this._flightService.itemTabFlightActive.emit(true);
              setTimeout(()=>{
                
              },200)
              this.navCtrl.navigateBack('/tabs/tab1', {animated: true});
            }
            else{
              this.navCtrl.navigateBack('/app/tabs/tab3');
            }
            
          }
          
          
        }
        
        else if(this._mytripservice.rootPage == "homeflight"){
          if(this._mytripservice.backfrompage == "mytripdetail" || this._mytripservice.backfrompage == "mytripbookingdetail"){
            this._flightService.itemTabFlightActive.emit(true);
            
            
            this.valueGlobal.backValue = "homeflight";
            this.navCtrl.navigateBack('/tabs/tab1', {animated: true});
            this._mytripservice.backfrompage= "";
          }else{
            this.navCtrl.navigateBack('/app/tabs/tab3');
          }
          
        }
        else{
          this.navCtrl.navigateBack('/app/tabs/tab3');
        }
        
      }
  }
  