import { Component, OnInit, NgZone, ViewChild, ElementRef, HostListener } from '@angular/core';
import { NavController, Platform, LoadingController, IonContent, ModalController } from '@ionic/angular';
import { C } from '../providers/constants';
import { GlobalFunction } from '../providers/globalfunction';
import { ActivatedRoute } from '@angular/router';
import * as request from 'requestretry';
import * as moment from 'moment';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ValueGlobal,SearchHotel } from '../providers/book-service';
import { Storage } from '@ionic/storage';
import { NetworkProvider } from '../network-provider.service';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import * as $ from 'jquery';
import { BlogModalPage } from '../blogmodal/blogmodal';

@Component({
  selector: 'app-searchblogmodal',
  templateUrl: './searchblogmodal.page.html',
  styleUrls: ['./searchblogmodal.page.scss'],
})
export class SearchBlogModalPage implements OnInit {
  blogtrips = []; arrbloglike=[]; istextblog = false; public isConnected: boolean = true; username; page = 1;
  _infiniteScroll: any; ischeckloadmore = false;filterblog: boolean = false;
  items: any=[];
  textsearch: string;
  regionname: any;
  loadblogslug: boolean= false;
  regionCode: any;
  blogslugs: any=[];
  myloader: any;
  papesearch: number=1;
;loader:any;ischecksearchbar=false;
  regionnamesuggest="";
  loaddatadone = false;
  blogtripssk = [1,2,3,4,5];
  searchblog = false;
  @ViewChild('inputSearchBlog') input;
  @ViewChild('scrollArea') content: IonContent;
  //@ViewChild( 'inputSearchBlog') inputElm : ElementRef;
  @HostListener( 'keydown', ['$event'] )
      keyEvent( e )
      {
          var code = e.keyCode || e.which;
          if( code === 13 )
          {
              if( e.srcElement.tagName === "INPUT" )
              {
                  e.preventDefault();
                  let listblogsearch = this.items.filter((item)=>{return item.show});
                  if(listblogsearch && listblogsearch.length>0){
                    this.zone.run(()=>{
                      this.filterblog = false;
                      //this.searchblog = false;
                      this.blogslugs = [];
                      this.blogtrips = [];
                      this.loadblogslug = false;
                      this.loaddatadone = false;
                      this.papesearch = 1;
                      this.gf.setParams(null,'itemslug');
                    })
                  
                    setTimeout(()=>{
                      this.loadDataBlog(listblogsearch);
                    },500);
                  }
              }
          }
      };
  constructor(public searchhotel:SearchHotel,public networkProvider: NetworkProvider,public loadingCtrl: LoadingController, public valueGlobal: ValueGlobal, public storage: Storage, public platform: Platform, public navCtrl: NavController, public value: ValueGlobal, public gf: GlobalFunction, private activatedRoute: ActivatedRoute, public zone: NgZone, private socialSharing: SocialSharing,
    public keyboard: Keyboard,
    private modalCtrl: ModalController) {
      this.gf.googleAnalytion("searchblog","Search","");

  }

  ngOnInit() {

  }

  ionViewDidEnter(){
    
  }

  goback() {
    //this.navCtrl.back();
    if(this.loadblogslug){
      if(this.blogtrips.length == 0){
        //this.navCtrl.back();
        this.modalCtrl.dismiss();
      }else{
        this.loadblogslug = false;
        this.filterblog = false;
        this.regionnamesuggest = 'Cẩm nang du lịch';
      }
      //this.blogslugs = [];
    }else{
      this.modalCtrl.dismiss();
    }
    
  }
  async itemblogclick(item) {
    var se = this;
    se.zone.run(()=>{
      se.loaddatadone = false;
    })
    
    if(item.itemslug){
      se.loadblogslug = true;
      se.regionCode = item.slug;
      se.filterblog = false;
      se.searchblog = false;
      // se.items = [];
      // se.blogtrips = [];
      se.blogslugs= [];
      se.loadBlogSlug(se.regionCode,10);
    }else{
      se.valueGlobal.urlblog = item.url;
      if(item.id){
        se.openBLog(item)
    }
    }
    
  }

