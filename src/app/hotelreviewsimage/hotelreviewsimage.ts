import { Component, ViewChild, NgZone } from '@angular/core';
import { NavController, ModalController, IonSlides } from '@ionic/angular';
import { SearchHotel } from '../providers/book-service';


/**
 * Generated class for the OccupancyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'app-hotelreviewsimage',
  templateUrl: 'hotelreviewsimage.html',
  styleUrls: ['hotelreviewsimage.scss'],
})
export class HotelreviewsimagePage  {
  arrimgreview=[];cusnamereview;datereview;countslide=0;lengthslide;ischeckslide=false
  @ViewChild('mySlider') slider: IonSlides;
  captionImg: any;
  hotelName: any;
  tourName: any;
  reviewName:any;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public searchhotel: SearchHotel,public zone:NgZone) {
  }
  goback() {
    this.modalCtrl.dismiss();
  }
  ionViewDidEnter() {
    this.cusnamereview=this.searchhotel.cusnamereview;
    this.datereview=this.searchhotel.datereview;
    this.hotelName = this.searchhotel.hotelName;
    this.tourName = this.searchhotel.tourDetailName;
    this.reviewName = this.searchhotel.reviewName;

    setTimeout(() => {
      this.arrimgreview = this.searchhotel.arrimgreview;
      if(this.searchhotel.indexreviewimg){
        this.slider.slideTo(this.searchhotel.indexreviewimg);
        if(this.arrimgreview[this.searchhotel.indexreviewimg] && this.arrimgreview[this.searchhotel.indexreviewimg].CaptionImg){
          this.captionImg = this.arrimgreview[this.searchhotel.indexreviewimg].CaptionImg;
        }
      }
      
      this.lengthslide=this.arrimgreview.length;
      this.ischeckslide=true;
      
      
    },900)
    console.log(this.lengthslide=this.arrimgreview.length);

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
      if(this.arrimgreview[this.countslide] && this.arrimgreview[this.countslide].CaptionImg){
        this.captionImg = this.arrimgreview[this.countslide].CaptionImg;
      }
      
    });
  }
}