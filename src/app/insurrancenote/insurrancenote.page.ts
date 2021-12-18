import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-insurrancenote',
  templateUrl: './insurrancenote.page.html',
  styleUrls: ['./insurrancenote.page.scss'],
})
export class InsurranceNotePage implements OnInit {

  constructor(private navCtrl: NavController,
    private callNumber: CallNumber) { }

  ngOnInit() {
  }

  goback(){
    this.navCtrl.back();
  }
  /***
     * Gọi tổng đài hỗ trợ
     * PDANH 26/02/2019
     */
    async makeCallSupport(phone){
      try {
        setTimeout(() => {
          this.callNumber.callNumber(phone,true);
        },10);
      }
      catch (error) {
      }
    }
}