  async openBLog(item){
    var se = this;
    se.gf.setParams(item.id,'blogid');
        const modal: HTMLIonModalElement =
        await se.modalCtrl.create({
          component: BlogModalPage
        });
        modal.present();

        modal.onDidDismiss().then((data) => {
          se.gf.setParams(null,'blogid');
          if (se.blogslugs.length >0 || se.blogtrips.length > 0) {
            se.loaddatadone = true;
          }
        })
  }
  
  ionViewWillLeave(){
    //this.gf.setParams(null,'listsearchblog');
    //this.gf.setParams(null,'itemslug');
    //this.gf.setParams(null, 'searchblogtext');
  }
  
  ionViewWillEnter() {
    if (this.blogslugs.length >0 || this.blogtrips.length > 0) {
      this.loaddatadone = true;
    }
    
    //this.getbloglike(1);
    //this.searchhotel.backPage = "bloglist";

    this.storage.get('username').then(username => {
      this.username = username;
    });
    if (this.networkProvider.isOnline()) {
      this.isConnected = true;
      if(this.gf.getParams('itemslug')){
        let item = this.gf.getParams('itemslug');
        this.regionnamesuggest = item.title;
        this.loadblogslug = true;
        this.regionCode = item.slug;
        this.filterblog = false;
        //this.searchblog = false;
        this.blogslugs= [];
        this.loadBlogSlug(this.regionCode,10);

        let val = this.gf.getParams('searchblogmodaltext');
        this.textsearch = val;
        this.filterblog = true;
        this.searchblog = true;
        setTimeout(() => {
          if(this.input){
            this.input.value = val;
            //this.input.setFocus();
          }
        }, 500);
      }
      else if(this.gf.getParams('listsearchblog')){
        let listblogsearch = this.gf.getParams('listsearchblog');
        if(listblogsearch && listblogsearch.length>0){
          setTimeout(()=>{
            this.loadDataBlog(listblogsearch);
          },500);
        }

        
      } 
      
    } else {
      this.isConnected = false;
      this.gf.showWarning('Không có kết nối mạng', 'Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng', 'Đóng');
    }
  }

  loadDataBlog(listItem){
    var se = this;
    se.loadblogslug = false;
    se.loaddatadone = false;
    //se.blogtrips = [];
    se.regionnamesuggest = 'Cẩm nang du lịch';
    se.getbloglike().then(()=>{
      listItem.forEach(element => {
        if(element.slug){
          //se.loadBlogSlug(element.slug,500, true, element);
          se.bindItemSlug(element);
        }else{
          se.bindItemBlog(element, false);
        }
      });
    })
  }

  change()
  {
    this.ischecksearchbar=!this.ischecksearchbar;
  }
  iconcancel()
  {
    this.ischecksearchbar=!this.ischecksearchbar;
  }

  clickSearchBlog(){
    this.searchblog = !this.searchblog;
    if(!this.searchblog){
      this.filterblog = false;
      this.textsearch = '';
      this.items = [];
      $('.div-cover').removeClass('glass-bloglist');
    }else{
      this.filterblog = true;
      setTimeout(() => {
        if(this.input){
          this.input.setFocus();
        }
      }, 100);
      //this.keyboard.show();
      $('.div-cover').addClass('glass-bloglist');
    }
  }

  clickCancel(){
    if(!this.input.value){
      this.searchblog = !this.searchblog;
      this.filterblog = false;
      setTimeout(() => {
        if(this.input){
          this.input.setFocus();
        }
      }, 100);
      //this.keyboard.show();
      $('.div-cover').removeClass('glass-bloglist');
    }else{
      this.input.value = '';
      this.filterblog = false;
      $('.div-cover').removeClass('glass-bloglist');
    }
}

  cancelInput(){
    this.filterblog = false;
    this.textsearch = '';
    this.items = [];
  }

  clickSearch(ev){
    var se = this;
    se.page = 1;
    if(ev.detail.data){
      se.filterblog = true;
      const val = se.input.value;
      let loadtype = se.gf.getParams('seemoreblog');
      se.gf.setParams(val,'searchblogtext');
      //Nếu mở từ susggest my trip thì ưu tiên sort theo vùng mytrip
      let url = C.urls.baseUrl.urlMobile + '/api/Data/SearchBlog?keyword='+val+ (se.regionname ? (+' '+ se.regionname) : '');
          se.gf.RequestApi('GET',url,{},{},'searchblog', 'clickSearch').then((data:any)=>{
            if(data && data.length>0){
              if(se.items.length ==0){
                data.forEach(element => {
                  element.show = true;
                })
                se.items.push(...data);
              }else{
                se.items.forEach(e => {
                  e.show = false;
                })

                data.forEach(element => {
                  let check = se.items.filter((i)=>{ return i.id == element.id });
                  if(check && check.length == 0)
                  {
                    element.show = true;
                    se.items.push(element);
                  }else{
                    check[0].show = true;
                  }
                })

                se.content.scrollToTop(500);
                
              }
            }
          })
    }else{
      se.filterblog = false;
      se.items.forEach(element => {
          element.show = false;
      });
    }
  }

