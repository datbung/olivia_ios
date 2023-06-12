import { Component, OnInit } from '@angular/core';
import { GlobalFunction } from 'src/app/providers/globalfunction';
import { C } from '../../providers/constants';
import { ticketService } from '../../providers/ticketService';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-ticketinfo',
  templateUrl: './ticketinfo.page.html',
  styleUrls: ['./ticketinfo.page.scss'],
})
export class TicketinfoPage implements OnInit {
  includePrice: any;
  code: string;
  expeName: any;

  constructor(private gf:GlobalFunction,private ticketService:ticketService,private navCtrl: NavController, public activatedRoute: ActivatedRoute) { 

  }

  ngOnInit() {
    this.code = this.activatedRoute.snapshot.paramMap.get('code');
    this.getSummary()
  }
  goback(){
    this.navCtrl.back();
  }
  getSummary() {
    this.gf.RequestApi('GET', C.urls.baseUrl.urlTicket + '/api/Booking/Summary/' + this.code , {}, {}, '', '').then((data) => {
      if (data && data.success) {
        this.includePrice = data.data.booking.includePrice.split('|');
        this.includePrice = "<p>" + this.includePrice[0] + " | " + this.includePrice[1] + "</p>" + this.includePrice[2] + this.includePrice[3];
        this.expeName=data.data.booking.expeName;
      }
    });
  }
}
