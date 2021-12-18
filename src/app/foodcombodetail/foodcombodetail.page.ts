import { foodInfo, ValueGlobal, SearchHotel } from './../providers/book-service';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { IonContent, IonSlides, NavController, ModalController, ToastController, LoadingController, IonItemSliding } from '@ionic/angular';
import { foodService } from '../providers/foodService';
import { C } from './../providers/constants';
import { GlobalFunction } from '../providers/globalfunction';
import * as moment from 'moment';
import {FoodorderPage} from '../foodorder/foodorder.page';
import { OverlayEventDetail } from '@ionic/core';
import * as $ from 'jquery';
import { Storage } from '@ionic/storage';
import { FoodplaceotherPage } from './../foodplaceother/foodplaceother.page';
import {HotelreviewsimagePage} from './../hotelreviewsimage/hotelreviewsimage';

@Component({
  selector: 'app-foodcombodetail',
  templateUrl: './foodcombodetail.page.html',
  styleUrls: ['./foodcombodetail.page.scss'],
})
export class FoodcombodetailPage implements OnInit {
  itemsSk =[1,2,3];
  lengthslide =24;
  loaddatadone = false;
  slideOpts = {
    zoom: false
  };
  @ViewChild('scrollFoodDetail') content: IonContent;
  @ViewChild('mySlider') slider: IonSlides;
  slideData =[];
  menus =[];
  menurelates= [];
  District=[];
  reviews= [];
  arrimgreview= [];
  chef:any = 
    {
    id: 1, name: "AD Pham",office: "Nhà hàng Spice Việt", 
    experience: "Với bề dày kinh nghiệm trong nghiên cứu ẩm thực, cô đã cho ra đời rất nhiều công trình sách nổi tiếng khác nhau. Ngoài ra, cô còn có những đóng góp tích cực cho Viện ẩm thực Việt Nam, về mô hình cho Bếp Việt",
    description: "Với công thức dinh dưỡng đạt tiêu chuẩn, nguyên liệu cao cấp, đầu bếp chuẩn nhà hàng",
    description1: "iVIVU thực dưỡng sẽ đem lại cho bạn một chế độ ăn uống phù hợp, đảm bảo dinh dưỡng, thân hình cân đối và dịch vụ khách hàng tốt nhất.<br> Hãy nhanh chóng chọn cho mình lối sống thông minh, lành mạnh nhất bạn nhé!",
    };
  
  coutslide: number=1;
  foodimg: any;
  comboitem: any;
  combodetail: any;
  numHotelReviews = 234;
  AvgPoint="9.2";
  description: any;
  countcart: any=0;
  textmenu: string;
  textmon: string;
  texttue: string;
  textwed: string;
  textthu: string;
  textfri: string;
  arrdescription: any;
  hascachecart: boolean;
  countimgrv: number;
  priceChangeDisplay: any;
  menusoff: any=[];
  priceDisplay: any;
  menuCollectionRecommend: any;

  constructor(private navCtrl: NavController, 
    private zone: NgZone,
    public _foodService: foodService,
    public gf: GlobalFunction,
    private modalCtrl: ModalController,public foodInfo:foodInfo,
    private toastCtrl: ToastController,
    private storage: Storage,
    public valueGlobal: ValueGlobal,
    private loadingCtrl: LoadingController,
    public searchhotel: SearchHotel) { 
      this.District=this._foodService.district;
    }

  ngOnInit() {
    
    this._foodService.itemRelateClick.pipe().subscribe(data => {
      if(data){
        this.ionViewWillEnter();
        this.presentLoading();
        this.content.scrollToTop(500);
      }
    })
    
    this._foodService.itemCartChange.pipe().subscribe(data => {
      this.zone.run(()=>{
        this.countcart =data;
      })
    })
  }

  async presentLoading() {
    var loader = await this.loadingCtrl.create({
      duration:400
    });
    loader.present();
  }

