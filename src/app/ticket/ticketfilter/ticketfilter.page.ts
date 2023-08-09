import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { C } from '../../providers/constants';
import { GlobalFunction } from 'src/app/providers/globalfunction';
import { ticketService } from 'src/app/providers/ticketService';
import { element } from 'protractor';
@Component({
  selector: 'app-ticketfilter',
  templateUrl: './ticketfilter.page.html',
  styleUrls: ['./ticketfilter.page.scss'],
})
export class TicketfilterPage implements OnInit {
  arrFilter: any;
  arrResult: any;
  constructor(private modalCtrl: ModalController, private gf: GlobalFunction, private ticketService: ticketService) { }

  ngOnInit() {
    if (this.ticketService.isFilter) {
      this.arrFilter = this.ticketService.ticketFilter;
      if (this.ticketService.itemShowList) {
        for (let i = 0; i < this.arrFilter.regions.length; i++) {
          const element = this.arrFilter.regions[i];
          var idx =  element.childs.findIndex((el) => { return el.id == this.ticketService.itemShowList.id });
          if (idx != - 1) {
            element.childs[idx].checked = true;
          }
 
        }
      }
      if (this.ticketService.itemTicketTopic) {
        var idx =  this.arrFilter.topics.findIndex((el) => { return el.id == this.ticketService.itemTicketTopic.topicId });
        this.arrFilter.topics[idx].checked = true;
    
      }
    } else {
      this.getdata()
    }

  }
  getdata() {
    let url = C.urls.baseUrl.urlTicket + '/api/Category/GetInitsearchModel';
    this.gf.RequestApi('GET', url, null, null, 'ticketfilter', 'GetInitsearchModel').then((data) => {
      let res = JSON.parse(data);
      this.arrFilter = res.data;
      this.arrFilter.regions = this.arrFilter.regions.map((item) => {
        return { ...item, show: false }
      });
      
      if (this.ticketService.itemShowList) {
        for (let i = 0; i < this.arrFilter.regions.length; i++) {
          const element = this.arrFilter.regions[i];
          var idx =  element.childs.findIndex((el) => { return el.id == this.ticketService.itemShowList.id });
          if (idx != - 1) {
            element.childs[idx].checked = true;
          }
        }
      }
      this.arrFilter.topics = this.arrFilter.topics.map((item) => {
        return { ...item, checked: false }
      });
      if (this.ticketService.itemTicketTopic) {
        var idx =  this.arrFilter.topics.findIndex((el) => { return el.id == this.ticketService.itemTicketTopic.topicId });
        this.arrFilter.topics[idx].checked = true;
      }
     
    })
  }
  close() {
    this.modalCtrl.dismiss({ hasfilter: false });
  }
  getItems(ev: any) {
    this.ticketService.inputText = ev.detail.value;
    if (!this.ticketService.inputText) {
      this.ticketService.searchType = 1;
      this.getdata();
    }
  }
  search() {
    if (this.ticketService.inputText) {
      this.ticketService.searchType = 1;
      this.gf.SearchKeyword().then(() => {
      })
    }

  }
  checkEvent(ev: any, item,stt) {
    item.checked = ev.detail.checked;
    if(stt == 0){
      if (item.checked) {
        item.childs = item.childs.map((itemC) => {
          return { ...itemC, checked: true }
        });
      }
      else{
          if (this.ticketService.itemShowList && item.childs[0].id == this.ticketService.itemShowList.id) {
            this.ticketService.itemShowList = "";
            this.getdata();
            this.ticketService.searchType = 1;
          }
          item.childs = item.childs.map((itemC) => {
            return { ...itemC, checked: false }
          });
      }
    }
    if (this.ticketService.itemTicketTopic && item.code == this.ticketService.itemTicketTopic.topicCode) {
      this.ticketService.itemTicketTopic = "";
      this.getdata();
      this.ticketService.searchType = 1;
    }
    if (this.ticketService.itemShowList && item.id == this.ticketService.itemShowList.id) {
      this.ticketService.itemShowList = "";
      this.getdata();
      this.ticketService.searchType = 1;
    }
  }
  showmore(item) {
    item.show = !item.show;
  }
  filter(){
    if (this.arrFilter && !(this.ticketService.searchType == 2 || this.ticketService.searchType == 3 || this.ticketService.inputText)) {
      this.ticketService.ticketFilter = this.arrFilter;
      this.ticketService.countFilter = 0;
      this.ticketService.regionFilters = []
      for (let i = 0; i < this.arrFilter.regions.length; i++) {
        const element = this.arrFilter.regions[i];
        element.childs.forEach(item => {
          if (item.checked) {
            this.ticketService.regionFilters.push(item.id);
            this.ticketService.countFilter++;
          }
        });
      // }
    }

    this.ticketService.typeFilters = [];
    for (let i = 0; i < this.arrFilter.types.length; i++) {

      if (this.arrFilter.types[i].checked) {
        this.ticketService.typeFilters.push(this.arrFilter.types[i].id);
        this.ticketService.countFilter++;
      }
    }
    this.ticketService.topicfilters = [];
    for (let i = 0; i < this.arrFilter.topics.length; i++) {

      if (this.arrFilter.topics[i].checked) {
        this.ticketService.topicfilters.push(this.arrFilter.topics[i].id);
        this.ticketService.countFilter++;
      }
    }
    this.ticketService.itemShowList = "";
    this.ticketService.itemTicketTopic = "";
    }else{
      this.ticketService.countFilter = 0;
      this.ticketService.regionFilters = []
      if (!this.ticketService.itemShowList) {
        for (let i = 0; i < this.ticketService.regionModels.length; i++) {
          const element = this.ticketService.regionModels[i];
          element.childs.forEach(item => {
            if (item.checked) {
              this.ticketService.regionFilters.push(item.id);
              this.ticketService.countFilter++;
            }
          });
        // }
      }
      }
      // let arrRegions = this.arrFilter.regions.filter(item => item.checked);
      // if (arrRegions && arrRegions.length > 0) {
      
  
      this.ticketService.typeFilters = [];
      for (let i = 0; i < this.ticketService.typeModels.length; i++) {
  
        if (this.ticketService.typeModels[i].checked) {
          this.ticketService.typeFilters.push(this.ticketService.typeModels[i].id);
          this.ticketService.countFilter++;
        }
      }
      this.ticketService.topicfilters = [];
      if (!this.ticketService.itemTicketTopic) {
        for (let i = 0; i < this.ticketService.topicModels.length; i++) {
  
          if (this.ticketService.topicModels[i].checked) {
            this.ticketService.topicfilters.push(this.ticketService.topicModels[i].id);
            this.ticketService.countFilter++;
          }
        }
      }
    
     
    }
   
    this.ticketService.isFilter = true;
    this.gf.SearchKeyword().then((data) => {
      if (data) {
        this.modalCtrl.dismiss({ hasfilter: true });
      }
    })
  }
  clearFilter()
  {
    this.ticketService.itemShowList = "";
    this.ticketService.itemTicketTopic = "";
    this.ticketService.inputText = "";
    this.ticketService.searchType = 1;
    this.getdata();
  }
}
