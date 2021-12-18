import { Component, OnInit, ViewChild, HostListener, NgZone } from '@angular/core';
import { NavController, ModalController, ToastController } from '@ionic/angular';
import { GlobalFunction } from '../providers/globalfunction';
import * as $ from 'jquery';
import { foodService } from '../providers/foodService';
import { C } from './../providers/constants';
import { FoodfilterPage } from '../foodfilter/foodfilter.page';
import { OverlayEventDetail } from '@ionic/core';

@Component({
  selector: 'app-foodmenufooter',
  templateUrl: './foodmenufooter.page.html',
  styleUrls: ['./foodmenufooter.page.scss'],
})

export class FoodMenuFooterPage {
    menuindex:any = 1;
    countcart = 0;
    constructor(private navCtrl: NavController, private gf: GlobalFunction,
        public foodService: foodService,
        private modalCtrl: ModalController,
        private toastCtrl: ToastController,
        private zone: NgZone) {

        }

        ngOnInit(){
          this.foodService.menuFooterClick.pipe().subscribe(data => {
            this.zone.run(()=>{
              this.menuindex = data;
              this.showHiddenMenuByTabIndex(data);
            })
              
            })
      }

    menuFooterClick(menuindex){
        var se = this;
        se.zone.run(()=>{
            se.menuindex = menuindex;
            se.foodService.tabFoodIndex = menuindex;
            se.foodService.menuFooterClick.emit(menuindex);
        })
        se.showHiddenMenuByTabIndex(menuindex);
        
      }

      showHiddenMenuByTabIndex(menuindex){
        if(menuindex == 1){
          $(".div-myorder").removeClass("cls-tab-visible").addClass("cls-tab-disabled");
          $(".div-notify").removeClass("cls-tab-visible").addClass("cls-tab-disabled");
          $(".div-account").removeClass("cls-tab-visible").addClass("cls-tab-disabled");
          $(".homefoodheader").removeClass("cls-tab-disabled").addClass("cls-tab-visible");

          //$(".food-combo-detail-header").removeClass("cls-visible").addClass("cls-disabled");
          $(".div-wraper-slide").removeClass("cls-disabled").addClass("cls-visible");
          $(".div-wraper-home").removeClass("cls-disabled").addClass("cls-visible");
          $(".div-home").removeClass("cls-tab-disabled").addClass("cls-tab-visible");
          
        }
        else if(menuindex == 2){
            $(".div-home").removeClass("cls-tab-visible").addClass("cls-tab-disabled");
            $(".div-notify").removeClass("cls-tab-visible").addClass("cls-tab-disabled");
            $(".div-account").removeClass("cls-tab-visible").addClass("cls-tab-disabled");

            $(".homefoodheader").removeClass("cls-tab-visible").addClass("cls-tab-disabled");
            

            setTimeout(()=>{
              $(".food-combo-detail-header").removeClass("cls-visible").addClass("cls-disabled");
              $(".div-wraper-slide").removeClass("cls-visible").addClass("cls-disabled");
              //$(".div-wraper-home").removeClass("cls-disabled").addClass("cls-disabled");
              $(".div-myorder").removeClass("cls-tab-disabled").addClass("cls-tab-visible");
            },50)
            
        }
        else if(menuindex == 3){
          $(".div-home").removeClass("cls-tab-visible").addClass("cls-tab-disabled");
          $(".div-myorder").removeClass("cls-tab-visible").addClass("cls-tab-disabled");
          $(".div-account").removeClass("cls-tab-visible").addClass("cls-tab-disabled");
          $(".homefoodheader").removeClass("cls-tab-visible").addClass("cls-tab-disabled");

          setTimeout(()=>{
            $(".food-combo-detail-header").removeClass("cls-visible").addClass("cls-disabled");
            $(".div-wraper-slide").removeClass("cls-visible").addClass("cls-disabled");
            //$(".div-wraper-home").removeClass("cls-disabled").addClass("cls-disabled");
            $(".div-notify").removeClass("cls-tab-disabled").addClass("cls-tab-visible");
          },50)
        }
        else if(menuindex == 4){
          $(".div-home").removeClass("cls-tab-visible").addClass("cls-tab-disabled");
          $(".div-myorder").removeClass("cls-tab-visible").addClass("cls-tab-disabled");
          $(".div-notify").removeClass("cls-tab-visible").addClass("cls-tab-disabled");
          $(".homefoodheader").removeClass("cls-tab-visible").addClass("cls-tab-disabled");

          setTimeout(()=>{
            $(".food-combo-detail-header").removeClass("cls-visible").addClass("cls-disabled");
            $(".div-wraper-slide").removeClass("cls-visible").addClass("cls-disabled");
            //$(".div-wraper-home").removeClass("cls-disabled").addClass("cls-disabled");
            $(".div-account").removeClass("cls-tab-disabled").addClass("cls-tab-visible");
          },50)
        }
      }
}