  ionViewWillEnter(){
    setTimeout(()=>{
      $(".homefood-header").removeClass("cls-visible").addClass("cls-disabled");
      if(document.getElementsByClassName("homefood-footer")[1]){
        document.getElementsByClassName("homefood-footer")[0]['style'].display ='none';
        document.getElementsByClassName("homefood-footer")[1]['style'].display ='none';
      }
    },200)
    setTimeout(()=>{
      
      this.zone.run(()=>{
        this.lengthslide = 1;
        if(this._foodService.itemFoodDetail){
          this.comboitem = this._foodService.itemFoodDetail;
          if (this.comboitem.avgPoint=='10.0') {
            this.comboitem.avgPoint=10;
          }
          if(this.comboitem.image && this.comboitem.image.indexOf("640x480") == -1){
              let urlimage = this.comboitem.image.substring(0, this.comboitem.image.length - 4);
              let tail = this.comboitem.image.substring(this.comboitem.image.length - 4, this.comboitem.image.length);
              this.comboitem.image = urlimage.replace(/\ /g,'%20') + "-640x480" + tail;
          }
          this.slideData =[];
          this.slideData.push(this.comboitem);
          this.loadComboDetail(this.comboitem);
          // if(this.slider){
          //   this.slider.slideTo(this._foodService.itemFoodDetail.id);
          // }
          
        }
       
      })
    },350)

    this.storage.get("listItemsCart").then((data)=>{
      if(data&& data.length >0){
        this.zone.run(()=>{
          this.countcart = data.length;
          this._foodService.countcart = data.length;
          this.hascachecart = true;
        })
      }else{
        this.countcart = this._foodService.countcart;
      }
    })

    setInterval(()=>{
      this.zone.run(()=>{
        this.countcart = this._foodService.countcart;
      })
    },300)
  }

