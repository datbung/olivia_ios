import { Component, OnInit } from '@angular/core';
import { GlobalFunction } from 'src/app/providers/globalfunction';
import { C } from '../../providers/constants';
import { ticketService } from '../../providers/ticketService';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-ticketinfo',
  templateUrl: './ticketinfo.page.html',
  styleUrls: ['./ticketinfo.page.scss'],
})
export class TicketinfoPage implements OnInit {
  includePrice: any;

  constructor(public gf:GlobalFunction,public ticketService:ticketService,private navCtrl: NavController) { 
    this.gf.RequestApi('GET', C.urls.baseUrl.urlTicket + '/api/Booking/Summary/'+this.ticketService.itemTicketService.objbooking.bookingId, {}, {}, '', '').then((data) => {
      if (data && data.success) {
         this.includePrice=data.data.includePrice.split('|');
         this.includePrice = "<p>" + this.includePrice[0] + " | " + this.includePrice[1] + "</p>" + this.includePrice[2] + this.includePrice[3]
      } 
    })
  }

  ngOnInit() {
  }
  goback(){
    this.navCtrl.back();
  }
}
