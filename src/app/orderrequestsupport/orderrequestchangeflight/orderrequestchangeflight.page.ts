import { Component, NgZone, OnInit } from '@angular/core';
import { NavController,LoadingController,AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { C } from '../../providers/constants';
import {  ActivityService, GlobalFunction} from '../../providers/globalfunction';
import { ActivatedRoute } from '@angular/router';
import { MytripService } from 'src/app/providers/mytrip-service.service';
import * as moment from 'moment';
@Component({
  selector: 'app-orderrequestchangeflight',
  templateUrl: './orderrequestchangeflight.page.html',
  styleUrls: ['./orderrequestchangeflight.page.scss'],
})
export class OrderRequestChangeFlightPage implements OnInit {
  listSupport: any[];
  allowBuyMoreLuggage: any= true;
    itemdepart: any;
    itemreturn: any;
    trip: any;
  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController, 
    private storage: Storage,
    public loadingCtrl: LoadingController,
    public activityService: ActivityService , 
    private activatedRoute: ActivatedRoute,
    public _mytripservice: MytripService,
    private zone: NgZone,
    public gf: GlobalFunction) { 
        console.log(this.activityService.objPaymentMytrip.trip);
        this.trip = this.activityService.objPaymentMytrip.trip;
        this.itemdepart = this.activityService.objPaymentMytrip.trip.itemdepart;
        this.itemreturn = this.activityService.objPaymentMytrip.trip.itemreturn;
        this.trip.bookingsComboData[0].passengers.forEach((elementlug, index) => {
          let yearold = 18;
          if (elementlug.dob) {
            let arr = [];
            if (elementlug.dob && elementlug.dob.indexOf('/') != -1) {
              arr = elementlug.dob.split('/');
            }
            else if (elementlug.dob && elementlug.dob.indexOf('-') != -1) {
              arr = elementlug.dob.split('-');
            }

            if (arr.length > 0) {
              let newdob = new Date(Number(arr[2]), Number(arr[1] - 1), Number(arr[0]));
              yearold = moment(this.trip.checkInDate).diff(moment(newdob), 'years');
            }

            elementlug.isAdult = yearold > 12 ? true : false;
            if (elementlug.isAdult) {
              this.trip.adult += 1;
            } else {
              if (!this.trip.textChildDisplay) {
                this.trip.textChildDisplay = "(";
              }
              if (yearold < 2) {
                this.trip.infant += 1;
               
              } else {
                this.trip.child += 1;
              }
            }

          }else {
            this.trip.adult += 1;
          }

        });
  }

  ngOnInit() {

  }

  goback() {
  
    this.navCtrl.navigateBack('/orderrequestsupport');
  }

  clickChangeFlight(type){
    let url ='';
    if((type == 1 && !this.itemdepart.allowChangeFlight) || (type ==2 && !this.itemreturn.allowChangeFlight)){
      return;
    }else if(type ==3 && (!this.itemdepart.allowChangeFlight || !this.itemreturn.allowChangeFlight)){
      return;
    }
    this.activityService.typeChangeFlight = type;
    this.navCtrl.navigateForward('/orderrequestsearchflight');
    
   
    
  }
}