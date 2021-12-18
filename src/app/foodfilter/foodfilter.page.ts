import { Component, OnInit, NgZone } from '@angular/core';
import * as $ from 'jquery';
import { ModalController } from '@ionic/angular';
import { GlobalFunction } from '../providers/globalfunction';
import { foodService } from '../providers/foodService';

@Component({
  selector: 'app-foodfilter',
  templateUrl: './foodfilter.page.html',
  styleUrls: ['./foodfilter.page.scss'],
})
export class FoodfilterPage implements OnInit {
  itemViBacClick = false;
  itemViTrungClick = false;
  itemViNamClick = false;
  itemViBaMienClick = false;
  itemThanhDamClick = false;
  itemDamDaClick = false;
  item199Click = false;
  item299Click = false;
  item399Click = false;
  datafilter: any;
  foodbeforefilter: any;
  foods: any[];
  countFilter: number;
  constructor(private modalCtrl: ModalController, public gf: GlobalFunction, public foodService: foodService,
    private zone: NgZone) { }

  ngOnInit() {
    setTimeout(()=>{
      $(".homefood-header").removeClass("cls-visible").addClass("cls-disabled");
      if(document.getElementsByClassName("homefood-footer")[1]){
        document.getElementsByClassName("homefood-footer")[0]['style'].display ='none';
        document.getElementsByClassName("homefood-footer")[1]['style'].display ='none';
      }
    },200)
    //this.foodService.listItemsFood = this.foodbeforefilter;
    this.foods = this.foodService.listItemsFood;
    this.foodbeforefilter = [...this.foods];
    this.itemViBacClick = this.foodService.objectFilter.itemViBacClick;
    this.itemViTrungClick = this.foodService.objectFilter.itemViTrungClick;
    this.itemViNamClick = this.foodService.objectFilter.itemViNamClick;
    this.itemViBaMienClick = this.foodService.objectFilter.itemViBaMienClick;
    this.itemThanhDamClick = this.foodService.objectFilter.itemThanhDamClick;
    this.itemDamDaClick = this.foodService.objectFilter.itemDamDaClick;
    this.item199Click = this.foodService.objectFilter.item199Click;
    this.item299Click = this.foodService.objectFilter.item299Click;
    this.item399Click = this.foodService.objectFilter.item399Click;
    this.itemFilterClickNotChangeValue(1);
    this.itemFilterClickNotChangeValue(2);
    this.itemFilterClickNotChangeValue(3);
    this.itemFilterClickNotChangeValue(4);
    this.itemFilterClickNotChangeValue(5);
    this.itemFilterClickNotChangeValue(6);
    this.itemFilterClickNotChangeValue(7);
    this.itemFilterClickNotChangeValue(8);
    this.itemFilterClickNotChangeValue(9);
  }

  closeModal(){
    this.clearAll();
    this.modalCtrl.dismiss();
  }

  clearFilter(){
    this.clearAll();
  }

  clearAll(){
    this.foodService.listFoodsFilter = [];
    $(".selected").removeClass("selected");
    this.zone.run(()=>{
      this.countFilter = this.foodbeforefilter.length;
    })
    this.itemViBacClick = false;
    this.itemViTrungClick = false;
    this.itemViNamClick = false;
    this.itemViBaMienClick = false;
    this.itemThanhDamClick = false;
    this.itemDamDaClick = false;
    this.item199Click = false;
    this.item299Click = false;
    this.item399Click = false;
  }

  filter(){
    var se =this;
    se.foodService.objectFilter = {}
    se.foodService.objectFilter= {
      itemViBacClick: se.itemViBacClick,
      itemViTrungClick: se.itemViTrungClick,
      itemViNamClick: se.itemViNamClick,
      itemViBaMienClick: se.itemViBaMienClick,
      itemThanhDamClick: se.itemThanhDamClick,
      itemDamDaClick: se.itemDamDaClick,
      item199Click: se.item199Click,
      item299Click: se.item299Click,
      item399Click: se.item399Click
    };

    se.modalCtrl.dismiss();
  }

