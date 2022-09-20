import { audit } from 'rxjs/operators';
import { json } from 'body-parser';
import { Component, NgZone, ViewChild, OnInit, Input } from '@angular/core';
import { NavController, Platform} from '@ionic/angular';
import * as request from 'requestretry';
import { AuthService } from './../../../../providers/auth-service';
import * as moment from 'moment';
import { ValueGlobal } from './../../../../providers/book-service';
import { tourService } from './../../../../providers/tourService';
import { C } from './../../../../providers/constants';
import { GlobalFunction } from './../../../../providers/globalfunction';
import { Network } from '@ionic-native/network/ngx';
import { NetworkProvider } from './../../../../network-provider.service';
import { Storage } from '@ionic/storage';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
/**
 * Generated class for the tourServicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'app-searchregion',
  templateUrl: 'searchregion.html',
  styleUrls: ['searchregion.scss'],
})
export class SearchRegionPage implements OnInit{
  ngOnInit() {
   // this.id = this.activatedRoute.snapshot.paramMap.get('id');
   
    //if(this.id==1){
     // this.inputText = this.activatedRoute.snapshot.paramMap.get('text');
    //  this.getItem(this.inputText)
    //}
  }
  @ViewChild('ipsearchregion') myInput;
  json; input; child1 = 0; child = 0;
  fieldName1: any;
  adults1 = 2; adults = 2;
  arrchild1 = [];
  arrchild = [];
  showpopup = false;
  ischeckadults = true;
  ischeckchild = false;
  ischeckroom = false;
  public room1 = 1; public room = 1; gbitem; gbmsg;
  items = []; ischecklist = false; isenabled = true;
  co = 0; recent; index
  setInter;ischecktext=false;
  public isConnected:boolean;
  inputText="";arrHistory=[];objHotelInfo;id;
  arrsdk = [1,2,3,4,5,6];
  loadregiondone = false;
  constructor(public platform: Platform,public navCtrl: NavController, public authService: AuthService, public zone: NgZone, 
    public tourService: tourService,
    public gf: GlobalFunction,
    public networkProvider: NetworkProvider,
    public storage: Storage,
    public keyboard: Keyboard,
    public router: Router,
    public valueGlobal: ValueGlobal, public activatedRoute: ActivatedRoute) {
    //this.recent = this.tourService.recent;
    
    this.getdata();

    
  }
  ionViewDidEnter() {
    setTimeout(() => {
      this.myInput.setFocus();
    }, 150);

    
    this.storage.get('listSearchTour').then((recent)=> {
      if(recent && recent.length >0){
        console.log(recent);
        this.recent = recent;
      }
    })
    
  }
  change() {
    this.showpopup = false;
    this.recent = this.tourService.recent;
  }
  

  ionViewWillEnter(){
    this.showpopup = false;
    this.recent = this.tourService.recent;
  }
  getdata() {
    var se = this;
    let url = C.urls.baseUrl.urlMobile+ '/tour/api/TourApi/GetHotRegion';
    let headers= 
   { 
     apisecret: '2Vg_RTAccmT1mb1NaiirtyY2Y3OHaqUfQ6zU_8gD8SU',
     apikey: '0HY9qKyvwty1hSzcTydn0AHAXPb0e2QzYQlMuQowS8U' }
     
      var options = {
        method: 'GET',
        url: url,
        headers: {
          apisecret: '2Vg_RTAccmT1mb1NaiirtyY2Y3OHaqUfQ6zU_8gD8SU',
          apikey: '0HY9qKyvwty1hSzcTydn0AHAXPb0e2QzYQlMuQowS8U',
          
        },
        timeout: 180000, maxAttempts: 5, retryDelay: 2000,
      };
      request(options, function (error, response, body) {
        if (error) {
          error.page = "hoteldetail";
          error.func = "loaddata";
          error.param = JSON.stringify(options);
          //C.writeErrorLog(error, response);
        }
        if (response.statusCode == 200) {
          var res = JSON.parse(body);
          //se.topsale24Total = res.total;
          se.zone.run(()=> {
            se.loadregiondone = true;
          })
          
          if(res && res.Response && res.Response.length >0){
            se.json = res.Response;
            se.json.forEach(element => {
              if(element.Image && element.Image.indexOf('http') == -1){
                element.Image = 'https:'+element.Image;
              }
            });
          }else{
            se.json = [];
          }
          
        }
      })
  }

  itemclick(item) {
    this.tourService.input = item;
    this.tourService.itemSearchTour.emit(1);
    //this.navCtrl.back();
    this.navCtrl.pop();
  }
  getItems(ev: any) {
    // Reset items back to all of the items
    var se = this;
    if(ev.detail.value){
      const val = ev.detail.value;
      let url = C.urls.baseUrl.urlMobile+'/tour/api/TourApi/SearchTour?keyword=' +val;
      let headers = {
        apisecret: '2Vg_RTAccmT1mb1NaiirtyY2Y3OHaqUfQ6zU_8gD8SU',
        apikey: '0HY9qKyvwty1hSzcTydn0AHAXPb0e2QzYQlMuQowS8U'
      };
      se.gf.RequestApi('GET', url, headers, null, 'searchregion', 'getItems').then((data) => {
              se.zone.run(() => {
                let lstitems = JSON.parse(data);
                console.log(lstitems);
                if(lstitems.length && lstitems.length >0){
                  se.ischecktext=false;
                  se.ischecklist = true;
                 se.items = lstitems;
                  
                }else{
                  se.items.forEach(element => {
                    element.show = false;
                  });
                  se.ischecktext=true;
                }
              });
      })
     }
    else {
      se.ischecklist = false;
      se.ischecktext=false;
      se.items.forEach(element => {
          element.show = false;
      });
    }
  }
  goback() {
    this.navCtrl.pop();
  }

  clearText(){
    this.inputText="";
  }
  
  selectItemHot(item) {
    this.tourService.input = item;
    this.tourService.itemSearchTour.emit(1);
    //this.navCtrl.navigateBack('/app/tabs/tab1');
    this.navCtrl.pop();
  }
}
