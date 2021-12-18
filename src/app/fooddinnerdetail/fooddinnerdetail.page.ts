import { foodInfo, ValueGlobal, SearchHotel } from '../providers/book-service';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { IonContent, IonSlides, NavController, ModalController, ToastController, LoadingController, IonItemSliding } from '@ionic/angular';
import { foodService } from '../providers/foodService';
import { C } from '../providers/constants';
import { GlobalFunction } from '../providers/globalfunction';
import * as moment from 'moment';
import {FoodDinnerOrderPage} from '../fooddinnerorder/fooddinnerorder.page';
import { OverlayEventDetail } from '@ionic/core';
import * as $ from 'jquery';
import { Storage } from '@ionic/storage';
import { FoodplaceotherPage } from '../foodplaceother/foodplaceother.page';
import { HotelreviewsimagePage } from '../hotelreviewsimage/hotelreviewsimage';
import * as request from 'requestretry';
import { transition, animate, keyframes} from '@angular/animations';

@Component({
  selector: 'app-fooddinnerdetail',
  templateUrl: './fooddinnerdetail.page.html',
  styleUrls: ['./fooddinnerdetail.page.scss'],
})
export class FoodDinnerDetailPage implements OnInit {
  itemsSk =[1,2,3];
  lengthslide =24;
  loaddatadone = false;
  slideOpts = {
    zoom: false
  };
  @ViewChild('scrollFoodDetail') content: IonContent;
  @ViewChild('mySlider') slider: IonSlides;
  @ViewChild('slideTab') sliderTab: IonSlides;
  
  slideData =[];
  menus =[];
  menurelates= [];
  District=[];
  reviews:any= [];
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
  numHotelReviews = 0;
  AvgPoint=0;
  description: any;
  countcart: any=0;
  textmenu: string;
  textmon: string;
  texttue: string;
  textwed: string;
  textthu: string;
  textfri: string;
  arrdescription: any=[];
  hascachecart: boolean;
  itemd:any;
  priceDisplay: any;
  priceChangeDisplay: any;
  menusoff: any=[];
  menuActive: any=1;
  nodataprice: boolean;
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
    setTimeout(()=>{
      $(".homefood-header").removeClass("cls-visible").addClass("cls-disabled");
      if(document.getElementsByClassName("homefood-footer")[1]){
        document.getElementsByClassName("homefood-footer")[0]['style'].display ='none';
        document.getElementsByClassName("homefood-footer")[1]['style'].display ='none';
      }
    },200)
    this._foodService.itemDinnerRelateClick.pipe().subscribe(data => {
      if(data){
        this.ionViewWillEnter();
        this.presentLoading();
        this.content.scrollToTop(500);
      }
    })
    