  itemFilterClick(idx){
    var se = this;
    if(idx ==1){
      se.itemViBacClick = !se.itemViBacClick;
      
      if(se.itemViBacClick){
        $(".labelvibac").removeClass("selected").addClass('selected');
        $(".labelvitrung").removeClass("selected");
        $(".labelvinam").removeClass("selected");
        if(se.itemViTrungClick){
          se.itemViTrungClick = !se.itemViTrungClick;
        }
        if(se.itemViNamClick){
          se.itemViNamClick = !se.itemViNamClick;
        }
      }else{
        $(".labelvibac").removeClass("selected");
      }
     
    }
    if(idx == 2){
      se.itemViTrungClick = !se.itemViTrungClick;
      if(se.itemViTrungClick){
        $(".labelvitrung").removeClass("selected").addClass('selected');
        $(".labelvibac").removeClass("selected");
        $(".labelvinam").removeClass("selected");
        if(se.itemViBacClick){
          se.itemViBacClick = !se.itemViBacClick;
        }
        if(se.itemViNamClick){
          se.itemViNamClick = !se.itemViNamClick;
        }
      }else{
        $(".labelvitrung").removeClass("selected");
      }
    }
    if(idx == 3){
      se.itemViNamClick = !se.itemViNamClick;
      if(se.itemViNamClick){
        $(".labelvinam").removeClass("selected").addClass('selected');
        $(".labelvitrung").removeClass("selected");
        $(".labelvibac").removeClass("selected");
        if(se.itemViTrungClick){
          se.itemViTrungClick = !se.itemViTrungClick;
        }
        if(se.itemViBacClick){
          se.itemViBacClick = !se.itemViBacClick;
        }
      }else{
        $(".labelvinam").removeClass("selected");
      }
    }
    // if(idx == 4){
    //   se.itemViBaMienClick = !se.itemViBaMienClick;
    //   if(se.itemViBaMienClick){
    //     $(".labelvi3mien").removeClass("selected").addClass('selected');
    //   }else{
    //     $(".labelvi3mien").removeClass("selected");
    //   }
    // }
    if(idx == 5){
      se.itemThanhDamClick = !se.itemThanhDamClick;
      if(se.itemThanhDamClick){
        $(".labelthanhdam").removeClass("selected").addClass('selected');
        $(".labeldamda").removeClass("selected");
        if(se.itemDamDaClick){
          se.itemDamDaClick = !se.itemDamDaClick;
        }
      }else{
        $(".labelthanhdam").removeClass("selected");
      }
    }
    if(idx == 6){
      se.itemDamDaClick = !se.itemDamDaClick;
      if(se.itemDamDaClick){
        $(".labeldamda").removeClass("selected").addClass('selected');
        $(".labelthanhdam").removeClass("selected");
        if(se.itemThanhDamClick){
          se.itemThanhDamClick = !se.itemThanhDamClick;
        }
      }else{
        $(".labeldamda").removeClass("selected");
      }
    }
    if(idx == 7){
      se.item199Click = !se.item199Click;
      if(se.item199Click){
        $(".label199").removeClass("selected").addClass('selected');
      }else{
        $(".label199").removeClass("selected");
      }

      if(se.item299Click){
        se.item299Click = !se.item299Click;
        $(".label299").removeClass("selected");
      }
      if(se.item399Click){
        se.item399Click = !se.item399Click;
        $(".label399").removeClass("selected");
      }
    }
    if(idx == 8){
      se.item299Click = !se.item299Click;
      if(se.item299Click){
        $(".label299").removeClass("selected").addClass('selected');
      }else{
        $(".label299").removeClass("selected");
      }

      if(se.item199Click){
        se.item199Click = !se.item199Click;
        $(".label199").removeClass("selected");
      }
      if(se.item399Click){
        se.item399Click = !se.item399Click;
        $(".label399").removeClass("selected");
      }
    }
    if(idx == 9){
      se.item399Click = !se.item399Click;
      if(se.item399Click){
        $(".label399").removeClass("selected").addClass('selected');
      }else{
        $(".label399").removeClass("selected");
      }

      if(se.item199Click){
        se.item199Click = !se.item199Click;
        $(".label199").removeClass("selected");
      }
      if(se.item299Click){
        se.item299Click = !se.item299Click;
        $(".label299").removeClass("selected");
      }
    }

    se.filterItem();
  }

