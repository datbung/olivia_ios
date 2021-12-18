import { Component,NgZone,OnInit } from '@angular/core';
import {  NavController} from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Crop } from '@ionic-native/crop/ngx';
import { File } from '@ionic-native/file/ngx';
import { GlobalFunction } from './../providers/globalfunction';
@Component({
  selector: 'app-mytripuppayment',
  templateUrl: './mytripuppayment.page.html',
  styleUrls: ['./mytripuppayment.page.scss'],
})
export class MytripuppaymentPage implements OnInit {
  croppedImagepath:any;
  base64Image: any;
  croppedImagefilename: any;
  fileType: any;
  constructor(public navCtrl: NavController, private camera: Camera, private file: File,private crop: Crop,
    public zone : NgZone,public gf: GlobalFunction) { 
    //se.croppedImagepath = se.gf.getParams('userAvatar');
  }

  ngOnInit() {
  }
  goback(){
    this.navCtrl.back();
  }
  upimage(){
    this.captureImageGallery();
  }
  async captureImageGallery() {
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

      se.camera.getPicture(options).then((imageData) => {    
        let filename,path;
        se.base64Image = imageData;
            path = imageData.substring(0, imageData.lastIndexOf('/') + 1);
            filename = imageData.substring(imageData.lastIndexOf('/') + 1);
            let index = filename.indexOf('?');     
            if (index > -1) {
              filename = filename.substring(0,index);
            }      
            se.croppedImagefilename = filename;
            se.cropImage(imageData);
        })
}
cropImage(imgPath) {
  this.crop.crop(imgPath, { quality: 100 })
    .then(
      newPath => {
        this.showCroppedImage(newPath.split('?')[0]);
      },
      error => {
        throw error;
      }
      
    );
}
showCroppedImage(ImagePath){
  var copyPath = ImagePath;
  var splitPath = copyPath.split('/');
  var imageName = splitPath[splitPath.length-1];
  var filePath = ImagePath.split(imageName)[0];
  var splitType = imageName.split('.');
  var imageType = splitType[splitType.length -1];
  
  var se = this;
  se.fileType = imageType;
  se.file.readAsDataURL(filePath,imageName).then(base64=>{
  se.zone.run(()=>{
      se.croppedImagepath = base64;
  })
  const contentType ='image/'+imageType;
  let b64:any = base64.split(',')[1];
  //se.croppedImagepath = "data:image/jpeg;base64,"+base64;
  //se.uploadAvatar(b64);
  })
}
next(){
  
}
}
