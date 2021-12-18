import { Component, OnInit, NgZone } from '@angular/core';
import { foodService } from '../providers/foodService';
import { ModalController, LoadingController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { File } from '@ionic-native/file/ngx';
import { Storage } from '@ionic/storage';
import { GlobalFunction } from '../providers/globalfunction';
import * as formData from 'form-data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { C } from '../providers/constants';

@Component({
  selector: 'app-foodreviewdetail',
  templateUrl: './foodreviewdetail.page.html',
  styleUrls: ['./foodreviewdetail.page.scss'],
})
export class FoodreviewdetailPage implements OnInit {
  title: any;
  star1Active:any = -1;
  Description="";
  star1ShiperActive: any =-1;
  base64Image: any;
  imageReview: any=[];
  hoten: string;
  phone: any;
  memberid: any;
  dataImage: any=[];
  formData: FormData = new FormData();
  loader: any;
  menu: any;

  constructor(public _foodService: foodService,
    private modalCtrl: ModalController,
    private zone: NgZone,
    private camera: Camera,
    private imagePicker: ImagePicker,
    private file: File,
    private storage: Storage,
    public gf: GlobalFunction,
    private loadingCtrl: LoadingController,
    public httpClient: HttpClient,
    private sanitizer: DomSanitizer) {
    if(this._foodService.itemFoodReview){
      this.menu = this._foodService.itemFoodReview;
      this.title = this._foodService.itemFoodReview.titlemenu;
      if(this._foodService.itemFoodReview.reviewed){
        if(this._foodService.itemFoodReview.reviewed.bestFeature){
          this.Description = this._foodService.itemFoodReview.reviewed.bestFeature;
        }
        if(this._foodService.itemFoodReview.reviewPoint){
          this.star1Active = this._foodService.itemFoodReview.reviewed.reviewPoint;
        }
        if(this._foodService.itemFoodReview.deliveryPoint){
          this.star1ShiperActive = this._foodService.itemFoodReview.reviewed.deliveryPoint;
        }
        if(this._foodService.itemFoodReview.reviewed.images && this._foodService.itemFoodReview.reviewed.images.length >0){
          this._foodService.itemFoodReview.reviewed.images.forEach(element => {
            this.imageReview.push({img: element});
          });
        }
      }
      
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

      this.storage.get('jti').then((uid: any) => {
        if(uid){
            this.memberid = uid;
        }
      })
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

  closeModal(){
    this.modalCtrl.dismiss();
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
    if(se.star1Active == -1 || se.star1ShiperActive == -1){
      se.gf.showToastWarning('Vui lòng chọn * đánh giá chất lượng dịch vụ!');
      return;
    }
    var itemMenu = se._foodService.itemFoodReview;
    var itemDetail = se._foodService.itemOrderBookingDetail;
    var itemOrder = se._foodService.itemOrder;
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
      "weekdayId": itemMenu.dayofweek,
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
        //var result = JSON.parse(res);
        if(res.status ==1){
          se.modalCtrl.dismiss({menuid: itemMenu.id});
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