  itemFilterClickNotChangeValue(idx){
    var se = this;
    if(idx ==1){
      if(se.itemViBacClick){
        $(".labelvibac").removeClass("selected").addClass('selected');
      }else{
        $(".labelvibac").removeClass("selected");
      }
    }
    if(idx == 2){
      if(se.itemViTrungClick){
        $(".labelvitrung").removeClass("selected").addClass('selected');
      }else{
        $(".labelvitrung").removeClass("selected");
      }
    }
    if(idx == 3){
      if(se.itemViNamClick){
        $(".labelvinam").removeClass("selected").addClass('selected');
      }else{
        $(".labelvinam").removeClass("selected");
      }
    }
    if(idx == 4){
      if(se.itemViBaMienClick){
        $(".labelvi3mien").removeClass("selected").addClass('selected');
      }else{
        $(".labelvi3mien").removeClass("selected");
      }
    }
    if(idx == 5){
      if(se.itemThanhDamClick){
        $(".labelthanhdam").removeClass("selected").addClass('selected');
      }else{
        $(".labelthanhdam").removeClass("selected");
      }
    }
    if(idx == 6){
      if(se.itemDamDaClick){
        $(".labeldamda").removeClass("selected").addClass('selected');
      }else{
        $(".labeldamda").removeClass("selected");
      }
    }
    if(idx == 7){
      if(se.item199Click){
        $(".label199").removeClass("selected").addClass('selected');
      }else{
        $(".label199").removeClass("selected");
      }
    }
    if(idx == 8){
      if(se.item299Click){
        $(".label299").removeClass("selected").addClass('selected');
      }else{
        $(".label299").removeClass("selected");
      }
    }
    if(idx == 9){
      if(se.item399Click){
        $(".label399").removeClass("selected").addClass('selected');
      }else{
        $(".label399").removeClass("selected");
      }
    }

    se.filterItem();
  }

