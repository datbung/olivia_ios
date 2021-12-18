import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Component, OnInit, NgZone } from '@angular/core';
import { NavController, ModalController, LoadingController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { Storage } from '@ionic/storage';
import { GlobalFunction } from '../providers/globalfunction';
import * as formData from 'form-data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { C } from '../providers/constants';
import * as moment from 'moment';
import { foodService } from '../providers/foodService';
import * as request from 'requestretry';

@Component({
  selector: 'app-foodreviewweek',
  templateUrl: './foodreviewweek.page.html',
  styleUrls: ['./foodreviewweek.page.scss'],
})
export class FoodreviewweekPage implements OnInit {
  star1Active = 0;Description; imageResponse = [];
  base64Image: any;
  memberid: any;
  reviews: any = [];
  order: any;
  orderdetail: any;
  loaddatadone = false;
  itemsks = [1,2,3,4,5];
  hoten: string;
  phone: any;
  star1ShiperActive: any=0;
  dataImage: any=[];
  loader: any;
  imageReview: any=[];
  title: string;
  combodetail: any;
  constructor(public zone: NgZone,public camera: Camera,
    private navCtrl: NavController,private file: File, private imagePicker: ImagePicker,
    private storage: Storage,
    public _foodService: foodService,
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    public httpClient: HttpClient,
    private sanitizer: DomSanitizer,
    public gf: GlobalFunction) { 
      this.order = _foodService.itemOrderDetail;
      this.order.hasreview = false;
      this.orderdetail = _foodService.itemOrderBookingDetail;
      this.combodetail = this.orderdetail.combo.category;
      this.storage.get('jti').then((uid: any) => {
        if(uid){
            this.memberid = uid;
            this.loadReview();
        }else{
          this.reviews = []
        }
      })
      this.storage.get('infocus').then(infocus => {
        if (infocus) {
          if (infocus.ho && infocus.ten) {
            this.hoten = infocus.ho + ' ' + infocus.ten;
          } else {
            if (infocus.ho) {
              this.hoten = infocus.ho;
            }
            else if (infocus.ten) {
              this.hoten = infocus.ten;
            }
            else{
              this.storage.get('email').then(email => {
                if(email){
                  this.hoten = email;
                }else if (infocus.phone) {
                    this.phone = infocus.phone;
                  }
              })
            }
          }
          if (infocus.phone) {
            this.phone = infocus.phone;
          } 
        }
      })
      //this.loadmenu();
      if(this.orderdetail && this.orderdetail.combo.categoryId <25){
        this.title ="bữa trưa";
      }else{
        this.title ="bữa tối";
      }
    }

  ngOnInit() {
    setTimeout(()=>{
      document.querySelectorAll('textarea').forEach(function(node) {
        var minHeight = parseInt(getComputedStyle(node).minHeight) || node.clientHeight;
        node.style.overflow = 'hidden'; // 'hidden'
        node.onchange = node.oninput = function() {
          node.style.height = 'auto';
          node.style.height = (node.scrollHeight + 24) + "px";
        };
      });
    },300)
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
                      
                      // let dayofweek = 2;
                      // se.menus.forEach(element => {
                      //   let itemhasreview = se.reviews.filter((el) => {
                      //     return dayofweek == el.weekdayId;
                      //   });
                      //   if(itemhasreview && itemhasreview.length >0){
                      //     element.hasreview = true;
                      //     element.reviewed = itemhasreview[0];
                      //   }else{
                      //     element.hasreview = false;
                      //   }
                      //   dayofweek++;
                      // });
                    }
                }
              })

  }

  checkAllowReviewMenu(menu, indexDayofWeek){
    var se = this;
    let menustartdate = moment(se.order.startDate).add(indexDayofWeek,'days')
    //Tính toán phần cho phép review
    let timediffhours = moment(new Date()).diff(moment(menustartdate), 'hours');
    menu.allowReview = timediffhours > 13 ? true : false;
    menu.titlemenu = "Bữa trưa thứ "+ (indexDayofWeek*1+2) +", "+moment(se.order.startDate).add(indexDayofWeek,'days').format("DD.MM");
  }


  clickStar1(idx) {
    this.zone.run(() => {
      this.star1Active = idx;
    })
  }

  closeModal(){
    this.navCtrl.back();
  }

  clickStar(idx) {
    this.zone.run(() => {
      this.star1Active  = idx;
    })
  }

  clickStarShiper(idx) {
    this.zone.run(() => {
      this.star1ShiperActive = idx;
    })
  }

  async addImage() {
    this.getImages();
  }

  sendFeedBack(){
    var se = this;
    var itemMenu = se._foodService.itemFoodReview;
    var itemDetail = se._foodService.itemOrderBookingDetail;
    var itemOrder = se._foodService.itemOrderDetail;
    var form = new formData();
    const foreviewImage:any = [];
    form.append("file_length", se.dataImage.length);
    for (let index = 0; index < se.dataImage.length; index++) {
      const image = se.dataImage[index];
      const reviewImage = { description: image.filename, flag: "1",imageUrl: "", order: 0, id: 0, reviewId: 0 };
      foreviewImage.push(reviewImage);
    }
    if(se.dataImage && se.dataImage.length >0){
      for (let index = 0; index < se.dataImage.length; index++) {
        const element = se.dataImage[index];
        form.append('files_'+index, element.file, element.filename);
      }
    }
    var formObj = {
      "id": 0,
      "comboId": itemDetail.comboId,
      "bookingId": itemOrder.id,
      "weekdayId": 0,
      "bestFeature": se.Description,
      "customerName": se.hoten,
      "replyReview": "",
      "reviewPoint": se.star1Active,
      "deliveryPoint": se.star1ShiperActive,
      "reviewDate": new Date(),
      "memberId": se.memberid,
      "status": 2,
      "foreviewImage": foreviewImage,
      "Source": 1
    }
   
    let obj = JSON.stringify(formObj);
    console.log(obj);
    form.append("body", obj);

    if(form){
      se.presentLoading();

      var options = {
        headers: new HttpHeaders({'token': "584f470f-7a45-4793-a136-0084fadea81c"})
      }
      
      let urlApi = C.urls.baseUrl.urlFood +'/api/FOReview/Create';
      se.httpClient.post(urlApi, form, options).subscribe((res:any)=>{
        if(res.status ==1){
          se.navCtrl.back();
          se._foodService.menuFooterClick.emit(2);
          se._foodService.itemRefreshTripHistoryAfterReview.emit(1);
        }
      
        if(se.loader){
          se.loader.dismiss();
        }
      })
    }
  }

  async presentLoading() {
    this.loader = await this.loadingCtrl.create({
      duration: 3000
    });
    this.loader.present();
  }


  async getImages() {
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
    
    this.imagePicker.getPictures(options).then(async(results) => {
    //const imagePaths: string[] = await this.imagePicker.getPictures({});
    const imageFiles = await se.gf.getMultipleFiles(results);
      //Khi chọn ảnh thì xóa mảng theo loại ảnh chọn
      imageFiles.forEach(file => {
        se.dataImage.push({file : file, filename: file.name});
      });

      for (var i = 0; i < results.length; i++) {
        let filename='', path;
        se.base64Image = results[i];
        
        path = results[i].substring(0, results[i].lastIndexOf('/') + 1);
        filename = results[i].substring(results[i].lastIndexOf('/') + 1);
        let idx = filename.indexOf('?');
        if (idx > -1) {
          filename = filename.substring(0, idx);
        }
        se.file.readAsDataURL(path, filename).then(base64 => {
          var item = { img: base64, filename: filename };
          //Đẩy vào mảng imageResponse để hiển thị trên page
          se.imageReview.push(item);
          
        }).catch((error:any) =>{
          alert(error);
        })
      }
    }, (err) => {
      alert(err);
    });
  }

  clearImg(idx){
    this.zone.run(()=>{
      this.dataImage.splice(idx,1);
      this.imageReview.splice(idx,1);
    })
    
  }
}
