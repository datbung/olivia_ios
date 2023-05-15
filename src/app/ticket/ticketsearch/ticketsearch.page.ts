
import { Component, NgZone,OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { C } from '../../providers/constants';
import { GlobalFunction } from '../../providers/globalfunction';
import * as moment from 'moment';
import * as $ from 'jquery';
import { Storage } from '@ionic/storage';
import { ticketService } from 'src/app/providers/ticketService';
/**
 * Generated class for the SearchHotelFilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-ticketsearch',
  templateUrl: 'ticketsearch.page.html',
  styleUrls: ['ticketsearch.page.scss'],
})
export class TicketSearchPage implements OnInit{
    listHistorySearch =[];
    listRegionSearch =[];
    listHotRegion = [
        {
            AvartarLink: 'https://cdn1.ivivu.com/iVivu/2019/09/12/16/vinpearl-land-phu-quoc-lazy-river-800x450.jpg',
            PromotionTitle: 'Vé bán chạy',
            Name: 'Vé VinWonders Nha Trang',
            AvgPoint: 9.1,
            NumOfReview: 54,
            MinPrice: 350000,
            Notes: [
                { Description: '• Hoàn hủy miễn phí 24h'},
                { Description: '• Xác nhận tức thời'},
                { Description: '• Miễn phí trẻ em cao dưới 99cm'}
            ]
        },
        {
            AvartarLink: 'https://cdn1.ivivu.com/iVivu/2019/09/12/16/vinpearl-safari-phu-quoc-29--800x450.jpg',
            PromotionTitle: 'Vé bán chạy',
            Name: 'Vé VinWonders Phú Quốc',
            AvgPoint: 9.2,
            NumOfReview: 109,
            MinPrice: 300000,
            Notes: [
                { Description: '• Hoàn hủy miễn phí 24h'},
                { Description: '• Xác nhận tức thời'},
                { Description: '• Miễn phí trẻ em cao dưới 99cm'}
            ]
        },
        {
            AvartarLink: 'https://cdn1.ivivu.com/iVivu/2019/09/12/16/vinpearl-safari-phu-quoc-29--800x450.jpg',
            PromotionTitle: 'Vé bán chạy',
            Name: 'Vé VinWonders Hội An',
            AvgPoint: 9.4,
            NumOfReview: 68,
            MinPrice: 250000,
            Notes: [
                { Description: '• Hoàn hủy miễn phí 24h'},
                { Description: '• Xác nhận tức thời'},
                { Description: '• Miễn phí trẻ em cao dưới 99cm'}
            ]
        },
        {
            AvartarLink: 'https://cdn1.ivivu.com/iVivu/2020/12/14/17/img-9613-800x450.jpg',
            PromotionTitle: 'Vé bán chạy',
            Name: 'Vé VinWonders Nha Trang',
            AvgPoint: 9.1,
            NumOfReview: 54,
            MinPrice: 200000,
            Notes: [
                { Description: '• Hoàn hủy miễn phí 24h'},
                { Description: '• Xác nhận tức thời'},
                { Description: '• Miễn phí trẻ em cao dưới 99cm'}
            ]
        },
        {
            AvartarLink: 'https://cdn1.ivivu.com/iVivu/2019/09/12/16/vinpearl-safari-phu-quoc-29--800x450.jpg',
            PromotionTitle: 'Vé bán chạy',
            Name: 'Vé VinWonders Phú Quốc',
            AvgPoint: 9.2,
            NumOfReview: 109,
            MinPrice: 200000,
            Notes: [
                { Description: '• Hoàn hủy miễn phí 24h'},
                { Description: '• Xác nhận tức thời'},
                { Description: '• Miễn phí trẻ em cao dưới 99cm'}
            ]
        },
    ];
    inputText: string='';
    listHotExperience: any;
    ischecktext: boolean;
    ischecklist: boolean;
    items: any;
  itemRegion: any;
  itemTicket:any
  constructor(
    public gf: GlobalFunction,public navCtrl: NavController, private storage: Storage, public ticketService: ticketService,public zone: NgZone) {
        this.loadHistorySearch();
      this.loadRegion();
      this.loadBestExperience();
    }
    loadBestExperience() {
        let se = this;
        let url = `${C.urls.baseUrl.urlTicket}/api/Home/GetBestExperiences`;
        let headers = {
            apisecret: '2Vg_RTAccmT1mb1NaiirtyY2Y3OHaqUfQ6zU_8gD8SU',
            apikey: '0HY9qKyvwty1hSzcTydn0AHAXPb0e2QzYQlMuQowS8U'
        };
        se.gf.RequestApi('GET', url, headers, null, 'ticketsearch', 'GetBestExperiences').then((data) => {
            let res = JSON.parse(data);
            //se.listHotRegion = res.data;
            //console.log(res.data);
            se.listHotExperience = res.data;
            // if(se.listHotExperience && se.listHotExperience.length >0){
            //     se.listHotExperience.forEach((item, idx) => {
            //         if(se.listHotRegion[idx] && se.listHotRegion[idx].AvartarLink){
            //             item.AvartarLink = se.listHotRegion[idx].AvartarLink;
            //         }
                    
            //     })
            // }
        })
    }
    async loadHistorySearch() {
        let listLastSearch:any = await this.gf.getListLastSearchTicketRegion();
        if(listLastSearch && listLastSearch.length >0){
            this.listHistorySearch = listLastSearch;
        }else{
            this.listHistorySearch = [];
        }
    }
    getItems(ev: any) {
        // Reset items back to all of the items
        var se = this;
        if(ev.detail.value){
          const val = ev.detail.value;
          let url = `${C.urls.baseUrl.urlTicket}/api/Home/SearchExperience?keyword=` +val;
          let headers = {
            apisecret: '2Vg_RTAccmT1mb1NaiirtyY2Y3OHaqUfQ6zU_8gD8SU',
            apikey: '0HY9qKyvwty1hSzcTydn0AHAXPb0e2QzYQlMuQowS8U'
          };
          se.gf.RequestApi('GET', url, headers, null, 'searchregion', 'getItems').then((data) => {
                  se.zone.run(() => {
                    let lstitems = JSON.parse(data);
                    console.log(lstitems);
                    if(lstitems.data.experiences.length && lstitems.data.experiences.length >0 || lstitems.data.regions.length && lstitems.data.regions.length >0){
                      se.ischecktext=false;
                      se.ischecklist = true;
                      se.itemTicket = lstitems.data.experiences;
                      se.itemRegion = lstitems.data.regions;
                    }else{
                      // se.items.forEach(element => {
                      //   element.show = false;
                      // });
                      // se.ischecktext=true;
                    }
                  });
          })
         }
        else {
          se.ischecklist = false;
          se.ischecktext=false;
          // se.items.forEach(element => {
          //     element.show = false;
          // });
        }
      }

    loadRegion() {
        let se = this;
        let url = C.urls.baseUrl.urlTicket+'/api/Home/GetAllRegions';
        let headers = {
            apisecret: '2Vg_RTAccmT1mb1NaiirtyY2Y3OHaqUfQ6zU_8gD8SU',
            apikey: '0HY9qKyvwty1hSzcTydn0AHAXPb0e2QzYQlMuQowS8U'
        };
        se.gf.RequestApi('GET', url, headers, null, 'ticketsearch', 'GetAllRegions').then((data) => {
            let res = JSON.parse(data);
            se.listRegionSearch = res.data;
            console.log(res.data);
        })
    }
  
  ngOnInit() {
    
  }

  goback() {
    this.navCtrl.back();
  }

  clickItemRegion(item){
    this.ticketService.publicSearchTicketRegion(item);
    this.gf.createListLastSearchTicketRegion(item);
    this.navCtrl.back();
  }
  clearText(){
    this.inputText="";
  }
  itemclick(item,stt) {
    item.stt=stt;
    this.ticketService.input = item;
    this.ticketService.itemSearchTicket.emit(1);
    this.navCtrl.pop();
  }
}