    // this._foodService.itemCartChange.pipe().subscribe(data => {
    //   this.zone.run(()=>{
    //     this.countcart =data;
    //   })
    // })
  }

  async presentLoading() {
    var loader = await this.loadingCtrl.create({
      duration:400
    });
    loader.present();
  }

  ionViewWillEnter(){
    setTimeout(()=>{
      
      this.zone.run(()=>{
        this.lengthslide = 1;
        this.menuActive = 1;
        if(this._foodService.itemDinnerDetail){
          this.comboitem = this._foodService.itemDinnerDetail;
          //this.comboitem.avgPoint = Math.round(this.comboitem.avgPoint);
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
    se.nodataprice = false;
    se.loaddatadone = false;
    let newdate = moment(item.startDate).add(-7, 'days').format('YYYY-MM-DD');
    //moment(new Date()).format('YYYY-MM-DD');
    let url = C.urls.baseUrl.urlFood +"/api/FODetail/GetDetailByCategoryIdDinner?id="+item.id+"&date="+newdate;
     se.gf.RequestApi("GET", url, {}, {}, "HomeFood", "LoadCategoryHome").then((data)=>{
       //let data = se.itemd;
       if(data && data.categoryId){
            se.combodetail = data;
            se.loaddatadone = true;
            if(se.combodetail.focomboPeriod.isChangePrice){
              se.priceChangeDisplay = this.gf.convertNumberToString(se.combodetail.focomboPeriod.price);
              }
            se.priceDisplay = se.gf.convertNumberToString(se.combodetail.focategory.price);
            
            if(se.combodetail.image && se.combodetail.image.indexOf("640x480") == -1){
                let urlimage = se.combodetail.image.substring(0, se.combodetail.image.length - 4);
                let tail = se.combodetail.image.substring(se.combodetail.image.length - 4, se.combodetail.image.length);
                se.combodetail.image = urlimage + "-640x480" + tail;
            }
            this.slideData= [];
            this.slideData.push(se.combodetail);
      
            se.AvgPoint = 9.5;
            se.numHotelReviews = 10;
            //se.combodetail = data;
            //se.AvgPoint = data.focategory.avgPoint.toFixed(1);
            //se.numHotelReviews = data.focategory.numOfReview;
            //  if (se.AvgPoint==10.0) {
            //   se.AvgPoint=10;
            //  }
            
            //menu liên quan
            se.getMenuRelate(data, item);
      
            //review
            //se.getMenuReview(data);
            //Món thêm
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
      
            
            se.menus = [];
            se.menusoff=[];
            if(se.combodetail.menuId2){
              if(se.combodetail.menuId2.isRecommend){
                se.combodetail.menuId2.recommend = se.appendRecommend(se.combodetail.menuId2.recommend);
              }
              if(item.currentWeek && se.checkItemMenuEnable(item, se.combodetail.menuId2, 2)){
                se.combodetail.menuId2.remove = true;
                se.menusoff.push({id: 1});
              }
              se.menus.push(se.combodetail.menuId2);
            }else{
              se.menus.push({id: 1, name: "Nghỉ", isdayoff: true, forecipe :[]});
              se.menusoff.push({id: 1});
            }
            if(se.combodetail.menuId3){
              if(se.combodetail.menuId3.isRecommend){
                se.combodetail.menuId3.recommend = se.appendRecommend(se.combodetail.menuId3.recommend);
              }
              if(item.currentWeek && se.checkItemMenuEnable(item, se.combodetail.menuId3, 3)){
                se.combodetail.menuId3.remove = true;
                se.menusoff.push({id: 2});
              }
              se.menus.push(se.combodetail.menuId3);
            }
            else{
              se.menus.push({id: 2, name: "Nghỉ", isdayoff: true, forecipe :[]});
              se.menusoff.push({id: 2});
            }
            if(se.combodetail.menuId4){
              if(se.combodetail.menuId4.isRecommend){
                se.combodetail.menuId4.recommend = se.appendRecommend(se.combodetail.menuId4.recommend);
              }
              if(item.currentWeek && se.checkItemMenuEnable(item, se.combodetail.menuId4, 4)){
                se.combodetail.menuId4.remove = true;
                se.menusoff.push({id: 3});
              }
              se.menus.push(se.combodetail.menuId4);
            }
            else{
              se.menus.push({id: 3, name: "Nghỉ", isdayoff: true, forecipe :[]});
              se.menusoff.push({id: 3});
            }
            if(se.combodetail.menuId5){
              if(se.combodetail.menuId5.isRecommend){
                se.combodetail.menuId5.recommend = se.appendRecommend(se.combodetail.menuId5.recommend);
              }
              if(item.currentWeek && se.checkItemMenuEnable(item, se.combodetail.menuId5, 5)){
                se.combodetail.menuId5.remove = true;
                se.menusoff.push({id: 4});
              }
              se.menus.push(se.combodetail.menuId5);
            }
            else{
              se.menus.push({id: 4, name: "Nghỉ", isdayoff: true, forecipe :[]});
              se.menusoff.push({id: 4});
            }
            if(se.combodetail.menuId6){
              if(se.combodetail.menuId6.isRecommend){
                se.combodetail.menuId6.recommend = se.appendRecommend(se.combodetail.menuId6.recommend);
              }
              if(item.currentWeek && se.checkItemMenuEnable(item, se.combodetail.menuId6, 6)){
                se.combodetail.menuId6.remove = true;
                se.menusoff.push({id: 5});
              }
              se.menus.push(se.combodetail.menuId6);
            }
            else{
              se.menus.push({id: 5, name: "Nghỉ", isdayoff: true, forecipe :[]});
              se.menusoff.push({id: 5});
            }
            if(se.menus && se.menus.length >0){
              se.menus.forEach(mn => {
                se.orderMenu(mn);
              });
            }
      
            se.foodInfo.extraDinner=data.extraWater;
            se.foodInfo.extraOther = data.extraOther;
      
            if(se.combodetail.focategory){
              se.comboitem = se.combodetail.focategory;
              if(se.comboitem.avgPoint >0){
                se.comboitem.avgPoint = se.comboitem.avgPoint.toFixed(1);
                if (se.comboitem.avgPoint==10.0) {
                  se.comboitem.avgPoint=10;
                }
              }
            }
            
            // let desc = "<p>Chúng tôi thấy phụ nữ hiện đại quá bận rộn: 8-12 tiếng cho công việc, 4-6 tiếng cho việc nhà, trong đó đi chợ, nấu cơm đã mất 2-3 tiếng. Thời gian thực sự cho con cái, bản thân và gia đình chỉ vỏn vẹn 1-2 tiếng (bao gồm cả ăn cơm cùng nhau). </p> <p>Chúng tôi hiểu n ỗi lo của chị em về thực phẩm mua vội ngoài chợ không đảm bảo về nguồn gốc, chất lượng còn thực phẩm sạch thì giá lại không rẻ. </p><p>Chúng tôi cũng biết nhiều chị em hàng ngày vẫn đau đầu không biết hôm nay ăn gì, nấu gì, nấu như thế nào? Hoặc bận quá không biết ở nhà chồng con ăn gì, có tự đi chợ, nấu cơm được không? </p>".replace(/\r\n/g, "");
            // se.arrdescription.push({content: desc, title: "Tại sao bạn nên chọn gói này?"});
            if(se.combodetail.description){
              se.arrdescription = JSON.parse(se.combodetail.description);
              if(se.arrdescription && se.arrdescription.length >0){
                se.arrdescription[0].content = se.arrdescription[0].content.replace(/\r\n/g, "");
              }
            }
          
          }else{
            se.loaddatadone = true;
            se.nodataprice = true;
            se.slideData = [];
          }
       
      })
  }

  appendRecommend(stringAppend){
      let firststr = stringAppend.substring(0,3);
      let endstr = stringAppend.substring(3,stringAppend.length -1);
      let appendstr = "<span class='m-r-30'><img style='position: absolute;' src='../../assets/ic_food/Frame.svg'></span>";
      return firststr + appendstr + endstr;
  }

  getMenuRelate(item, itemdetail){
    var se = this;
    let urlrelate = C.urls.baseUrl.urlFood + "/api/FODetail/GetRecomentCombo?id="+ item.categoryId +"&date="+ moment(itemdetail.startDate).add(-7, 'days').format("YYYY-MM-DD");
       se.gf.RequestApi("GET", urlrelate, {}, {}, "FoodDetail", "LoadCategoryHome").then((data)=>{
         if(data){
          se.menurelates = [];
           se.menurelates = data;
           if(se.menurelates && se.menurelates.length >0){
              se.menurelates.forEach(element => {
                if(element.avgPoint >0 && element.avgPoint<10){
                  element.avgPoint= element.avgPoint.toFixed(1);
                }
                element.isFromRelate = true;
                element.priceDisplay = se.gf.convertNumberToString(element.price);
                element.startDate = itemdetail.startDate;
                element.endDate = itemdetail.endDate;
                element.currentWeek = itemdetail.currentWeek;
            });
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
           se.arrimgreview = data.image;
           
           se.reviews = data.data.splice(0,3);

           se.reviews.forEach(element => {
             element.reviewDate = moment(element.reviewDate).format("DD-MM-YYYY");
             let point = element.reviewPoint + element.deliveryPoint;
             if(point <10){
              element.reviewPointDisplay = (element.reviewPoint + element.deliveryPoint).toFixed(1);
             }else{
              element.reviewPointDisplay = element.reviewPoint + element.deliveryPoint;
             }
             
             //console.log(element.reviewPoint);
           });
         }
       })
  }

  orderMenu(menu){
    this.zone.run(() => {
      menu.mainmenu = [];
      menu.submenu = [];
      menu.othermenu = [];
      if(menu.forecipe && menu.forecipe.length >0){
        menu.forecipe.forEach(element => {
          if(element.type == 5){
            menu.mainmenu.push(element);
          }
          if(element.type == 4 || element.type == 7 || element.type ==6){
            menu.submenu.push(element);
          }
          if(element.type == 3 || element.type == 8){
            menu.othermenu.push(element);
          }
        });
      }
      }
    )
  }

  goback(){
    // this.valueGlobal.backValue = "fooddinnerdetail";
    // this.navCtrl.navigateBack("app/tabs/tab1");
    if(this.valueGlobal.backValue == "foodadddetail"){
      this.valueGlobal.backValue = "foodbill";
      this._foodService.itemActiveFoodTab.emit(2);
      this.navCtrl.navigateBack("/homefood");
    }else{
      this.navCtrl.navigateBack("/homefood");
    }
    
  }

  slidechange() {
    this.slider.getActiveIndex().then(index => {
      this.foodimg = this.slideData[index].Image;
      this.coutslide = index + 1;
      this.comboitem = this.slideData[index];
    });
  }

  // async addToCart(){
  //   if(!this.loaddatadone){
  //     this.presentToastWarning('Đang load dữ liệu. Xin vui lòng đợi trong giây lát!');
  //     return;
  //   }
  //   this._foodService.isBook = false;
  //   this._foodService.itemAddToCart = this.combodetail;
  //   const modal: HTMLIonModalElement =
  //     await this.modalCtrl.create({
  //       component: FoodDinnerOrderPage,
  //       cssClass: 'cls-order',
  //     });
  //   modal.present();
  //   modal.onDidDismiss().then((data: OverlayEventDetail) => {
      
  //   })
  // }

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

  async bookdinner(){
    if(!this.loaddatadone){
      this.presentToastWarning('Đang load dữ liệu. Xin vui lòng đợi trong giây lát!');
      return;
    }
    if(this.menusoff && this.menusoff.length ==5){
      this.presentToastWarning('Đã hết hạn đặt menu tuần này. Xin vui lòng đặt menu cho tuần sau!');
      return;
    }
    this._foodService.itemDinnerAddToCart = this.combodetail;
    this._foodService.isBookDinner = true;
    this._foodService.isDinner = true;
    const modal: HTMLIonModalElement =
      await this.modalCtrl.create({
        component: FoodDinnerOrderPage,
        cssClass: 'cls-order',
      });
    modal.present();
    modal.onDidDismiss().then((data: OverlayEventDetail) => {
      if(!data.data){
        this.zone.run(()=>{
          this.countcart = this._foodService.countcart;
        })
        //this.navCtrl.navigateForward('/foodadddetail');
        this._foodService.fromPage = "fooddinnerorder";
        if(this.combodetail.isFromFoodbill){
          this._foodService.itemAddToCartFromFoodbill.emit(1);
        }
          this.navCtrl.navigateForward('/foodbill');
      }
      
    })
    
  }

  showCart(){
    // if(this._foodService.listItemsCart.length ==0 && !this.hascachecart){
    //   this.presentToastWarning('Bạn chưa có bữa trưa nào với iVIVU trong giỏ hàng');
    //   return;
    // }
    this._foodService.fromPage = "fooddinnerorder";
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
    if(this._foodService.listItemsCartrequest && this._foodService.listItemsCartrequest.length>0){
      this._foodService.listItemsCartrequest.forEach(element => {
        var itemPrice = 0;
        itemPrice += element.focategory.price;
        element.itemPrice = itemPrice;
        element.quantity = 2;
        this._foodService.totalPrice=itemPrice*element.quantity;
      });

      this._foodService.ischeckchangeplace="1";
      const modal: HTMLIonModalElement =
        await this.modalCtrl.create({
          component: FoodplaceotherPage,
        });
      modal.present();
      modal.onDidDismiss().then((data: OverlayEventDetail) => {
        this.navCtrl.back()
      })
    }
   
    
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

  showBlog(menu){
    var se = this;
    if(menu.remove){
      return;
    }
    if(menu.linkBlog){
      se.gf.showLoading();
      se.mapBlogId(menu.linkBlog).then((id)=>{
        se.gf.hideLoading();
        if(id){
          se.valueGlobal.backValue = "fooddinner";
          se.navCtrl.navigateForward("/blog/"+id);
        }else{
          se.gf.showToastWarning("Không tìm thấy bài viết. Xin vui lòng quay lại sau!");
        }
      })
      //se.navCtrl.navigateForward("/blog/"+);
    }
  }

  mapBlogId(item): Promise<any>{
    var se = this;
    return new Promise((resolve, reject) => {
      var options = {
        method: 'GET',
        url: 'https://svc3.ivivu.com/GetBlogByUrl',
        qs: { url: item },
        headers:
        {
        }
      };
      request(options, function (error, response, body) {
        if (error) throw new Error(error);
          se.zone.run(()=>{
            var data = JSON.parse(body);
            resolve(data.post.ID);
          })
        })
    })
    

  }

  setActiveMenuTab(tabIndex){
    var se = this;
    se.menuActive = tabIndex;
    if (tabIndex === 1) {//món ăn gợi ý
      $('.div-menu-suggest').removeClass("sub-color");
      $('.div-menu-suggest').addClass("main-color");
      $('.div-menu-fresh').addClass("sub-color");
      $('.active-mark-menu').addClass("main-color");

      $('.div-menu-suggest').siblings().removeClass('focus');
      $('.div-menu-suggest').addClass('focus');
      $('.active-mark-menu').removeClass('left-50');
      //se.sliderTab.slideTo(0);
      // $(".div-suggest-content").removeClass("cls-tab-disabled").addClass("cls-tab-visible");
      // $(".div-fresh-content").removeClass("cls-tab-visible").addClass("cls-tab-disabled");
    } else {//nguyên liệu làm sạch
      //se.sliderTab.slideTo(1);
      $('.div-menu-suggest').removeClass("main-color");
      $('.div-menu-suggest').addClass("sub-color");
      $('.div-menu-fresh').removeClass("sub-color");
      $('.div-menu-fresh').addClass("main-color");
      $('.active-mark-menu').removeClass("main-color");
      $('.div-menu-fresh').siblings().removeClass('focus');
      $('.div-menu-fresh').addClass('focus');
      $('.active-mark-menu').removeClass('left-50').addClass('left-50');
      // $(".div-fresh-content").removeClass("cls-tab-disabled").addClass("cls-tab-visible");
      // $(".div-suggest-content").removeClass("cls-tab-visible").addClass("cls-tab-disabled");
    }
  }

  slidetabchange(){
    this.sliderTab.getActiveIndex().then(index => {
      this.setActiveMenuTab(index+1);
    });
  }

  checkItemMenuEnable(itemcombo, itemmenu, dayofweek){
    let se = this, today = new Date();
    
    let startdate = moment(itemcombo.startDate).add(dayofweek-2, 'days');
    let difftime = moment(startdate).diff(moment(today),'hours');
    let diffday = moment(startdate).diff(moment(moment(today).format('YYYY-MM-DD')),'days');
    
    return (diffday == 0 || difftime <= 11 ) ? true : false; 
  }

  async removeMenu(item, slidingItem: IonItemSliding){
    item.remove = 1;
    this.menusoff.push({id: item.id});
    await slidingItem.close();
    $("#"+item.id+" .div-left").addClass('bg-disabled');
    $("#"+item.id+" .div-right").addClass('opt-disabled');
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
    this._foodService.isBookDinner = false;
    this._foodService.itemDinnerAddToCart = this.combodetail;
    const modal: HTMLIonModalElement =
      await this.modalCtrl.create({
        component: FoodDinnerOrderPage,
        cssClass: 'cls-order',
      });
    modal.present();
    modal.onDidDismiss().then((data: OverlayEventDetail) => {
      this.zone.run(()=>{
        this.countcart = this._foodService.countcart;
      })
    })
  }
}