  loadComboDetail(item){
    var se = this;
    //let url = "https://beta-food.ivivu.com/api/FODetail/GetDetailByCategoryId?id=1&date=2020-03-24";
    let newdate = moment(item.startDate).add(-7, 'days').format('YYYY-MM-DD');
    let url = C.urls.baseUrl.urlFood +"/api/FODetail/GetDetailByCategoryId?id="+item.id+"&date="+newdate;
     se.gf.RequestApi("GET", url, {}, {}, "HomeFood", "LoadCategoryHome").then((data)=>{
      se.loaddatadone = true;
       if(data && data.id){
        se.combodetail = data;
        se.priceDisplay = this.gf.convertNumberToString(data.focategory.price);
        if(se.combodetail.focomboPeriod.isChangePrice){
         se.priceChangeDisplay = this.gf.convertNumberToString(se.combodetail.focomboPeriod.price);
         }
         se.AvgPoint = data.focategory.avgPoint.toFixed(1);
         if (se.AvgPoint =='10.0') {
           se.AvgPoint ='10'
         }
        //menu liên quan
        se.getMenuRelate(data, item);
        //review
        se.getMenuReview(data);
        //Món thêm
        se.foodInfo.extraOther=data.extraOther;
        se.foodInfo.extraWater=data.extraWater;
        se.chef = data.forestaurantChef;
        se.chef.categoryTypeId = data.focategory.categoryTypeId;
        if(se.chef.name.indexOf('<br/>') != -1){
         let idx = se.chef.name.indexOf('<br/>');
         se.chef.name = se.chef.name.substring(0, idx);
       }
 
        se.combodetail.startDate = item.startDate;
        se.combodetail.endDate = item.endDate;
        se.combodetail.isFromFoodbill = item.isFromFoodbill;
        
        se.textmenu = moment(item.startDate).format("DD.MM") + " → " + moment(item.endDate).format("DD.MM");
        se.combodetail.weekdisplay = moment(item.startDate).format("DD.MM") + " → " + moment(item.endDate).format("DD.MM");
        se.textmon = moment(item.startDate).format("DD.MM");
        se.texttue = moment(moment(item.startDate).add('days',1)).format("DD.MM");
        se.textwed = moment(moment(item.startDate).add('days',2)).format("DD.MM");
        se.textthu = moment(moment(item.startDate).add('days',3)).format("DD.MM");
        se.textfri = moment(moment(item.startDate).add('days',4)).format("DD.MM");
 
        if(se.combodetail.description){
        
         se.arrdescription = JSON.parse(se.combodetail.description);
          if(se.arrdescription && se.arrdescription.length >0){
           se.arrdescription[0].content = se.arrdescription[0].content.replace(/\r\n/g, "");
          }
        }
        se.menus = [];
        se.menusoff=[];
        if(se.combodetail.menuId2){
          if(item.currentWeek && se.checkItemMenuEnable(item, se.combodetail.menuId2, 2)){
             se.combodetail.menuId2.remove = true;
             se.menusoff.push({id: 1});
          }
 
          if(se.combodetail.menuId2.restaurentName && se.combodetail.menuId2.restaurentName.indexOf('<br/>')){
           se.combodetail.menuId2.restaurentName = se.combodetail.menuId2.restaurentName.replace('<br/>', ' ');
          }
         se.menus.push(se.combodetail.menuId2);
 
         if(se.combodetail.menuId2.isRecommend ){
           se.menuCollectionRecommend = se.combodetail.menuId2;
         }
        }else{
          se.menus.push({id: 1, name: "Nghỉ", isdayoff: true, forecipe :[]});
          se.menusoff.push({id: 1});
        }
        if(se.combodetail.menuId3){
         if(item.currentWeek && se.checkItemMenuEnable(item, se.combodetail.menuId3, 3)){
           se.combodetail.menuId3.remove = true;
           se.menusoff.push({id: 2});
        }
 
        if(se.combodetail.menuId3.restaurentName && se.combodetail.menuId3.restaurentName.indexOf('<br/>')){
         se.combodetail.menuId3.restaurentName = se.combodetail.menuId3.restaurentName.replace('<br/>', ' ');
        }
         se.menus.push(se.combodetail.menuId3);
 
         if(se.combodetail.menuId3.isRecommend ){
           se.menuCollectionRecommend = se.combodetail.menuId3;
         }
        }
        else{
         se.menus.push({id: 2, name: "Nghỉ", isdayoff: true, forecipe :[]});
         se.menusoff.push({id: 2});
       }
        if(se.combodetail.menuId4){
         if(item.currentWeek && se.checkItemMenuEnable(item, se.combodetail.menuId4, 4)){
           se.combodetail.menuId4.remove = true;
           se.menusoff.push({id: 3});
         }
 
         if(se.combodetail.menuId4.restaurentName && se.combodetail.menuId4.restaurentName.indexOf('<br/>')){
           se.combodetail.menuId4.restaurentName = se.combodetail.menuId4.restaurentName.replace('<br/>', ' ');
          }
         se.menus.push(se.combodetail.menuId4);
 
         if(se.combodetail.menuId4.isRecommend ){
           se.menuCollectionRecommend = se.combodetail.menuId4;
         }
        }
        else{
         se.menus.push({id: 3, name: "Nghỉ", isdayoff: true, forecipe :[]});
         se.menusoff.push({id: 3});
       }
        if(se.combodetail.menuId5){
         if(item.currentWeek && se.checkItemMenuEnable(item, se.combodetail.menuId5, 5)){
           se.combodetail.menuId5.remove = true;
           se.menusoff.push({id: 4});
         }
 
         if(se.combodetail.menuId5.restaurentName && se.combodetail.menuId5.restaurentName.indexOf('<br/>')){
           se.combodetail.menuId5.restaurentName = se.combodetail.menuId5.restaurentName.replace('<br/>', ' ');
          }
         se.menus.push(se.combodetail.menuId5);
 
         if(se.combodetail.menuId5.isRecommend ){
           se.menuCollectionRecommend = se.combodetail.menuId5;
         }
        }
        else{
         se.menus.push({id: 4, name: "Nghỉ", isdayoff: true, forecipe :[]});
         se.menusoff.push({id: 4});
       }
        if(se.combodetail.menuId6){
         if(item.currentWeek && se.checkItemMenuEnable(item, se.combodetail.menuId6, 6)){
           se.combodetail.menuId6.remove = true;
           se.menusoff.push({id: 5});
         }
 
         if(se.combodetail.menuId6.restaurentName && se.combodetail.menuId6.restaurentName.indexOf('<br/>')){
           se.combodetail.menuId6.restaurentName = se.combodetail.menuId6.restaurentName.replace('<br/>', ' ');
          }
         se.menus.push(se.combodetail.menuId6);
 
         if(se.combodetail.menuId6.isRecommend ){
           se.menuCollectionRecommend = se.combodetail.menuId6;
         }
        }
        else{
         se.menus.push({id: 5, name: "Nghỉ", isdayoff: true, forecipe :[]});
         se.menusoff.push({id: 5});
       }
        se.menus.forEach(mn => {
          se.orderMenu(mn);
        });
 
        if(se.combodetail.focategory){
          se.comboitem = se.combodetail.focategory;
          if(se.comboitem.avgPoint >0 && se.comboitem.avgPoint <10){
             se.comboitem.avgPoint = se.comboitem.avgPoint.toFixed(1);
           }else if(se.comboitem.avgPoint ==10){
             se.comboitem.avgPoint = se.comboitem.avgPoint;
 
           }
        }
       }
      
       
       
     })
  }

