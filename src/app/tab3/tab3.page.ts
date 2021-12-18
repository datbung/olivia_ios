import { Component, ViewChild, OnInit, Input } from '@angular/core';
import {  IonContent, IonSlides,} from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { BizTravelService } from '../providers/bizTravelService';
import { ValueGlobal } from '../providers/book-service';
import { MytripService } from '../providers/mytrip-service.service';
import * as request from 'requestretry';
import { C } from './../providers/constants';
/**
 * Generated class for the MytripsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit{
  @Input('myScrollVanish') scrollArea;
  @ViewChild(IonContent) content: IonContent;
  @ViewChild('mySlider') slider: IonSlides;
  isBizAccount = false;
    
  constructor(public valueGlobal: ValueGlobal,
              public _mytripService: MytripService,
              private storage: Storage,
              public bizTravelService: BizTravelService) {
      this.valueGlobal.logingoback='/app/tabs/tab3';

      

  }
  
  public async ngOnInit() {
    this.bizTravelService.accountBizTravelChange.pipe().subscribe((check)=> {
      if(check == 1){
        this.loadUserInfo();
      }else if(check == 2){
        this.isBizAccount = false;
      }
    })
  }

  async ionViewWillEnter() {
    this.loadUserInfo();
    this._mytripService.itemLoginUser.emit(1);
  }

  /**
     * Load thông tin user
     */
   loadUserInfo() {
    var se = this;
    se.storage.get('auth_token').then(auth_token => {
        if (auth_token) {
            var text = "Bearer " + auth_token;
            var options = {
                method: 'GET',
                url: C.urls.baseUrl.urlMobile + '/api/Dashboard/GetUserInfo',
                timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                headers:
                {
                    'cache-control': 'no-cache',
                    'content-type': 'application/json',
                    authorization: text
                }
            };
            request(options, function (error, response, body) {
                if (response.statusCode == 200) {
                  if (body) {
                    var data = JSON.parse(body);
                    se.storage.remove('userInfoData');
                    se.storage.set('userInfoData', data);

                    if(data.bizAccount){
                      se.bizTravelService.bizAccount = data.bizAccount;
                      se.isBizAccount = true;
                    }else{
                      se.bizTravelService.bizAccount = null;
                      se.isBizAccount = false;
                    }
                    
                 }
                }else{
                  se.isBizAccount = false;
                }
               
            });
        } 
    })
}
}