  filterItem(){
    var se = this;
    se.datafilter = se.foodbeforefilter;
    var listfilter = [];
    if(se.itemViBacClick){
      se.datafilter = se.getItemFilter(1);
      if(se.datafilter && se.datafilter.length>0){
        listfilter = [...se.datafilter];
      }
      
    }
    if(se.itemViTrungClick){
      se.datafilter = se.getItemFilter(2);
      if(se.datafilter && se.datafilter.length>0){
        if(listfilter.length>0){
          listfilter = [...listfilter,...se.datafilter];
        }else{
          listfilter = [...se.datafilter];
        }
        
      }
    }
    if(se.itemViNamClick){
      se.datafilter = se.getItemFilter(3);
      if(se.datafilter && se.datafilter.length>0){
        if(listfilter.length>0){
          listfilter = [...listfilter,...se.datafilter];
        }else{
          listfilter = [...se.datafilter];
        }
      }
    }
    if(se.itemViBaMienClick){
      se.datafilter = se.getItemFilter(4);
      if(se.datafilter && se.datafilter.length>0){
        if(listfilter.length>0){
          listfilter = [...listfilter,...se.datafilter];
        }else{
          listfilter = [...se.datafilter];
        }
      }
    }
    var listthanhdam =[],
        listdamda=[],
        listfiltercategory = [...listfilter];
    if(se.itemThanhDamClick){
      listthanhdam = se.getItemFilter(5,listfiltercategory);
      if(listthanhdam && listthanhdam.length>0){
        listfilter = [...listthanhdam];
      }
    }
    if(se.itemDamDaClick){
      listdamda = se.getItemFilter(6,listfiltercategory);
      if(listdamda && listdamda.length>0){
        if(listthanhdam.length >0){
          listfilter = [...listthanhdam,...listdamda];
        }else{
          listfilter = [...listdamda];
        }
      }
    }
    var listfilterprice =[], 
    listfiltertypeprice =[...listfilter],
    list199 =[],
    list299=[],
    list399=[];
    if(se.item199Click){
      se.datafilter = se.getItemFilter(7,listfiltertypeprice);
      if(se.datafilter && se.datafilter.length>0){
        if(se.datafilter && se.datafilter.length>0){
          listfilter = [...se.datafilter];
          list199 = [...se.datafilter];
        }
      }
    }
    if(se.item299Click){
      se.datafilter = se.getItemFilter(8,listfiltertypeprice);
      if(se.datafilter && se.datafilter.length>0){
        list299 = [...se.datafilter];
        if(list199.length>0){
          listfilter = [...list199,...se.datafilter];
         
        }else{
          listfilter = [...se.datafilter];
        }
      }
    }
    if(se.item399Click){
      se.datafilter = se.getItemFilter(9,listfiltertypeprice);
      if(se.datafilter && se.datafilter.length>0){
        if(list199.length > 0){
          if(list299.length>0){
            listfilter = [...list199,...list299,...se.datafilter];
           
          }else{
            listfilter = [...list199,...se.datafilter];
          }
        }else{
          if(list299.length>0){
            listfilter = [...list299,...se.datafilter];
           
          }else{
            listfilter = [...se.datafilter];
          }
        }
        
      }
    }

    
    if(listfilter && listfilter.length >0){
      //se.foods = listfilter;
      se.foodService.listFoodsFilter = listfilter;
      se.countFilter = listfilter.length;
    }else{
      se.foodService.listFoodsFilter = se.foodbeforefilter;
      se.countFilter = se.foodbeforefilter.length;
    }
   
  }

  getItemFilter(idx, listfilter?){
    var se = this;
    var listresult:any = [];
    var catid = -1;
    var groupid = -1;
    var typepriceid =-1;
    var list = [];
    if(idx == 1){
      catid = 1;
    }
    else if(idx == 2){
      catid = 2;
    }
    else if(idx == 3){
      catid = 3;
    }
    else if(idx == 4){
      catid = 0;
    }
    else if(idx == 5){
      groupid = 0;
    }
    else if(idx == 6){
      groupid = 1;
    }
    else if(idx == 7){
      typepriceid = 1;
    }
    else if(idx == 8){
      typepriceid = 2;
    }
    else if(idx == 9){
      typepriceid = 3;
    }

    if(idx <=4){
      list = se.foodbeforefilter.filter((el)=>{ return el.categoryTypeId == catid});
    }else if(idx == 5 || idx == 6){
      if(listfilter && listfilter.length>0){
        list = listfilter.filter((el)=>{ return el.groupId == groupid});
      }else{
        list = se.foodbeforefilter.filter((el)=>{ return el.groupId == groupid});
      }
      
    }else{
      if(listfilter && listfilter.length>0){
        list = listfilter.filter((el)=>{return el.typePriceId == typepriceid});
      }else{
        list = se.foodbeforefilter.filter((el)=>{return el.typePriceId == typepriceid});
      }
    }
        
        if(list && list.length>0 ){
          if(listresult.length ==0){
            listresult.push(...list);
          }else {
            list.forEach(element => {
              if(!se.gf.checkExistsItemInArray(listresult, element, 'searchexperience')){
                listresult.push(element);
              }
            });
            
          }
          
        }
    return listresult;
  }
}