  getMenuReview(item){
    var se = this;
    //let id= 17;
    se.reviews = [];
    let urlreview = C.urls.baseUrl.urlFood + "/api/FOReview/GetReviewByCategoryId?categoryId="+ item.categoryId;
    //item.categoryId;
       se.gf.RequestApi("GET", urlreview, {}, {}, "FoodDetail", "LoadCategoryHome").then((data)=>{
         if(data.data && data.data.length >0){
           se.numHotelReviews = data.data.length;
           //se.AvgPoint = (data.data.reduce( (item) => item.reviewPoint ))/data.data.length;
           //se.arrimgreview = data.image;
           if(data.image && data.image.length >0){
            if(data.image.length >3){
              for (let index = 0; index < 3; index++) {
                const element = data.image[index];
                if(element.imageUrl != ""){
                 se.arrimgreview.push(element);
                }
              }
             }else{
              se.arrimgreview = data.image;
              se.countimgrv = data.image.length -3;
             }
             
             se._foodService.listimagereview = data.image ;
           }
           se._foodService.objFoodReview= {};
           se._foodService.objFoodReview.AvgPoint = se.AvgPoint;
           se._foodService.objFoodReview.listFoodReview = data.data;
           se.numHotelReviews = data.data.length;

           data.data.forEach(element => {
             element.reviewDate = moment(element.reviewDate).format("DD-MM-YYYY");
             let point = element.reviewPoint + element.deliveryPoint;
             if(point >0){
              if(point <10){
                element.reviewPointDisplay = (element.reviewPoint + element.deliveryPoint).toFixed(1);
               }else{
                element.reviewPointDisplay = element.reviewPoint + element.deliveryPoint;
               }
              se.reviews.push(element);
             }
             
             
             //console.log(element.reviewPoint);
           });

           if(se.reviews && se.reviews.length>0){
            se.reviews = se.reviews.slice(0,3);
           }
         }else{
           se.numHotelReviews = 0;
         }
       })
  }

