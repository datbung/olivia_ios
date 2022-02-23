import { Component, OnInit, Input } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { ActivityService, GlobalFunction } from '../providers/globalfunction';
import { Storage } from '@ionic/storage';
import { ValueGlobal, Bookcombo } from '../providers/book-service';
import { HotelRoomDetailPage } from '../hotelroomdetail/hotelroomdetail';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hotelupgraderoom',
  templateUrl: './hotelupgraderoom.page.html',
  styleUrls: ['./hotelupgraderoom.page.scss'],
})
export class HotelupgraderoomPage implements OnInit {
  @Input('myScrollVanish') scrollArea;
  hotelRoomClasses: any = [];
  currentRoomSelect: any;
  username: any;
  email: any;
  roomPriceSale: any;
  loginuser: any;
  constructor(private modalCtrl: ModalController, 
    public activityService: ActivityService, 
    private storage: Storage,
    public valueGlobal: ValueGlobal,
    private navCtrl: NavController,
    public gf: GlobalFunction,
    public bookCombo: Bookcombo,public activatedRoute: ActivatedRoute) { 
    var se = this;
    se.storage.get('username').then(name => {
      if (name !== null) {
        this.username = name;
      }
    })
    se.storage.get('email').then(e => {
      if (e !== null) {
        this.email = e;
      }
    })
    se.hotelRoomClasses=se.activityService.objFlightComboUpgrade.Rooms;
    se.currentRoomSelect = se.activityService.objFlightComboUpgrade.CurrentRoom;
  }

  ngOnInit() {
   
  }

  close(){
    this.navCtrl.back();
  }

  upgradeRoom(itemroom, itemmealtype,index){
    var se = this;
    se.bookCombo.upgradeRoomChange.emit({itemroom: itemroom, itemmealtype: itemmealtype,index});
    this.navCtrl.back();

   
  }
  /*** Về trang login
   * PDANH  18/02/2018
   */
  goToLogin() {
    this.storage.get('auth_token').then(auth_token => {
      if (!auth_token) {
        //this.valueGlobal.logingoback = 'TabPage';
        this.valueGlobal.backValue = 'carcombo';
        this.navCtrl.navigateForward('/login');
      }
    });
  }
 
}
