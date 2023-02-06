import { Component, OnInit, Input } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { ActivityService, GlobalFunction } from '../providers/globalfunction';
import { Storage } from '@ionic/storage';
import { ValueGlobal, Bookcombo } from '../providers/book-service';
import { HotelRoomDetailPage } from '../hotelroomdetail/hotelroomdetail';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-flightcomboupgraderoom',
  templateUrl: './flightcomboupgraderoom.page.html',
  styleUrls: ['./flightcomboupgraderoom.page.scss'],
})
export class FlightcomboupgraderoomPage implements OnInit {
  @Input('myScrollVanish') scrollArea;
  hotelRoomClasses: any = [];
  currentRoomSelect: any;
  username: any;
  email: any;
  roomPriceSale: any;
  loginuser: any;
  hotelRoomClassestemp: any = [];
  stt: string;
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
    se.storage.get('auth_token').then(auth_token => {
      se.loginuser = auth_token;
      if (se.activityService.objFlightComboUpgrade.Rooms) {
          se.hotelRoomClassestemp = se.activityService.objFlightComboUpgrade.Rooms;
          se.currentRoomSelect = se.activityService.objFlightComboUpgrade.CurrentRoom;
          se.roomPriceSale = se.activityService.objFlightComboUpgrade.roomPriceSale;
          se.hotelRoomClassestemp.forEach(hotelroom => {
              var co = 0;
              for (let index = 0; index < hotelroom.MealTypeRates.length; index++) {
                const mealtype = hotelroom.MealTypeRates[index];
                if ((se.loginuser || mealtype.IsshowpricesOTA) && !mealtype.MSG) {
                  mealtype.PriceDiffUnit= Math.ceil(mealtype.PriceDiffUnit/1000)*1000
                  mealtype.PriceShow =  mealtype.PriceDiffUnit.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.").replace(/\,/g, '.');
                }
                else {
                    co = 1;
                }
              }
              if (co == 0) {
                se.hotelRoomClasses.push(hotelroom);
              }
              // hotelroom.MealTypeRates.forEach(mealtype => {
              //     if ((se.loginuser || mealtype.IsshowpricesOTA) && !mealtype.MSG.toString()) {
              //       mealtype.PriceDiffUnit= Math.ceil(mealtype.PriceDiffUnit/1000)*1000
              //       mealtype.PriceShow =  mealtype.PriceDiffUnit.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.").replace(/\,/g, '.');
              //     }
              //     else {
              //         co = 1;
              //     }
              // });
              // if (co == 0) {
              //     se.hotelRoomClasses.push(hotelroom);
              // }
          });
      }
  });
  }

  ngOnInit() {
    this.stt = this.activatedRoute.snapshot.paramMap.get('stt');
  }

  close(){
    //this.modalCtrl.dismiss();
    if(this.stt=='0'){
      this.navCtrl.navigateBack('/flightcomboreviews');
    }
    else{
      this.navCtrl.navigateBack('/combocarnew');
    }
  }

  upgradeRoom(itemroom, itemmealtype,index){
    var se = this;
    se.bookCombo.upgradeRoomChange.emit({itemroom: itemroom, itemmealtype: itemmealtype,index});
    // se.navCtrl.navigateBack('/flightcomboreviews');
    if(this.stt=='0'){
      this.navCtrl.navigateBack('/flightcomboreviews');
    }
    else{
      this.navCtrl.navigateBack('/combocarnew');
    }
    //se.modalCtrl.dismiss({itemroom: itemroom, itemmealtype: itemmealtype,index});
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

  /*** Show popup  chi tiết khách sạn
   */
  async showRoomDetail(obj) {
    var se = this;
    let param = {
      hoteldetail: obj
    };
    this.gf.setParams({ objroom: obj, jsonroom: se.hotelRoomClasses, imgHotel: obj.Rooms[0].Images, address: se.activityService.objFlightComboUpgrade.address }, 'hotelroomdetail');
    // this.valueGlobal.notRefreshDetail = true;
    // this.valueGlobal.backValue = 
    // this.navCtrl.navigateForward('/hotelroomdetail/'+obj.HotelID);
    this.valueGlobal.backValue = "flightcomboupgrade";
    const modal: HTMLIonModalElement =
      await this.modalCtrl.create({
        component: HotelRoomDetailPage
      });
    modal.present();

    // modal.onDidDismiss().then((data: OverlayEventDetail) => {
    //   if (data.data) {
        
    //   }
    // })
  }
}