  itemSearchBlogClick(item, index){
    var se = this;
    if(item){
      //this.valueGlobal.urlblog = item.url;
      if(item.type == 1){
        se.openBLog(item.objectId)
        //se.navCtrl.navigateForward('/blog/' + item.objectId);
      }else{
        se.zone.run(()=>{
          se.loadblogslug = true;
          se.regionCode = item.slug;
          se.filterblog = false;
          se.searchblog = false;
          se.loaddatadone = false;
          se.items = [];
          se.blogslugs = [];
          //se.blogtrips = [];
          se.regionnamesuggest = item.title;
        })
        
        se.loadBlogSlug(se.regionCode,10);
      }
    }
  }
  /**
   * 
   * @param regioncode mã vùng load bài blog
   * @param pagesize số bài viết trên 1 trang load
   */
  loadBlogSlug(regioncode, pagesize){
    var se = this;
    var options = {
      method: 'GET',
      url: 'https://svc3.ivivu.com/GetBlogByCategorySlug',
      qs: { slug: regioncode,
            pageindex: se.page,
            pagesize: pagesize 
      },
      headers:
      {
      }
    };
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
        se.zone.run(()=>{
            if (body && body.length > 0) {
              var data = JSON.parse(body);
                if(data.length >0){
                  var listBlogtemp = data;
                  if(listBlogtemp && listBlogtemp.length >0){
                    
                    se.getbloglike().then(()=>{ 
                      se.bindItemBlog(listBlogtemp, true);
                    })
                    
                    if(se._infiniteScroll){
                      se._infiniteScroll.target.complete();
                    }
                  }
                }else{
                  se.loaddatadone = true;
                  if(se._infiniteScroll){
                    se._infiniteScroll.target.complete();
                  }
                }
               
            }
        })
      })
  }

  bindItemBlog(listBlogtemp, loadlist){
    var se = this;
    
      if(loadlist){
        if (se.arrbloglike.length > 0) {
          var itemblog;
          for (let i = 0; i < listBlogtemp.length; i++) {
            listBlogtemp[i].Date = moment(listBlogtemp[i].Date).format('HH:ss DD/MM/YYYY');
            itemblog = { avatar: listBlogtemp[i].Avatar, date: listBlogtemp[i].Date, id: listBlogtemp[i].id, title: listBlogtemp[i].Title, url: listBlogtemp[i].Url, Like: false, itemslug: false }
            for (let j = 0; j < se.arrbloglike.length; j++) {
              if (se.arrbloglike[j].id == listBlogtemp[i].id) {
                itemblog = { avatar: listBlogtemp[i].Avatar, date: listBlogtemp[i].Date, id: listBlogtemp[i].id, title: listBlogtemp[i].Title, url: listBlogtemp[i].Url, Like: true, itemslug: false };
                break;
              }
            }
            //se.blogtrips.push(itemblog);
            if(!se.gf.checkExistsItemInArray(se.blogslugs, itemblog, 'blog')){
              se.blogslugs.push(itemblog);
            }
          }
        }
        else {
          for (let i = 0; i < listBlogtemp.length; i++) {
            listBlogtemp[i].Date = moment(listBlogtemp[i].Date).format('HH:ss DD/MM/YYYY');
            itemblog = { avatar: listBlogtemp[i].Avatar, date: listBlogtemp[i].Date, id: listBlogtemp[i].id, title: listBlogtemp[i].Title, url: listBlogtemp[i].Url, Like: false }
            //se.blogtrips.push(itemblog);
            if(!se.gf.checkExistsItemInArray(se.blogslugs, itemblog, 'blog')){
              se.blogslugs.push(itemblog);
            }
          }
        }
      }else{
        if (se.arrbloglike.length > 0) {
          var itemblog;
            listBlogtemp.date = moment(listBlogtemp.created).format('HH:ss DD/MM/YYYY');
            let av = (listBlogtemp.avatars && listBlogtemp.avatars.length >0) ? listBlogtemp.avatars[0] : 'https://cdn1.ivivu.com/iVivu/2018/02/07/15/noimage-328x180.png';
            itemblog = { avatar: av, date: listBlogtemp.date, id: listBlogtemp.objectId, title: listBlogtemp.title, url: 'https://www.ivivu.com/blog/?p='+listBlogtemp.objectId, Like: false, itemslug: false }
            for (let j = 0; j < se.arrbloglike.length; j++) {
              if (se.arrbloglike[j].id == listBlogtemp.objectId) {
                itemblog = { avatar: av, date: listBlogtemp.date, id: listBlogtemp.objectId, title: listBlogtemp.title, url: 'https://www.ivivu.com/blog/?p='+listBlogtemp.objectId, Like: true, itemslug: false };
                break;
              }
            }
            if(!se.gf.checkExistsItemInArray(se.blogtrips, itemblog, 'blog')){
              se.blogtrips.push(itemblog);
            }
            //se.blogtrips.push(itemblog);
          
        }
        else {
            listBlogtemp.date = moment(listBlogtemp.created).format('HH:ss DD/MM/YYYY');
            let av = (listBlogtemp.avatars && listBlogtemp.avatars.length >0) ? listBlogtemp.avatars[0] : 'https://cdn1.ivivu.com/iVivu/2018/02/07/15/noimage-328x180.png';
            itemblog = { avatar: av, date: listBlogtemp.date, id: listBlogtemp.objectId, title: listBlogtemp.title, url: 'https://www.ivivu.com/blog/?p='+listBlogtemp.objectId, Like: false, itemslug: false }
            if(!se.gf.checkExistsItemInArray(se.blogtrips, itemblog, 'blog')){
              se.blogtrips.push(itemblog);
            }
            //se.blogtrips.push(itemblog);
        }
      }
      setTimeout(()=>{
        se.loaddatadone = true;
        if(se.keyboard.isVisible){
          se.keyboard.hide();
        }
      },200)
  }

  bindItemSlug(itemSlug){
    var se = this;
      var itemblog;
        se.regionnamesuggest = itemSlug.title;
        itemSlug.date = moment(itemSlug.created).format('HH:ss DD/MM/YYYY');
        itemblog = { avatar: null, date: itemSlug.date, id: itemSlug.objectId ? itemSlug.objectId : itemSlug.Id, title: itemSlug.title, url: 'https://www.ivivu.com/blog/?p='+itemSlug.objectId, Like: false, avatar1: itemSlug.avatars[0],avatar2: itemSlug.avatars[1],avatar3: itemSlug.avatars[2], itemslug: true, slug: itemSlug.slug }
        if(!se.gf.checkExistsItemInArray(se.blogtrips, itemblog, 'blog')){
          se.blogtrips.push(itemblog);
        }
        se.loaddatadone = true;
        if(se.keyboard.isVisible){
          se.keyboard.hide();
        }
  }

  share(url) {
    this.socialSharing.share(null, null, null, url).then(() => {
      // Success!
    }).catch(() => {
      // Error!
    });
  }

  likeItemblog(id) {
    var se = this;
    se.storage.get('auth_token').then(auth_token => {
      if (auth_token) {
        se.getbloglikelocal(id,1);
        var text = "Bearer " + auth_token;
        var options = {
          method: 'POST',
          url: C.urls.baseUrl.urlMobile + '/mobile/OliviaApis/AddFavouriteBlog',
          timeout: 10000, maxAttempts: 5, retryDelay: 2000,
          headers:
          {
            authorization: text
          },
          body: { postId: id },
          json: true
        };

        request(options, function (error, response, body) {
          if (response.statusCode != 200) {
            var objError = {
              page: "hotel-list",
              func: "likeItem",
              message: response.statusMessage,
              content: response.body,
              type: "warning",
              param: JSON.stringify(options)
            };
            C.writeErrorLog(objError,response);
          }
          if (error) {
            error.page = "hotel-list";
            error.func = "likeItem";
            error.param = JSON.stringify(options);
            C.writeErrorLog(error,response);
          };
      
        });

      }
      else {
        //se.valueGlobal.logingoback = 'TabPage';
        se.navCtrl.navigateForward('/login');
      }
    });
  }
  unlikeItemblog(id) {
    var se = this;
    se.storage.get('auth_token').then(auth_token => {
      if (auth_token) {
        se.getbloglikelocal(id,0);
        var text = "Bearer " + auth_token;
        var options = {
          method: 'POST',
          url: C.urls.baseUrl.urlMobile + '/mobile/OliviaApis/RemoveFavouriteBlogByUser',
          timeout: 10000, maxAttempts: 5, retryDelay: 2000,
          headers:
          {
            authorization: text
          },
          body: { postId: id },
          json: true
        };

        request(options, function (error, response, body) {
          if (response.statusCode != 200) {
            var objError = {
              page: "blog",
              func: "unlikeItem",
              message: response.statusMessage,
              content: response.body,
              type: "warning",
              param: JSON.stringify(options)
            };
            C.writeErrorLog(objError,response);
          }
          if (error) {
            error.page = "blog";
            error.func = "unlikeItem";
            error.param = JSON.stringify(options);
            C.writeErrorLog(error,response);
          };
          se.zone.run(() => se.getbloglike());

        });
      }
      else {
        this.navCtrl.navigateForward('/login');
      }
    });
  }
  getbloglikelocal(id,value)
  {
    this.zone.run(() => {
      for (let i = 0; i < this.blogtrips.length; i++) {
        if (this.blogtrips[i].id==id) {
          if (value==1) {
            this.blogtrips[i].Like=true;
          } else {
            this.blogtrips[i].Like=false;
          }
        break;
        }
      }

      for (let i = 0; i < this.blogslugs.length; i++) {
        if (this.blogslugs[i].id==id) {
          if (value==1) {
            this.blogslugs[i].Like=true;
          } else {
            this.blogslugs[i].Like=false;
          }
        break;
        }
      }
    })
    }

    async getbloglike() : Promise<any>{
      var se = this;
      return new Promise ((resolve, reject)=>{ 
        se.storage.get('auth_token').then(auth_token => {
          if (auth_token) {
            var text = "Bearer " + auth_token;
            var options = {
              method: 'GET',
              url: C.urls.baseUrl.urlMobile + '/mobile/OliviaApis/GetFavouriteBlogByUser',
              timeout: 10000, maxAttempts: 5, retryDelay: 2000,
              headers:
              {
                'cache-control': 'no-cache',
                'content-type': 'application/json',
                authorization: text
              }
            };
            request(options, function (error, response, body) {
              if (error) {
                error.page = "bloglist";
                error.func = "getbloglike";
                error.param = JSON.stringify(options);
                C.writeErrorLog(error,response);
                //throw new Error(error);
                se.arrbloglike = [];
                resolve(se.arrbloglike);
              }
              se.zone.run(() => {
                se.arrbloglike = JSON.parse(body);
                if (JSON.parse(body).msg) {
                  se.arrbloglike = [];
                }
                resolve(se.arrbloglike);
              });
            });
          }else{
            se.arrbloglike = [];
            resolve(se.arrbloglike);
          }
        })
      })
    }

    doInfinite(infiniteScroll) {
      var se = this;
      se._infiniteScroll = infiniteScroll;
      if (se.loadblogslug) {
        setTimeout(() => {
          se.page = se.page + 1;
          se.loadBlogSlug(se.regionCode,10);
          //infiniteScroll.target.complete();
        }, 10);
      }else{
        se.loadSearchBlogPaging();
      }

      
    }

    loadSearchBlogPaging() {
      var se = this;
      se.papesearch +=1;
      let val = se.gf.getParams('searchblogtext');
      let url = C.urls.baseUrl.urlMobile + '/api/Data/SearchBlog?keyword='+val+"&pageIndex="+se.papesearch+"&pageSize=10&viewModel=true";
          se.gf.RequestApi('GET',url,{},{},'bloglist', 'clickSearch').then((data:any)=>{
            if(data && data.length>0){
              se.getbloglike().then(()=>{
                data.forEach(element => {
                  if(element.slug){
                    se.bindItemSlug(element);
                  }else{
                    se.bindItemBlog(element, false);
                  }
                });
              
                if(se._infiniteScroll){
                  se._infiniteScroll.target.complete();
                }
              })
            }else{
              if(se._infiniteScroll){
                se._infiniteScroll.target.complete();
              }
            }

          })

      
    }


}
