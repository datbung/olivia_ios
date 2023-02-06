import { Component, OnInit, ViewChild, HostListener, NgZone, Input } from '@angular/core';
import { NavController, ModalController, ToastController, ActionSheetController, IonSlides, Platform } from '@ionic/angular';
import { GlobalFunction } from './../../providers/globalfunction';
import $ from 'jquery';
import { C } from './../../providers/constants';
import { OverlayEventDetail } from '@ionic/core';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';
import * as request from 'requestretry';
import { ticketService } from 'src/app/providers/ticketService';

@Component({
  selector: 'app-ticketservicedetail',
  templateUrl: './ticketservicedetail.page.html',
  styleUrls: ['./ticketservicedetail.page.scss'],
})
export class TicketServiceDetailPage implements OnInit {
  itemSearch: any;
  itemTicketService: any;
  
  constructor(private navCtrl: NavController, private gf: GlobalFunction,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private zone: NgZone,
    public storage: Storage,
    public ticketService: ticketService) {
      if(ticketService.itemTicketService){
        this.itemTicketService = this.ticketService.itemTicketService;
      }
  }
  goback(){
    this.navCtrl.pop();
  }
  ngOnInit(){
   
  }
 
}
