import { ValueGlobal } from './../providers/book-service';
import { json } from 'body-parser';
import { ToastController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
var request = require("request");
import { C } from '../providers/constants';
import { ActivityService } from '../providers/globalfunction';
@Component({
  selector: 'app-accountdeletiondone',
  templateUrl: './accountdeletiondone.page.html',
  styleUrls: ['./accountdeletiondone.page.scss'],
})
export class AccountDeletionDonePage implements OnInit {
  phone
  constructor(private toastCtrl: ToastController, public navCtrl: NavController, public valueGlobal: ValueGlobal,
    public activityService: ActivityService) { }
  ngOnInit() {
  }
  goback() {
    this.activityService.itemRefreshDeletionAccount.emit(1);
    this.navCtrl.navigateBack('/app/tabs/tab1');
  }
  
}
