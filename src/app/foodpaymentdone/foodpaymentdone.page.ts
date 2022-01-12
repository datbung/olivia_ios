import { foodService } from './../providers/foodService';
import { SearchHotel } from './../providers/book-service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, NgZone } from '@angular/core';
import * as moment from 'moment';
import { NavController,AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { LaunchReview } from '@ionic-native/launch-review/ngx';
@Component({
  selector: 'app-foodpaymentdone',
  templateUrl: './foodpaymentdone.page.html',
  styleUrls: ['./foodpaymentdone.page.scss'],
})
export class FoodpaymentdonePage implements OnInit {
  code="";startdate;enddate;_email="";stt;total;text;isDinner;checkreview;
  constructor(private activatedRoute: ActivatedRoute,public foodService:foodService,public alertCtrl: AlertController, private launchReview: LaunchReview,
    private navCtrl:NavController, public searchhotel: SearchHotel,public storage: Storage, private zone: NgZone) { 
      this.storage.get('checkreview').then(checkreview => {
        if (checkreview == 0) {
          this.checkreview = 0;
        } else {
          this.checkreview = checkreview;
        }
      })
      this.total=this.foodService.totalPrice.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
      this.isDinner =this.foodService.isDinner
      this.storage.get('email').then(email => {
        if(email){
          this._email = email;
        }
      })
    }

 
  ngOnInit() {
    this.code = this.activatedRoute.snapshot.paramMap.get('code');
    this.startdate = moment(this.activatedRoute.snapshot.paramMap.get('startdate')).format('DD/MM');
    this.enddate = moment(this.activatedRoute.snapshot.paramMap.get('enddate')).format('DD/MM');
    this.stt = this.foodService.ischeckpayment;
    this.text=moment(this.foodService.PeriodPaymentDate).format('HH:mm DD/MM/YYYY');
    //this.gf.googleAnalytionCustom('purchase',{items: [{item_category:'food' , item_name: this.bookCombo.HotelName, item_id: this.bookCombo.HotelCode, start_date: this.cin, end_date: this.cout,origin: this.bookCombo.ComboDetail.comboDetail.departureCode, destination: this.bookCombo.ComboDetail.arrivalCode }], value: this.gf.convertNumberToDouble(priceshow) ,currency: "VND"});
  }
  next()
  {
    this.zone.run(()=>{
     
        this.storage.remove("listItemsCart");
        this.foodService.itemCartChange.emit(0);
        this.foodService.countcart=0;
        this.foodService.listAddToCart =[];
        this.foodService.listItemsCart=[];
      this.foodService.totalPrice=0;
    })
    //this.searchhotel.backPage = "foodpaymentdonepage";
    //this.foodService.itemTabFood.emit(1);
    if (this.checkreview == 0) {
      this.showConfirm();
    }
    this.navCtrl.navigateForward('/homefood');
  }
  public async showConfirm() {
    this.storage.set("checkreview", 1);
    let alert = await this.alertCtrl.create({
      header: 'Bạn thích iVIVU.com?',
      message: 'Đánh giá ứng dụng trên App Store',
      mode: "ios",
      cssClass: 'cls-reivewapp',
      buttons: [
        {
          text: 'Hủy',
          handler: () => {
          }
        },
        {
          text: 'Đánh giá',
          role: 'OK',
          handler: () => {
            this.launchReview.launch()
              .then(() => console.log('Successfully launched store app'));
          }
        }
      ]
    });
    alert.present();
    alert.onDidDismiss().then((data) => {
    })
  }
}
