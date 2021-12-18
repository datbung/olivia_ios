import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as $ from 'jquery';

@Component({
  selector: 'app-installmentdetail',
  templateUrl: './installmentdetail.page.html',
  styleUrls: ['./installmentdetail.page.scss'],
})
export class InstallmentdetailPage implements OnInit {

  constructor(private navCtrl: NavController) {

    setTimeout(()=>{
      $(".homefood-header").removeClass("cls-visible").addClass("cls-disabled");
      if(document.getElementsByClassName("homefood-footer")[1]){
        document.getElementsByClassName("homefood-footer")[0]['style'].display ='none';
        document.getElementsByClassName("homefood-footer")[1]['style'].display ='none';
      }
    },200)
   }

  ngOnInit() {
  }

  goback(){
    this.navCtrl.back();
  }

}
