import { Component, OnInit, Input,NgZone } from '@angular/core';
import { NavController, ModalController,LoadingController } from '@ionic/angular';
import { ActivityService, GlobalFunction } from '../providers/globalfunction';
import { Storage } from '@ionic/storage';
import { ValueGlobal, Bookcombo } from '../providers/book-service';
import { ActivatedRoute } from '@angular/router';
import { C } from './../providers/constants';
import * as request from 'requestretry';
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
  ListRoomClassestemp: any[];
  jsonroom: any;
  loader: any;
  indexMeal: any;
  constructor(private modalCtrl: ModalController, 
    public activityService: ActivityService, 
    private storage: Storage,
    public valueGlobal: ValueGlobal,
    private navCtrl: NavController,
    public gf: GlobalFunction,
    public bookCombo: Bookcombo,public activatedRoute: ActivatedRoute,private zone: NgZone,private loadingCtrl: LoadingController) { 
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
   

    this.getHotelContractPrice( this.bookCombo.FormParam );
  }
  getHotelContractPrice(data) {
    var se = this;
    if (data) {
      var form = data;
      se.presentLoading();
      var options = {
        method: 'POST',
        url: C.urls.baseUrl.urlContracting + '/api/contracting/HotelSearchReqContractAppV2',
        timeout: 10000, maxAttempts: 3, retryDelay: 10000,
        headers:
          {},
        form
      };
      request(options, function (error, response, body) {
        if (response.statusCode != 200) {
          var objError = {
            page: "carcombo",
            func: "getHotelContractPrice",
            message: response.statusMessage,
            content: response.body,
            type: "warning",
            param: JSON.stringify(options)
          };
          C.writeErrorLog(objError, response);
        }
        if (error) {
          error.page = "carcombo";
          error.func = "getHotelContractPrice";
          error.param = JSON.stringify(options);
          C.writeErrorLog(error, response);
        };
        se.zone.run(() => {
          var result = JSON.parse(body);
          se.loader.dismiss();
          if (result.Hotels) {
            se.ListRoomClassestemp = result.Hotels[0].RoomClasses;
            se.checkRoomFsale();
          }
        })
       
      })
    }
  }
  checkRoomFsale(){
    this.currentRoomSelect = this.activityService.objFlightComboUpgrade.CurrentRoom;
    this.indexMeal = this.activityService.objFlightComboUpgrade.CurrentRoomIndex;
     this.hotelRoomClasses=[];
    for (var i = 0; i < this.ListRoomClassestemp.length; i++) {
   
        const element = this.ListRoomClassestemp[i];
        if (element.IsFlashSale == true && element.Status != 'IP') {
          this.hotelRoomClasses.push(this.ListRoomClassestemp[i]);
         }
        
      
    }
    for (var i = 0; i <this.hotelRoomClasses.length; i++) {
      //lọc mealType là promotion và Internal
    this.hotelRoomClasses[i].MealTypeRates = this.hotelRoomClasses[i].MealTypeRates.filter((Meal) => {
      return  Meal.IsFlashSale == true && (Meal.Supplier == 'Internal' || Meal.Supplier == 'VINPEARL' || Meal.Supplier == 'B2B'|| Meal.Supplier == 'SMD') && Meal.PromotionNote != '';
    })
    }
    for (let i = 0; i < this.hotelRoomClasses.length; i++) {
      for (let j = 0; j <  this.hotelRoomClasses[i].MealTypeRates.length; j++) {
        const elementmeal = this.hotelRoomClasses[i].MealTypeRates[j];
        var checkmeal=''+elementmeal.RoomId+elementmeal.Code+j;
        if (checkmeal==''+this.currentRoomSelect.RoomId+this.currentRoomSelect.Code+this.indexMeal) {
          this.hotelRoomClasses[i].MealTypeRates[j].elementmeal=true;
        }else{
          this.hotelRoomClasses[i].MealTypeRates[j].elementmeal=false;
        }
        
      }
      
    }
  
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
  async presentLoading() {
    this.loader = await this.loadingCtrl.create({
   });
   this.loader.present();
 }
}
