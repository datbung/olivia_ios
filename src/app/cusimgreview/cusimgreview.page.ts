import { Component, OnInit,NgZone } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SearchHotel } from '../providers/book-service';
import { GlobalFunction } from '../providers/globalfunction';
import { C } from './../providers/constants';
import { Storage } from '@ionic/storage';
import { foodService } from '../providers/foodService';

@Component({
  selector: 'app-cusimgreview',
  templateUrl: './cusimgreview.page.html',
  styleUrls: ['./cusimgreview.page.scss'],
})
export class CusimgreviewPage implements OnInit {

  private listsk= [1,2,3,4,5];
  listImages: any = [];
  listImagesTemp: any = [];
  loaddatadone: boolean = false;
  hotelName: any;
  fromhotel: boolean = true;
  totalItem=10;
  indexItem=5;
  constructor(private navCtrl: NavController,
    public searchhotel: SearchHotel,
    public gf: GlobalFunction,
    private storage: Storage,
    public _foodservice :foodService, public zone: NgZone) { 
      var se = this;
      setTimeout(()=>{
        se.loaddatadone = true;
      },600)
        
        if(_foodservice.listimagereview && _foodservice.listimagereview.length> 0){
          se.listImages = _foodservice.listimagereview;
          for (let index = 0; index < se.listImages.length; index++) {
            const element = se.listImages[index];
            if (element.imageUrl.toLocaleString().trim().indexOf("vertical") != -1) {
              element.imageUrl=element.imageUrl.replace("800x600", "600x800");
            }
          }
          se.fromhotel = false;
        }else{
          se.storage.get('hotelimagereviews_'+se.searchhotel.hotelID).then((data) => {
            if(data){
              for (let index = 0; index < 5; index++) {
                const element = data[index];
                se.listImages.push(element);
              }
              se.listImagesTemp = data;
              for (let index = 0; index < se.listImages.length; index++) {
                const element = se.listImages[index];
                if (element.imageUrl.toLocaleString().trim().indexOf("vertical") != -1) {
                  element.imageUrl=element.imageUrl.replace("800x600", "600x800");
                }
              }
              se.fromhotel = true;
              se.hotelName = searchhotel.hotelName;
            }
          })
        }
      
  }

  ngOnInit() {
  }

  goback(){
    this.navCtrl.back();
  }
  doInfinite(infiniteScroll) {
    this.zone.run(() => {
      if (this.totalItem<this.listImagesTemp.length-1) {
        for (let index = this.indexItem; index < this.totalItem; index++) {
          const element = this.listImagesTemp[index];
          this.listImages.push(element);
        }
        this.indexItem=this.indexItem+5;
        this.totalItem=this.totalItem+5;
        infiniteScroll.target.complete();
      }
      else{
        infiniteScroll.target.complete();
      }
    })
  }
}
