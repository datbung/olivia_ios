import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Component, OnInit, NgZone } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import * as request from 'requestretry';
import { C } from '../providers/constants';
import { foodService } from '../providers/foodService';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';
import { FoodreviewdetailPage } from '../foodreviewdetail/foodreviewdetail.page';
import { OverlayEventDetail } from '@ionic/core';

@Component({
  selector: 'app-foodreview',
  templateUrl: './foodreview.page.html',
  styleUrls: ['./foodreview.page.scss'],
})
export class FoodreviewPage implements OnInit {
  star1Active = 0;Description; imageResponse = [];
  base64Image: any;
  memberid: any;
  reviews: any = [];
  order: any;
  orderdetail: any;
  menus: any[];
  textmon: string;
  texttue: string;
  textwed: string;
  textthu: string;
  textfri: string;

  loaddatadone = false;
  itemsks = [1,2,3,4,5];
  menuoff: any;
  arrbkgday: any =[];
  constructor(public zone: NgZone,public camera: Camera,
    private navCtrl: NavController,private file: File, private imagePicker: ImagePicker,
    private storage: Storage,
    public _foodService: foodService,
    private modalCtrl: ModalController) { 
      this.order = _foodService.itemOrder;
      this.orderdetail = _foodService.itemOrderBookingDetail;
      if(_foodService.itemOrderBookingDetail.applyFor){
        this.arrbkgday = _foodService.itemOrderBookingDetail.applyFor.split('|');
      }
      
      this.storage.get('jti').then((uid: any) => {
        if(uid){
            this.memberid = uid;
            this.loadReview();
            this.textmon = moment(this.orderdetail.startDate).format("DD.MM");
            this.texttue = moment(moment(this.orderdetail.startDate).add('days',1)).format("DD.MM");
            this.textwed = moment(moment(this.orderdetail.startDate).add('days',2)).format("DD.MM");
            this.textthu = moment(moment(this.orderdetail.startDate).add('days',3)).format("DD.MM");
            this.textfri = moment(moment(this.orderdetail.startDate).add('days',4)).format("DD.MM");
        }else{
          this.reviews = []
        }
      })
      this.loadmenu();
    }

  ngOnInit() {
  }
  goback()
  {
    this.navCtrl.back();
  }

  loadReview(){
    var se = this;
            var options = {
                method: 'GET',
                url: C.urls.baseUrl.urlFood + "/api/FOReview/GetReviewBookingMember?bookingCode="+se.order.bookingCode+"&comboId="+se.orderdetail.comboId,
                timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                headers:
                {
                  token: "584f470f-7a45-4793-a136-0084fadea81c",
                  memberId: se.memberid
                }
              };
              request(options, function (error, response, body) {
                if(body){
                  se.loaddatadone = true;
                    var result = JSON.parse(body);
                    if(result.response){
                      se.reviews = result.response;
                      let dayofweek = 2;
                      se.menus.forEach(element => {
                        let itemhasreview = se.reviews.filter((el) => {
                          return dayofweek == el.weekdayId;
                        });
                        if(itemhasreview && itemhasreview.length >0){
                          element.hasreview = true;
                          element.reviewed = itemhasreview[0];
                        }else{
                          element.hasreview = false;
                        }
                        dayofweek++;
                      });
                    }
                }
              })

  }

  checkAllowReviewMenu(menu, indexDayofWeek){
    var se = this, menuremove = false;
    if(this.arrbkgday && this.arrbkgday.length >0){
      menuremove = this.arrbkgday[indexDayofWeek] == "0";
    }
    let menustartdate = moment(se.orderdetail.startDate).add(indexDayofWeek,'days')
    //Tính toán phần cho phép review
    let timediffhours = moment(new Date()).diff(moment(menustartdate), 'hours');

    let timediffdays = moment(new Date()).diff(moment(se.orderdetail.endDate), 'days');
    let paid = (se.order.status == 3) ? true : false;
    se.order.paid = paid;

    //menu.allowReview = (timediffhours > 13 && paid) ? true : false;
    if(se.orderdetail.isDinner){
      menu.allowReview = (timediffhours >= 18 && paid && !menuremove) ? true : false;
      menu.titlemenu = "Nguyên liệu tối thứ "+ (indexDayofWeek*1+2) +", "+moment(se.orderdetail.startDate).add(indexDayofWeek,'days').format("DD.MM");
    }else{
      menu.allowReview = (timediffhours >= 11 && paid && !menuremove) ? true : false;
      menu.titlemenu = "Bữa trưa thứ "+ (indexDayofWeek*1+2) +", "+moment(se.orderdetail.startDate).add(indexDayofWeek,'days').format("DD.MM");
    }
    
  }

