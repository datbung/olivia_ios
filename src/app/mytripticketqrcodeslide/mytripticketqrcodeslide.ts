import { Component, ViewChild, NgZone } from '@angular/core';
import { NavController, ModalController, IonSlides } from '@ionic/angular';
import { SearchHotel } from '../providers/book-service';
import { MytripService } from '../providers/mytrip-service.service';


/**
 * Generated class for the OccupancyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'app-mytripticketqrcodeslide',
  templateUrl: 'mytripticketqrcodeslide.html',
  styleUrls: ['mytripticketqrcodeslide.scss'],
})
export class MytripTicketQrcodeSlidePage  {
  arrimgreview=[];cusnamereview;datereview;countslide=0;lengthslide;ischeckslide=false
  @ViewChild('mySlider') slider: IonSlides;
  captionImg: any;
  hotelName: any;
  tourName: any;
  reviewName:any;
  token: any;
  title: any;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public _mytripservice: MytripService,public zone:NgZone) {
  }
  goback() {
    this.modalCtrl.dismiss();
  }
  ionViewDidEnter() {
    this.cusnamereview=this._mytripservice.objectDetail.experienceName || '';
    setTimeout(() => {
      this.arrimgreview = this._mytripservice.objectDetail.listNotes.filter((item) => item.qrLink);
      this.lengthslide=this.arrimgreview.length;
      this.ischeckslide=true;
      
    },300)
    //console.log(this.lengthslide=this.arrimgreview.length);

  }
  nextslide()
  {
    if (this.countslide<this.arrimgreview.length-1) {
      this.countslide++;
      this.slider.slideTo(this.countslide);
    }

  }
  backslide()
  {
    if (this.countslide-1>=0) {
      this.countslide--;
      this.slider.slideTo(this.countslide);
    }

  }
  ionSlideDidChange()
  {
    // this.slider.getActiveIndex().then(index => {
    //   this.countslide = index;
    //   this.captionImg = this.arrimgreview[this.countslide].CaptionImg;
    // });
  }

  ionSlideTransitionStart() {
    this.slider.getActiveIndex().then(index => {
      this.countslide = index;
      if(this.arrimgreview[this.countslide] && this.arrimgreview[this.countslide].qrLink ){
        //this.captionImg = this.arrimgreview[this.countslide].CaptionImg;
        this.token = this.arrimgreview[this.countslide].token;
        this.title = this.arrimgreview[this.countslide].title;
      }
      
    });
  }
}