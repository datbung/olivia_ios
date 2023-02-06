import { Component, OnInit, ViewChild, HostListener, NgZone, Input } from '@angular/core';
import { NavController, ModalController, ToastController, ActionSheetController, IonSlides, Platform } from '@ionic/angular';
import { GlobalFunction } from './../../../providers/globalfunction';
import $ from 'jquery';
import { C } from './../../../providers/constants';
import { OverlayEventDetail } from '@ionic/core';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';
import { NetworkProvider } from './../../../network-provider.service';
import * as request from 'requestretry';
import { tourService } from 'src/app/providers/tourService';

@Component({
  selector: 'app-hometicket',
  templateUrl: './hometicket.page.html',
  styleUrls: ['./hometicket.page.scss'],
})
export class HomeTicketPage implements OnInit {
  itemSearch: any;
  
  constructor(private navCtrl: NavController, private gf: GlobalFunction,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private zone: NgZone,
    public storage: Storage,
    private actionsheetCtrl: ActionSheetController,
    private platform: Platform,
    public networkProvider: NetworkProvider,
    public tourService: tourService) {
    
  }
  loadTopSale() {
    let se = this;
    let url = C.urls.baseUrl.urlMobile+'/tour/api/TourApi/GetAllBooking24h';
    let headers = {
      apisecret: '2Vg_RTAccmT1mb1NaiirtyY2Y3OHaqUfQ6zU_8gD8SU',
      apikey: '0HY9qKyvwty1hSzcTydn0AHAXPb0e2QzYQlMuQowS8U'
    };
    se.gf.RequestApi('GET', url, headers, null, 'hometour', 'loadTopSale').then((data) => {
      let res = JSON.parse(data);
      console.log(res.Response);
      this.tourService.listTopSale = res.Response;
     
    })
  }

  ngOnInit(){
   
  }
}