  loadmenu(){
    var se = this;
    se.menus = [];
    se.menuoff = [];
    let arrremove = se.orderdetail.applyFor.split('|');
       if(se.orderdetail.menus[0]){
        se.orderdetail.menus[0].hasreview = false;
        se.checkAllowReviewMenu(se.orderdetail.menus[0], 0);
        se.orderdetail.menus[0].remove = !arrremove[0];

        if(se.orderdetail.menus[0].restaurentName && se.orderdetail.menus[0].restaurentName.indexOf('<br/>')){
          se.orderdetail.menus[0].restaurentName = se.orderdetail.menus[0].restaurentName.replace('<br/>', '');
         }
        se.menus.push(se.orderdetail.menus[0]);
       }else{
         se.menus.push({id: 1, isdayoff: true});
       }
       if(se.orderdetail.menus[1]){
        se.orderdetail.menus[1].hasreview = false;
        se.checkAllowReviewMenu(se.orderdetail.menus[1], 1);
        se.orderdetail.menus[1].remove = !arrremove[1];

        if(se.orderdetail.menus[1].restaurentName && se.orderdetail.menus[1].restaurentName.indexOf('<br/>')){
          se.orderdetail.menus[1].restaurentName = se.orderdetail.menus[1].restaurentName.replace('<br/>', '');
         }
        se.menus.push(se.orderdetail.menus[1]);
       }
       else{
        se.menus.push({id: 2, isdayoff: true});
      }
       if(se.orderdetail.menus[2]){
        se.orderdetail.menus[2].hasreview = false;
        se.checkAllowReviewMenu(se.orderdetail.menus[2], 2);
        se.orderdetail.menus[2].remove = !arrremove[2];

        if(se.orderdetail.menus[2].restaurentName && se.orderdetail.menus[2].restaurentName.indexOf('<br/>')){
          se.orderdetail.menus[2].restaurentName = se.orderdetail.menus[2].restaurentName.replace('<br/>', '');
         }
        se.menus.push(se.orderdetail.menus[2]);
       }
       else{
        se.menus.push({id: 3, isdayoff: true});
      }
       if(se.orderdetail.menus[3]){
        se.orderdetail.menus[3].hasreview = false;
        se.checkAllowReviewMenu(se.orderdetail.menus[3], 3);
        se.orderdetail.menus[3].remove = !arrremove[3];

        if(se.orderdetail.menus[3].restaurentName && se.orderdetail.menus[3].restaurentName.indexOf('<br/>')){
          se.orderdetail.menus[3].restaurentName = se.orderdetail.menus[3].restaurentName.replace('<br/>', '');
         }
        se.menus.push(se.orderdetail.menus[3]);
       }
       else{
        se.menus.push({id: 4, isdayoff: true});
      }
       if(se.orderdetail.menus[4]){
        se.orderdetail.menus[4].hasreview = false;
        se.checkAllowReviewMenu(se.orderdetail.menus[4], 4);
        se.orderdetail.menus[4].remove = !arrremove[4];

        if(se.orderdetail.menus[4].restaurentName && se.orderdetail.menus[4].restaurentName.indexOf('<br/>')){
          se.orderdetail.menus[4].restaurentName = se.orderdetail.menus[4].restaurentName.replace('<br/>', '');
         }
        se.menus.push(se.orderdetail.menus[4]);
       }
       else{
        se.menus.push({id: 5, isdayoff: true});
      }
       if(se.menus && se.menus.length >0){
        se.menus.forEach(mn => {
          se.orderMenu(mn);
        });
       }
       
  }

  orderMenu(menu){
    this.zone.run(() => {
      menu.mainmenu = [];
      menu.submenu = [];
      menu.othermenu = [];
      if(menu.forecipe && menu.forecipe.length >0){
        menu.forecipe.forEach(element => {
          if(element.type == 5){
            menu.mainmenu.push(element);
          }
          if(element.type == 4 || element.type == 7 || element.type ==6){
            menu.submenu.push(element);
          }
          if(element.type == 3 || element.type == 8){
            menu.othermenu.push(element);
          }
        });
      }
      }
    )
  }

  clickStar1(idx) {
    this.zone.run(() => {
      this.star1Active = idx;
    })
  }
  async addImage() {
    this.getImages();
  }
  getImages() {
    var se = this;
    const options: CameraOptions = {
      quality: 76,
      sourceType: se.camera.PictureSourceType.SAVEDPHOTOALBUM,
      destinationType: se.camera.DestinationType.FILE_URI,
      encodingType: se.camera.EncodingType.JPEG,
      mediaType: se.camera.MediaType.PICTURE,
      saveToPhotoAlbum: true,
      correctOrientation: true,
    }
    this.imageResponse = [];
    this.imagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
        let filename, path;
        se.base64Image = results[i];
        path = results[i].substring(0, results[i].lastIndexOf('/') + 1);
        filename = results[i].substring(results[i].lastIndexOf('/') + 1);
        let index = filename.indexOf('?');
        if (index > -1) {
          filename = filename.substring(0, index);
        }
       
        se.file.readAsDataURL(path, filename).then(base64 => {
          var item = { img: base64, filename: filename }
          this.imageResponse.push(item);
        })

      }
      
    }, (err) => {
      alert(err);
    });
  }
  sendFeedBack()
  {
    
  }

  async reviewMenu(menu, dayofweek){
    var se = this;
    menu.dayofweek = dayofweek;
    se._foodService.itemFoodReview = menu;
    const modal: HTMLIonModalElement =
        await se.modalCtrl.create({
          component: FoodreviewdetailPage,
        });
      modal.present();
      modal.onDidDismiss().then((data: OverlayEventDetail) => {
        if(data.data){
          se.zone.run(()=>{
            menu.hasreview = true;
          })
          se.loadReview();
        }
      })
  }
}
