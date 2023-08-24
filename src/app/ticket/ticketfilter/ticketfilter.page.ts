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
  constructor(private modalCtrl: ModalController, public gf: GlobalFunction, public ticketService: ticketService) { }

  ngOnInit() {
    if (this.ticketService.isFilter) {
      this.arrFilter = this.ticketService.ticketFilter;
      if (this.ticketService.itemShowList) {
        for (let i = 0; i < this.arrFilter.regions.length; i++) {
          const element = this.arrFilter.regions[i];
          var idx = element.childs.findIndex((el) => { return el.id == this.ticketService.itemShowList.id });
          if (idx != - 1) {
            element.childs[idx].checked = true;
          }

        }
      }
      if (this.ticketService.itemTicketTopic) {
        var idx = this.arrFilter.topics.findIndex((el) => { return el.id == this.ticketService.itemTicketTopic.topicId });
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
          var idx = element.childs.findIndex((el) => { return el.id == this.ticketService.itemShowList.id });
          if (idx != - 1) {
            element.childs[idx].checked = true;
          }
        }
      }
      this.arrFilter.topics = this.arrFilter.topics.map((item) => {
        return { ...item, checked: false }
      });
      if (this.ticketService.itemTicketTopic) {
        var idx = this.arrFilter.topics.findIndex((el) => { return el.id == this.ticketService.itemTicketTopic.topicId });
        this.arrFilter.topics[idx].checked = true;
      }
      //map quantity
      // if (this.ticketService.searchType == 2 || this.ticketService.searchType == 3 || this.ticketService.inputText) {
      //   this.arrFilter.regions.forEach(element => {
      //     for (let i = 0; i <  element.childs.length; i++) {
      //       const elementC = element.childs[i];
      //       if (elementC.quantity > 0 && ) {

      //       }
      //     }

      //   });
      // }
      this.executeQuantity();
    })
  }
  private executeQuantity() {
    if (true) {
      this.arrFilter.regions.forEach(parent => {
        if (this.ticketService.searchType == 2) {
          const [parentVM] = this.ticketService.regionModels.filter(x => x.id === parent.id);
          if (parentVM && parentVM.childs.length > 0) {
            parent.checked = true;
            parent.childs.forEach(child => {
              child.checked = true;
            });
          }
        } else {
          const [parentVM] = this.ticketService.regionModels.filter(x => x.id === parent.id);
          parent.childs.forEach(child => {
            // if (this.ticketService.regionModels.includes(child.id.toString())) {
            //   child.checked = true;
            // } else {
            //   child.checked = false;
            // }

            if (parentVM) {
              const [childVM] = parentVM.childs.filter(x => x.id === child.id);
              child.quantity = childVM ? childVM.quantity : 0;
            } else {
              child.quantity = 0;
            }
          });
        }
        parent.quantity = parent.childs.reduce((n, {quantity}) => n + quantity, 0);
      });
      // this.arrFilter.types.forEach(_type => {
      //   const [typeVM] = this.ticketService.typeModels.filter(x => x.id === _type.id);
      //   _type.quantity = typeVM ? typeVM.quantity : 0;

      // });
      this.arrFilter.topics.forEach(_type => {
        const [typeVM] = this.ticketService.topicModels.filter(x => x.id === _type.id);
        _type.quantity = typeVM ? typeVM.quantity : 0;

      });
    }

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
      this.ticketService.searchType = 1;
      this.gf.SearchKeyword().then(() => {
        this.executeQuantity();
      })

  }
  checkEvent(ev: any, item, stt) {
    item.checked = ev.detail.checked;
    if (stt == 0) {
      if (item.checked) {
        item.childs = item.childs.map((itemC) => {
          return { ...itemC, checked: true }
        });
      }
      else {
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

    // if (this.ticketService.itemTicketTopic && item.code == this.ticketService.itemTicketTopic.topicCode) {
    //   this.ticketService.itemTicketTopic = "";
    //   this.getdata();
    //   this.ticketService.searchType = 1;
    // }
    // if (this.ticketService.itemShowList && item.id == this.ticketService.itemShowList.id) {
    //   this.ticketService.itemShowList = "";
    //   this.getdata();
    //   this.ticketService.searchType = 1;
    // }
    this.newMethod();
    this.gf.SearchKeyword().then((data) => {
      if (data) {
        this.executeQuantity();
      }
    })

  }
  showmore(item) {
    item.show = !item.show;
  }
  filter() {
    if (this.arrFilter) {

      this.ticketService.ticketFilter = this.arrFilter;
      this.ticketService.countFilter = 0;
      this.newMethod();
      // this.ticketService.itemShowList = "";
      // this.ticketService.itemTicketTopic = "";

    }
    // else{
    //   this.ticketService.countFilter = 0;
    //   this.ticketService.regionFilters = []
    //   if (!this.ticketService.itemShowList) {
    //     for (let i = 0; i < this.ticketService.regionModels.length; i++) {
    //       const element = this.ticketService.regionModels[i];
    //       element.childs.forEach(item => {
    //         if (item.checked) {
    //           this.ticketService.regionFilters.push(item.id);
    //           this.ticketService.countFilter++;
    //         }
    //       });
    //     // }
    //   }
    //   }



    //   this.ticketService.typeFilters = [];
    //   for (let i = 0; i < this.ticketService.typeModels.length; i++) {

    //     if (this.ticketService.typeModels[i].checked) {
    //       this.ticketService.typeFilters.push(this.ticketService.typeModels[i].id);
    //       this.ticketService.countFilter++;
    //     }
    //   }
    //   this.ticketService.topicfilters = [];
    //   if (!this.ticketService.itemTicketTopic) {
    //     for (let i = 0; i < this.ticketService.topicModels.length; i++) {

    //       if (this.ticketService.topicModels[i].checked) {
    //         this.ticketService.topicfilters.push(this.ticketService.topicModels[i].id);
    //         this.ticketService.countFilter++;
    //       }
    //     }
    //   }


    // }

    this.ticketService.isFilter = true;
    this.gf.SearchKeyword().then((data) => {
      if (data) {
        this.modalCtrl.dismiss({ hasfilter: true });
      }
    })
  }
  private newMethod() {
    
    this.ticketService.regionFilters = [];
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
  }

  clearFilter() {
    this.ticketService.itemShowList = "";
    this.ticketService.itemTicketTopic = "";
    this.ticketService.inputText = "";
    this.ticketService.searchType = 1;
    this.getdata();
  }
}
