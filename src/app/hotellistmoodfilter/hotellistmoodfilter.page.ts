import { moodService } from './../providers/moodService';
import { Component, OnInit, NgZone } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { GlobalFunction } from '../providers/globalfunction';
import { Storage } from '@ionic/storage';
import { ValueGlobal, SearchHotel } from '../providers/book-service';


@Component({
  selector: 'app-hotellistmoodfilter',
  templateUrl: './hotellistmoodfilter.page.html',
  styleUrls: ['./hotellistmoodfilter.page.scss'],
})
export class HotellistmoodfilterPage implements OnInit {

  loadpricedone = false;
  items: any[];
  itemsfull: any[];
  selectedRegion: any = [];
  countTopdealFilter = 0;s
  listRegion = [];
  cleartopdealfilter: boolean = false;
  constructor(private gf: GlobalFunction,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private zone: NgZone,
    public storage: Storage,
    public valueGlobal: ValueGlobal,
    public searchhotel: SearchHotel, public moodService: moodService) {
    this.zone.run(() => {
      //if(this.topDealService.listData && this.topDealService.listData.length > 1){

      if (this.moodService.listRegion && this.moodService.listRegion.length > 0) {
        this.listRegion = this.moodService.listRegion;
        for (let i = 0; i < this.listRegion.length; i++) {
          const el = this.listRegion[i];
          el.stt=false;
          for (let j = 0; j < this.searchhotel.selectedRegion.length; j++) {
            const elRegion = this.searchhotel.selectedRegion[j];
            if (el.regionId==elRegion) {
              el.stt=true;
              break;
            }
          }
        }
      }
      // if(this.searchhotel.selectedRegion.length>0){
      //   this.selectedRegion = this.searchhotel.selectedRegion;
      //     setTimeout(()=> {
      //       for (let index = 0; index < this.searchhotel.selectedRegion.length; index++) {
      //         const element = this.searchhotel.selectedRegion[index];
      //         if(this.gf.checkExistsIndex(this.selectedRegion,element)){
      //           this.renderCssByType(element, true );
      //         }
              
      //       }
      //     },300)
      // }
    })
  }

  ngOnInit() {
  }
  close() {
    this.modalCtrl.dismiss({stt:0});
  }
  itemRegionClick(item) {
    var objRegion = document.getElementById(item.regionId);
    let itemdisabled = objRegion.classList.contains('region-disabled');
    if (itemdisabled) {
      return;
    }
    item.stt=!item.stt;
    // if (this.selectedRegion.indexOf(item.regionId) != -1) {
    //   this.gf.removeItem(this.selectedRegion, item.regionId);
    // } else {
    //   this.selectedRegion.push(item.regionId);
    // }
    // this.renderCssByType(item.regionId, this.gf.checkExistsIndex(this.selectedRegion, item.regionId));
  }

  clearFilter() {
   
    // for (let index = 0; index < this.listRegion.length; index++) {
    //   const element = this.listRegion[index];
    //   let objRegion = document.getElementById(element.regionId);
    //   if(objRegion){
    //     objRegion.classList.remove('region-check');
    //     objRegion.classList.remove('region-uncheck');
    //     objRegion.classList.remove('region-disabled');
    //   }
    // }
    // this.selectedRegion=[];
    for (let i = 0; i < this.listRegion.length; i++) {
      const element = this.listRegion[i];
      element.stt=false;
    }

  }
  filter() {
    // this.searchhotel.selectedRegion=this.selectedRegion;
    this.searchhotel.selectedRegion=[];
    for (let i = 0; i < this.listRegion.length; i++) {
      const element = this.listRegion[i];
      if (element.stt) {
        this.searchhotel.selectedRegion.push(element.regionId);
      }
      
    }
    this.modalCtrl.dismiss({stt:1});
  }
  renderCssByType(strIndex: string, checked: boolean) {
    var objRegion = document.getElementById(strIndex);
    if (objRegion) {
      objRegion.classList.remove('region-check');
      objRegion.classList.remove('region-uncheck');
      objRegion.classList.add(checked ? 'region-check' : 'region-uncheck');
    }
  }
}