  getMenuRelate(item, itemdetail){
    var se = this;
    let urlrelate = C.urls.baseUrl.urlFood + "/api/FODetail/GetRecomentCombo?id="+ item.categoryId +"&date="+ moment(item.startDate).add(-7,'days').format("YYYY-MM-DD");
       se.gf.RequestApi("GET", urlrelate, {}, {}, "HomeFood", "LoadCategoryHome").then((data)=>{
         if(data){
           se.menurelates = data;
           se.menurelates.forEach(element => {
             element.avgPoint= element.avgPoint.toFixed(1);
             if (element.avgPoint==10.0) {
              element.avgPoint=10;
             }
              element.isFromRelate = true;
              element.priceDisplay = se.gf.convertNumberToString(element.price);
              element.startDate = itemdetail.startDate;
              element.endDate = itemdetail.endDate;
              element.currentWeek = itemdetail.currentWeek;
           });
         }
       })
  }

  orderMenu(menu){
    this.zone.run(() => {
      menu.mainmenu = [];
      menu.submenu = [];
      menu.othermenu = [];
      menu.forecipe.forEach(element => {
        element.name = element.nameDetail.replace("<br/>"," ");
        if(element.type == 5){
          menu.mainmenu.push(element);
        }
        if(element.type == 4 || element.type == 7 || element.type ==6){
          menu.submenu.push(element);
        }
        if(element.type == 3 || element.type == 8){
          menu.othermenu.push(element);
        }

        this.zone.run(() => menu.submenu.sort(function (a, b) {
          return a.order - b.order;
          })
        )
      });
      }
    )
  }

  goback(){
    this.valueGlobal.backValue = "foodbill";
    this._foodService.itemCartChange.emit(this._foodService.listItemsCart.length);
    this.navCtrl.navigateBack("/homefood");
  }

  slidechange() {
    this.slider.getActiveIndex().then(index => {
      this.foodimg = this.slideData[index].Image;
      this.coutslide = index + 1;
      this.comboitem = this.slideData[index];
    });
  }

  async addToCart(){
    if(!this.loaddatadone){
      this.presentToastWarning('Đang load dữ liệu. Xin vui lòng đợi trong giây lát!');
      return;
    }
    if(this.menusoff && this.menusoff.length ==5){
      this.presentToastWarning('Đã hết hạn đặt menu tuần này. Xin vui lòng đặt menu cho tuần sau!');
      return;
    }
    this._foodService.isBook = false;
    this._foodService.itemAddToCart = {...this.combodetail};
    const modal: HTMLIonModalElement =
      await this.modalCtrl.create({
        component: FoodorderPage,
        cssClass: 'cls-order',
      });
    modal.present();
    modal.onDidDismiss().then((data: OverlayEventDetail) => {
      this.zone.run(()=>{
        this.countcart = this._foodService.countcart;
      })
    })
  }

  checkBeforeAddToCart(){
    var se = this;
    // if(se._foodService.listAddToCart && se._foodService.listAddToCart.length >0){
    //   if(!se.gf.checkExistsItemInArray(se._foodService.listAddToCart,se.combodetail, 'fooditem')){
    //     se._foodService.listAddToCart.push(se.combodetail);
    //   }else{
    //     let itemInList = se._foodService.listAddToCart.filter((item)=>{ return item.id == se.combodetail.id});
    //     if(itemInList && itemInList.length >0){
    //       itemInList[0].quantity +=1;
    //     }
    //   }
    // }else{
    //   se._foodService.listAddToCart.push(se.combodetail);
    // }
    if(se._foodService.listItemsCart.length ==0){
      se._foodService.listItemsCart.push(se.combodetail);
    }
    // se.storage.get("listItemsCart").then((data) => {
    //   if(data && data.length >0){

    //     se._foodService.listItemsCart.push(se.combodetail);
    //   }
    // })
    
    se._foodService.addNew = true;
  }

