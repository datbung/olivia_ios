import { Component, OnInit, ViewChild, HostListener, NgZone, Input } from '@angular/core';
import { NavController, ModalController, ToastController, ActionSheetController, IonSlides, Platform } from '@ionic/angular';
import { GlobalFunction } from '../../providers/globalfunction';
import $ from 'jquery';
import { C } from '../../providers/constants';
import { OverlayEventDetail } from '@ionic/core';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';
import * as request from 'requestretry';
import { ticketService } from 'src/app/providers/ticketService';
import { SearchHotel } from 'src/app/providers/book-service';

@Component({
  selector: 'app-ticketpricedetail',
  templateUrl: './ticketpricedetail.page.html',
  styleUrls: ['./ticketpricedetail.page.scss'],
})
export class TicketPriceDetailPage implements OnInit {
  itemSearch: any;
  itemTicketService: any;
  totalPriceStr: Promise<boolean>;
  
  constructor(private navCtrl: NavController, private gf: GlobalFunction,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private zone: NgZone,
    public storage: Storage,
    public ticketService: ticketService,
    public searchhotel: SearchHotel) {
      if(ticketService.itemTicketService){
        this.itemTicketService = this.ticketService.itemTicketService;
        this.totalPriceStr = this.ticketService.totalPriceStr
      }
  }
  goback(){
    this.navCtrl.pop();
  }
  ngOnInit(){
   
  }
 
}
