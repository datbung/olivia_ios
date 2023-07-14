import { Component, OnInit, ViewChild, HostListener, NgZone, Input } from '@angular/core';
import { NavController, ModalController, ToastController, ActionSheetController, IonSlides } from '@ionic/angular';
import { GlobalFunction } from '../providers/globalfunction';
import * as $ from 'jquery';
import { C } from '../providers/constants';
import { OverlayEventDetail } from '@ionic/core';
import { ImageLoaderService } from 'ionic-image-loader';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';
import { ValueGlobal, SearchHotel } from '../providers/book-service';
import { DayConfig, CalendarModalOptions, CalendarResult, CalendarModal } from 'ion2-calendar';
import {flightService} from '../providers/flightService';
import * as request from 'requestretry';

@Component({
  selector: 'app-flighttopplan',
  templateUrl: './flighttopplan.page.html',
  styleUrls: ['./flighttopplan.page.scss'],
})
export class FlighttopplanPage {
    listflighttopplan: any= [{linkImage: 'https://res.ivivu.com/flight/inbound/images/home/cover-1.png?'+ new Date().getTime(), link: '',title: 'Du học',subtitle: 'Đặt vé máy bay du học giá đặc biệt, không bỏ lỡ ưu đãi riêng cho du học sinh.'},
    {linkImage:'https://res.ivivu.com/flight/inbound/images/home/cover-2.png?'+ new Date().getTime(), link: '',title: 'Định cư',subtitle: 'Săn vé giá rẻ cho người đi định cư. Liên hệ với chúng tôi ngay hôm nay!'},
    {linkImage:'https://res.ivivu.com/flight/inbound/images/home/cover-3.png?'+ new Date().getTime(), link: '',title: 'Làm việc',subtitle: 'Giá vé đặc biệt cho cô dâu định cư và người đi xuất khẩu lao động.'},
    {linkImage:'https://res.ivivu.com/flight/inbound/images/home/cover-4.png?'+ new Date().getTime(), link: '',title: 'Săn vé',subtitle: 'Vé máy bay giá rẻ du lịch và thăm thân Mỹ, Canada. Chat để tư vấn miễn phí.'},
    ];

    constructor(private navCtrl: NavController, private gf: GlobalFunction,
        private modalCtrl: ModalController,
        private toastCtrl: ToastController,
        private zone: NgZone,
        private imageLoader: ImageLoaderService,
        public storage: Storage,
        private actionsheetCtrl: ActionSheetController,
        public valueGlobal: ValueGlobal,
        public _flightService: flightService) { 
        }
    
        ngOnInit(){
            
        }
}