  async book(){
    if(!this.loaddatadone){
      this.presentToastWarning('Đang load dữ liệu. Xin vui lòng đợi trong giây lát!');
      return;
    }
    if(this.menusoff && this.menusoff.length ==5){
      this.presentToastWarning('Đã hết hạn đặt menu tuần này. Xin vui lòng đặt menu cho tuần sau!');
      return;
    }
    this._foodService.itemAddToCart = {...this.combodetail};
    this._foodService.isBook = true;
    const modal: HTMLIonModalElement =
      await this.modalCtrl.create({
        component: FoodorderPage,
        cssClass: 'cls-order',
      });
    modal.present();
    modal.onDidDismiss().then((data: OverlayEventDetail) => {
      if(!data.data){
        this.zone.run(()=>{
          this.countcart = this._foodService.countcart;
          if(this.combodetail.isFromFoodbill){
            this._foodService.itemAddToCartFromFoodbill.emit(1);
          }
          this.navCtrl.navigateForward('/foodbill');
        })
      }
      
    })
    
  }

  showCart(){
    // if(this._foodService.listItemsCart.length ==0 && !this.hascachecart){
    //   this.presentToastWarning('Bạn chưa có bữa trưa nào với iVIVU trong giỏ hàng');
    //   return;
    // }
    this._foodService.itemAddToCartFromFoodbill.emit(1);
    this.navCtrl.navigateForward('/foodbill');
  }

  async presentToastWarning(msg) {
    let toast = await this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });

    toast.present();
  }

  scrollFunction(event){
    if(event.detail.scrollTop >= 400){
      $(".food-combo-detail-header").removeClass("cls-disabled").addClass("cls-visible");
    }else{
      $(".food-combo-detail-header").removeClass("cls-visible").addClass("cls-disabled");
    }
  }

  async changeplace() {
    this._foodService.listItemsCartrequest=[];
    this._foodService.listItemsCartrequest.push(this.combodetail);
    this._foodService.listItemsCartrequest.forEach(element => {
      var itemPrice = 0;
      itemPrice += element.focategory.price;
      element.itemPrice = itemPrice;
      element.quantity = 1;
      this._foodService.totalPrice=itemPrice;
    });
    this._foodService.ischeckchangeplace="1";
    const modal: HTMLIonModalElement =
      await this.modalCtrl.create({
        component: FoodplaceotherPage,
      });
    modal.present();
    modal.onDidDismiss().then((data: OverlayEventDetail) => {
      this.navCtrl.back();
    })
  }

  async imgreview(arrimgreview, indeximgreview, CustomerName, DateStayed) {
    this.searchhotel.arrimgreview = arrimgreview;
    this.searchhotel.indexreviewimg = indeximgreview;
    this.searchhotel.cusnamereview = CustomerName;
    this.searchhotel.datereview = DateStayed;
    this.searchhotel.arrimgreview.forEach(element => {
      element.ImageUrl = element.imageUrl;
    });
    const modal: HTMLIonModalElement =
      await this.modalCtrl.create({
        component: HotelreviewsimagePage,
      });
    modal.present();
  }

  seemoreimgrv(){
    this.navCtrl.navigateForward("/cusimgreview");
  }

  seemorereview(){
    this.navCtrl.navigateForward("/hotelreviews/0/food");
  }

  async removeMenu(item, slidingItem: IonItemSliding){
    item.remove = 1;
    this.menusoff.push(item);
    await slidingItem.close();
    $("#"+item.id+" .div-left").addClass('bg-disabled');
    $("#"+item.id+" .div-right").addClass('opt-disabled');
  }

  checkItemMenuEnable(itemcombo, itemmenu, dayofweek){
    let se = this, today = new Date();
    
    let startdate = moment(itemcombo.startDate).add(dayofweek - 2, 'days');
    let difftime = moment(startdate).diff(moment(today),'hours');
    let diffday = moment(startdate).diff(moment(moment(today).format('YYYY-MM-DD')),'days');
    return (diffday == 0 ||  difftime <= 11 ) ? true : false;  
  }
}
