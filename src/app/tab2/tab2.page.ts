import { Component, OnInit, NgZone } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, Platform, LoadingController, ModalController } from '@ionic/angular';
import * as request from 'requestretry';
import { SearchHotel, ValueGlobal } from './../providers/book-service';
import { C } from './../providers/constants';
import { GlobalFunction } from './../providers/globalfunction';
import { Network } from '@ionic-native/network/ngx';
import { NetworkProvider } from '../network-provider.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import * as moment from 'moment';
import { Subscription } from 'rxjs/Subscription';
import { NavigationEnd, Router } from '@angular/router';
import { tourService } from './../providers/tourService';
import { mergeScan } from 'rxjs/operators';
@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  intervalID;
  ishide = false;
  public json1 = [];
  public jsontemp = [];
  public itemsSkeleton = [1, 2, 3, 4, 5];
  nodata = false;
  nodatablog = false;
  dataList = [];
  listhotels = "";
  listhotelIdInternal = "";
  jsonhtprice = [];
  jsonhtprice1;
  istext = false;
  istextblog = false;
  public isConnected;
  myloader;
  public activeTabTrip = 1;
  public tablike: string = "hotellike"; arrblog: any = [];
  private subscription: Subscription;
  loginuser: any;
  cin: any;
  datecin: any;
  cout: any;
  datecout: any;
  arrplace: any;
  nodataplace: boolean = false;
  istextplace: boolean = false;
  listTourFavourite = [];
  slideData: any;
 
  constructor(public platform: Platform, public navCtrl: NavController, public storage: Storage, public zone: NgZone, public searchhotel: SearchHotel, public gf: GlobalFunction, public valueGlobal: ValueGlobal,
    public network: Network, public loadingCtrl: LoadingController, private socialSharing: SocialSharing,
    public networkProvider: NetworkProvider, public router: Router, public modalCtrl: ModalController, public tourService: tourService) {
    this.handleSplashScreen();
  }
  ionViewDidLoad() {
    let elements = document.querySelectorAll(".tabbar");

    if (elements != null) {
      Object.keys(elements).map((key) => {
        elements[key].style.display = 'flex';
      });
    }
    //google analytic
    this.gf.googleAnalytion('hotel-like', 'Search', '');
  }

  async handleSplashScreen(): Promise<void> {
    try {
      // wait for App to finish loading
      await this.platform.ready()
    } catch (error) {
      console.error('Platform initialization bug')
    }
    const splash = document.getElementById('splash-screen');
    if (splash) {
      splash.style.opacity = '0';
      setTimeout(() => { splash.remove() }, 300);
    }

  }
  ionViewWillEnter() {
    this.valueGlobal.logingoback = '/app/tabs/tab2';
    if (document.querySelector(".tabbar")) {
      document.querySelector(".tabbar")['style'].display = 'flex';
    }
    this.storage.get('auth_token').then(auth_token => {
      if (auth_token) {
        this.loginuser = auth_token;
      } else {
        this.loginuser = null;
      }

    });
    //this.presentLoading();
    this.nodata = false;
    this.json1 = [];
    this.istext = false;
    this.istextblog = false;
    this.slideData=[];
    //this.getlisthotellike();

    if (this.networkProvider.isOnline()) {
      this.isConnected = true;
      setTimeout(() => {
        this.getlisthotellike(0);
        this.getlisttourlike();
      }, 100)
      this.arrblog = [];
      this.getblog();
      this.getPlace();
    } else {
      this.isConnected = false;
      this.gf.showWarning('Không có kết nối mạng', 'Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng', 'Đóng');
    }
  }
  ionViewWillLeave() {
    this.zone.run(() => {
      clearInterval(this.intervalID);
    })
  }
  ionViewDidEnter() {

  }
  itemSelected(msg) {
    if (!this.networkProvider.isOnline()) {
      this.gf.showWarning('Không có kết nối mạng', 'Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng', 'Đóng');
      return;
    }
    this.searchhotel.hotelID = msg.HotelId;
    this.searchhotel.rootPage = "likepage";
    var item: any = {};
    item.adult = this.searchhotel.adult ? this.searchhotel.adult : 2;
    item.child = this.searchhotel.child ? this.searchhotel.child : 0;
    item.arrchild = this.searchhotel.arrchild;
    item.roomnumber = this.searchhotel.roomnumber ? this.searchhotel.roomnumber : 1;
    if (msg.Avatar) {
      item.Avatar = (msg.Avatar.toLocaleString().trim().indexOf("http") == -1) ? 'https:' + msg.Avatar : msg.Avatar;
    }
    else {
      item.Avatar = 'https://cdn1.ivivu.com/iVivu/2018/02/07/15/noimage-110x110.jpg';
    }
    var checkInDate = new Date(this.searchhotel.CheckInDate);
    var checkOutDate = new Date(this.searchhotel.CheckOutDate);
    item.CheckInDate = this.searchhotel.CheckInDate
    item.CheckOutDate = this.searchhotel.CheckOutDate;
    item.checkInDate = moment(checkInDate).format('DD') + ' ' + 'tháng' + ' ' + moment(checkInDate).format('MM') + ', ' + moment(checkInDate).format('YYYY')
    item.checkOutDate = moment(checkOutDate).format('DD') + ' ' + 'tháng' + ' ' + moment(checkOutDate).format('MM') + ', ' + moment(checkOutDate).format('YYYY')
    item.id = msg.HotelId;
    item.name = msg.Name;
    item.isType = 0;
    this.gf.setCacheSearch(item, 0);

    this.navCtrl.navigateForward('/hoteldetail/' + msg.HotelId);
    //this.navCtrl.navigateForward(['/app/tabs/hoteldetail/' + item.HotelId]);
    //this.navCtrl.navigateForward('HoteldetailPage', id1);
  }
  unlikeItem(id) {
    if (!this.networkProvider.isOnline()) {
      this.gf.showWarning('Không có kết nối mạng', 'Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng', 'Đóng');
      return;
    }
    var se = this;
    se.jsontemp = se.json1;
    se.storage.get('auth_token').then(auth_token => {
      if (auth_token) {
        for (let i = 0; i < se.json1.length; i++) {
          if (se.json1[i].HotelId == id) {
            se.json1[i].Liked = false;
            break;
          }
        }
        var text = "Bearer " + auth_token;
        var options = {
          method: 'POST',
          url: C.urls.baseUrl.urlMobile + '/mobile/OliviaApis/RemoveFavouriteHotelByUser',
          timeout: 10000, maxAttempts: 5, retryDelay: 2000,
          headers:
          {
            'postman-token': 'a19ecc0a-cb83-4dd9-3fd5-71062937a931',
            'cache-control': 'no-cache',
            'content-type': 'application/json',
            authorization: text
          },
          body: { hotelId: id },
          json: true
        };

        request(options, function (error, response, body) {
          if (error) {
            error.page = "hotellike";
            error.func = "unlikeitem";
            error.param = JSON.stringify(options);
            C.writeErrorLog(error, response);
            throw new Error(error)
          };

        });
      }
    });
  }
  setItemLikeStatus(id) {
    this.json1.forEach(el => {
      if (el.HotelId == id) {
        el.Liked = !el.Liked;
      }
    });
  }
  getlisthotellike(value) {
    var se = this;
    //se.presentLoadingData();
    se.storage.get('auth_token').then(auth_token => {
      if (auth_token) {
        se.loginuser = auth_token;
        var text = "Bearer " + auth_token;
        var options = {
          method: 'GET',
          url: C.urls.baseUrl.urlMobile + '/mobile/OliviaApis/GetFavouriteHotelByUser',
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
            if (se.myloader) {
              se.myloader.dismiss();
            }
            error.page = "hotellike";
            error.func = "getlisthotellike";
            error.param = JSON.stringify(options);
            C.writeErrorLog(error, response);
            throw new Error(error)
          };
          var arr = JSON.parse(body);
          if (arr && arr.length > 0) {
            var chuoi = "";
            for (let i = 0; i < arr.length; i++) {
              if (i == arr.length - 1) {
                chuoi = chuoi + arr[i];
              } else {
                chuoi = chuoi + arr[i] + ",";
              }

            }
            se.zone.run(() => {
              if (chuoi) {
                se.postdata(chuoi);
              }
              else {
                se.nodata = true;
                if (se.myloader) {
                  se.myloader.dismiss();
                }
                if (value == 0) {
                  se.getblog();
                }

              }

            });
          } else {
            se.zone.run(() => {
              se.ishide = true;
              se.nodata = true;
            })

            if (se.myloader) {
              se.myloader.dismiss();
            }
          }



        });
      }
      else {
        se.zone.run(() => {
          se.ishide = true;
          se.nodata = true;
          se.istext = true;
          se.nodatablog = true;
          se.istextblog = true;
          se.arrblog = [];
        })
        if (se.myloader) {
          se.myloader.dismiss();
        }
      }

    });
    setTimeout(() => {
      if (se.myloader) {
        se.myloader.dismiss();
      }
    }, 1000)
  }
  getlisttourlike() {
    var se = this;
    //se.presentLoadingData();
    se.storage.get('auth_token').then(auth_token => {
      if (auth_token) {
        se.loginuser = auth_token;
        var text = "Bearer " + auth_token;
        var options = {
          method: 'GET',
          url: C.urls.baseUrl.urlMobile + '/mobile/OliviaApis/GetFavouriteTourByUser',
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
            if (se.myloader) {
              se.myloader.dismiss();
            }
            error.page = "hotellike";
            error.func = "getlisthotellike";
            error.param = JSON.stringify(options);
            C.writeErrorLog(error, response);
            throw new Error(error)
          };
          var arr = JSON.parse(body);
          if (arr && arr.length > 0) {
            var chuoi = "";
            for (let i = 0; i < arr.length; i++) {
              if (i == arr.length - 1) {
                chuoi = chuoi + arr[i];
              } else {
                chuoi = chuoi + arr[i] + ",";
              }
            }
        
            se.loadTourListByListId(chuoi)
          } else {
            se.zone.run(() => {
              se.ishide = true;
              se.nodata = true;
            })

            if (se.myloader) {
              se.myloader.dismiss();
            }
          }



        });
      }
      else {
        se.zone.run(() => {
          se.ishide = true;
          se.nodata = true;
          se.istext = true;
          se.nodatablog = true;
          se.istextblog = true;
          se.arrblog = [];
        })
        if (se.myloader) {
          se.myloader.dismiss();
        }
      }

    });
    setTimeout(() => {
      if (se.myloader) {
        se.myloader.dismiss();
      }
    }, 1000)
  }
  postdata(chuoi) {
    var se = this;
    var options = {
      method: 'GET',
      url: C.urls.baseUrl.urlGet + '/hotelslist?hotelIds=' + chuoi + '&version=2',
      timeout: 100000, maxAttempts: 5, retryDelay: 2000,
      //qs: { hotelIds: chuoi },
      // headers:
      //   { 'cache-control': 'no-cache' }
    };

    request(options, function (error, response, body) {
      if (error) {
        error.page = "hotellike";
        error.func = "postdata";
        error.param = JSON.stringify(options);
        C.writeErrorLog(error, response);
        throw new Error(error)
      };
      var json = JSON.parse(body)
      se.dataList = json.List;
      se.pushdata();

      se.listhotels = "";
      se.listhotelIdInternal = "";
      for (let i = 0; i < se.dataList.length; i++) {
        if (i == se.dataList.length - 1) {
          if (se.dataList[i].EANCode != "") {
            se.listhotels = se.listhotels + se.dataList[i].EANCode;
          }
          se.listhotelIdInternal = se.listhotelIdInternal + se.dataList[i].HotelId;

        } else {
          if (se.dataList[i].EANCode != "") {
            se.listhotels = se.listhotels + se.dataList[i].EANCode + ",";
          }
          se.listhotelIdInternal = se.listhotelIdInternal + se.dataList[i].HotelId + ",";
        }
      }
      se.getHotelprice();
      // console.log(json);
    });

  }

  pushdata() {

    var se = this;
    this.json1 = [];
    se.zone.run(() => {
      for (let index = 0; index < se.dataList.length; index++) {

        if (se.dataList[index].Avatar) {
          se.dataList[index].Avatar = (se.dataList[index].Avatar.toLocaleString().trim().indexOf("http") != -1) ? se.dataList[index].Avatar : 'https:' + se.dataList[index].Avatar;
        } else {
          se.dataList[index].Avatar = "https://cdn1.ivivu.com/iVivu/2018/02/07/15/noimage.png";
        }

        if (se.dataList[index].DealType) {
          if (se.dataList[index].DealPrice) {
            se.dataList[index].DealPrice = se.dataList[index].DealPrice.toLocaleString();
          }

        }
        switch (se.dataList[index].Rating) {
          case 50:
            se.dataList[index].Rating = "./assets/star/ic_star_5.png";
            break;
          case 45:
            se.dataList[index].Rating = "./assets/star/ic_star_4.5.png";
            break;
          case 40:
            se.dataList[index].Rating = "./assets/star/ic_star_4.png";
            break;
          case 35:
            se.dataList[index].Rating = "./assets/star/ic_star_3.5.png";
            break;
          case 30:
            se.dataList[index].Rating = "./assets/star/ic_star_3.png";
            break;
          case 25:
            se.dataList[index].Rating = "./assets/star/ic_star_2.5.png";
            break;
          case 20:
            se.dataList[index].Rating = "./assets/star/ic_star_2.png";
            break;
          case 15:
            se.dataList[index].Rating = "./assets/star/ic_star_1.5.png";
            break;
          case 10:
            se.dataList[index].Rating = "./assets/star/ic_star.png";
            break;
          case 5:
            se.dataList[index].Rating = "./assets/star/ic_star_0.5.png";
            break;
          default:
            break;
        }
        var item;
        if (se.dataList[index].DealType) {

          if (se.dataList[index].Address) {
            item = { Avatar: se.dataList[index].Avatar, Name: se.dataList[index].HotelName, AvgPoint: se.dataList[index].Point, DealPrice: se.dataList[index].DealPrice, DealType: se.dataList[index].DealTypeSubstring, SubLocation: se.dataList[index].Address, Rating: se.dataList[index].Rating, HotelId: se.dataList[index].HotelId, Liked: true, StyleTag: se.dataList[index].StyleTag };
          } else {
            item = { Avatar: se.dataList[index].Avatar, Name: se.dataList[index].HotelName, AvgPoint: se.dataList[index].Point, DealPrice: se.dataList[index].DealPrice, DealType: se.dataList[index].DealTypeSubstring, SubLocation: '', Rating: se.dataList[index].Rating, HotelId: se.dataList[index].HotelId, Liked: true, StyleTag: se.dataList[index].StyleTag };
          }
        }
        else {
          if (se.dataList[index].Address) {
            item = { Avatar: se.dataList[index].Avatar, Name: se.dataList[index].HotelName, AvgPoint: se.dataList[index].Point, DealPrice: se.dataList[index].DealPrice, DealType: se.dataList[index].DealTypeSubstring, SubLocation: se.dataList[index].Address, Rating: se.dataList[index].Rating, HotelId: se.dataList[index].HotelId, RoomNameSubString: "", MinPriceOTAStr: se.dataList[index].MinPrice ? se.dataList[index].MinPrice.toLocaleString().replace("VND", "").trim() : se.dataList[index].MaxPrice.toLocaleString().replace("VND", "").trim(), PromotionDescriptionSubstring: "", MinPriceTAStr: se.dataList[index].MinPrice ? se.dataList[index].MinPrice.toLocaleString().replace("VND", "").trim() : se.dataList[index].MaxPrice.toLocaleString().replace("VND", "").trim(), Liked: true, StyleTag: se.dataList[index].StyleTag };
          } else {
            item = { Avatar: se.dataList[index].Avatar, Name: se.dataList[index].HotelName, AvgPoint: se.dataList[index].Point, DealPrice: se.dataList[index].DealPrice, DealType: se.dataList[index].DealTypeSubstring, SubLocation: '', Rating: se.dataList[index].Rating, HotelId: se.dataList[index].HotelId, RoomNameSubString: "", MinPriceOTAStr: se.dataList[index].MinPrice ? se.dataList[index].MinPrice.toLocaleString().replace("VND", "").trim() : se.dataList[index].MaxPrice.toLocaleString().replace("VND", "").trim(), PromotionDescriptionSubstring: "", MinPriceTAStr: se.dataList[index].MinPrice ? se.dataList[index].MinPrice.toLocaleString().replace("VND", "").trim() : se.dataList[index].MaxPrice.toLocaleString().replace("VND", "").trim(), Liked: true, StyleTag: se.dataList[index].StyleTag };
          }
        }
        se.json1.push(item);
      }
      se.ishide = true;
      // if (se.myloader) {
      //   se.myloader.dismiss();
      // }
    });

  }
  getHotelprice() {
    var se = this;
    if (!se.searchhotel.CheckInDate) {
      se.cin = new Date();
      var rescin = se.cin.setTime(se.cin.getTime() + (7 * 24 * 60 * 60 * 1000));
      var datein = new Date(rescin);
      se.cin = moment(datein).format('YYYY-MM-DD');
      se.datecin = new Date(rescin);

      se.cout = new Date();
      var res = se.cout.setTime(se.cout.getTime() + (8 * 24 * 60 * 60 * 1000));
      var date = new Date(res);
      se.cout = moment(date).format('YYYY-MM-DD');
      se.datecout = new Date(res);
    }
    var options;
    var form = {
      RoomNumber: '1',
      IsLeadingPrice: '',
      ReferenceClient: '',
      Supplier: 'IVIVU',
      CheckInDate: se.searchhotel.CheckInDate ? se.searchhotel.CheckInDate : se.cin,
      CheckOutDate: se.searchhotel.CheckOutDate ? se.searchhotel.CheckOutDate : se.cout,
      CountryID: '',
      CityID: '',
      NationalityID: '',
      'RoomsRequest[0][RoomIndex]': '0',
      'RoomsRequest[0][Adults][value]': se.searchhotel.adult ? se.searchhotel.adult : '2',
      'RoomsRequest[0][Child][value]': se.searchhotel.child ? se.searchhotel.child : '0',
      StatusMethod: '2',
      'CityCode': '',
      CountryCode: 'VN',
      NoCache: 'false',
      SearchType: '2',
      HotelIds: se.listhotels,
      HotelIdInternal: se.listhotelIdInternal
    };
    if (this.searchhotel.arrchild) {
      for (var i = 0; i < this.searchhotel.arrchild.length; i++) {
        form["RoomsRequest[0][AgeChilds][" + i + "][value]"] = + this.searchhotel.arrchild[i].numage;
      }
    }

    options = {
      method: 'POST',
      url: C.urls.baseUrl.urlContracting + '/api/contracting/HotelsSearchPriceAjax',
      timeout: 180000, maxAttempts: 5, retryDelay: 2000,
      headers:
        {},
      form
    };
    request(options, function (error, response, body) {
      if (error) {
        error.page = "hotellike";
        error.func = "getHotelprice";
        error.param = JSON.stringify(options);
        C.writeErrorLog(error, response);
        throw new Error(error)
      };
      if (response.statusCode != 200) {
        var objError = {
          page: "hotellike",
          func: "getHotelprice",
          message: response.statusMessage,
          content: response.body,
          type: "warning"
        };
        C.writeErrorLog(objError, response);
      }
      se.zone.run(() => {
        se.jsonhtprice = [];
        se.jsonhtprice1 = JSON.parse(body);
        if (se.jsonhtprice1.HotelListResponse) {
          se.jsonhtprice1 = se.jsonhtprice1.HotelListResponse.HotelList.HotelSummary;
          for (var i = 0; i < se.jsonhtprice1.length; i++) {
            let itemprice = se.jsonhtprice1[i];
            //Add vào list ks có giá
            se.jsonhtprice.push(itemprice);

          }
          //Bind giá vào list ks đã search
          se.zone.run(() => se.fillDataPrice());
          se.ishide = true;
        }
        // else {
        //   se.getblog();
        // }
      });
    });

  }
  fillDataPrice() {
    for (let index = 0; index < this.dataList.length; index++) {
      for (let i = 0; i < this.jsonhtprice.length; i++) {
        this.json1[index].HasCheckPrice = true;
        //Chỉ bind lại giá cho hotel, combo bỏ qua
        if (this.json1[index] && this.json1[index].HotelId == this.jsonhtprice[i].HotelId) {
          this.json1[index].MinPriceOTAStr = this.jsonhtprice[i].MinPriceOTAStr;
          this.json1[index].MinPriceTAStr = this.jsonhtprice[i].MinPriceTAStr;
          this.json1[index].RoomNameSubString = this.jsonhtprice[i].RoomNameSubString;
          this.json1[index].PromotionDescription = this.jsonhtprice[i].PromotionDescription;
          this.json1[index].PromotionDescriptionSubstring = this.jsonhtprice[i].PromotionDescriptionSubstring;
        }
      }
    }
    //this.getblog();
    //this.pushdata(0, this.json1.length);

  }
  gologin() {
    //this.valueGlobal.logingoback = 'HotelLikePage';
    this.navCtrl.navigateForward('login');
  }

  goToLogin() {
    this.storage.remove('auth_token');
    this.storage.remove('email');
    this.storage.remove('username');
    this.storage.remove('jti');
    this.storage.remove('listblogtripdefault');
    this.navCtrl.navigateForward('login');
  }
  public async ngOnInit(): Promise<void> {
    this.subscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && (event.url === '/' || event.url === '/tabs/tab2' || event.url === '/app/tabs/tab2')) {
        this.onEnter();
      }
    })
  }
  Selectblog() {
    //this.getlisthotellike();
    //this.getblog();
    //this.presentLoading();
    this.json1 = [];
    this.getlisthotellike(1);
    this.getPlace();
    this.activeTabTrip = 2;
  }
  Selecthotel() {
    //this.presentLoading();
    this.getblog();
    this.getPlace();
    this.activeTabTrip = 1;

  }

  SelectPlace() {
    this.getlisthotellike(1);
    this.getblog();
    this.activeTabTrip = 3;
  }

  getblog() {
    var se = this;
    //se.presentLoadingData();
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
            if (se.myloader) {
              se.myloader.dismiss();
            }
            error.page = "hotellike";
            error.func = "getblog";
            error.param = JSON.stringify(options);
            C.writeErrorLog(error, response);
            throw new Error(error)
          }
          se.zone.run(() => {
            se.arrblog = JSON.parse(body);
            if (se.arrblog.length > 0) {
              se.nodatablog = false
              for (let index = 0; index < se.arrblog.length; index++) {
                se.arrblog[index].date = moment(se.arrblog[index].date).format('HH:ss DD/MM/YYYY');
                se.arrblog[index].Like = true;
              }
            }
            else {
              se.arrblog = [];
              se.nodatablog = true;
              if (se.myloader) {
                se.myloader.dismiss();
              }
            }
          });
        });

      }
      else {
        se.arrblog = [];
        this.nodatablog = true;
        this.istextblog = true;
        if (se.myloader) {
          se.myloader.dismiss();
        }
      }

    });
    setTimeout(() => {
      if (se.myloader) {
        se.myloader.dismiss();
      }
    }, 1000)
  }
  share(item) {
    this.socialSharing.share(null, null, null, item.url).then(() => {
      // Success!
    }).catch(() => {
      // Error!
    });
  }
  unlikeItemblog(item) {
    if (!this.networkProvider.isOnline()) {
      this.gf.showWarning('Không có kết nối mạng', 'Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng', 'Đóng');
      return;
    }
    var se = this;
    se.jsontemp = se.json1;
    se.storage.get('auth_token').then(auth_token => {
      if (auth_token) {
        se.bindItemUnLike(item);
        var text = "Bearer " + auth_token;
        var options = {
          method: 'POST',
          url: C.urls.baseUrl.urlMobile + '/mobile/OliviaApis/RemoveFavouriteBlogByUser',
          timeout: 10000, maxAttempts: 5, retryDelay: 2000,
          headers:
          {
            'postman-token': 'a19ecc0a-cb83-4dd9-3fd5-71062937a931',
            'cache-control': 'no-cache',
            'content-type': 'application/json',
            authorization: text
          },
          body: { postId: item },
          json: true
        };

        request(options, function (error, response, body) {
          if (error) {
            error.page = "hotellike";
            error.func = "unlikeitemblog";
            error.param = JSON.stringify(options);
            C.writeErrorLog(error, response);
            throw new Error(error)
          };
        });
      }
    });
  }
  itemblogclick(item) {
    this.valueGlobal.urlblog = item.url;
    this.navCtrl.navigateForward('/blog/' + item.id);
    //google analytic
    this.gf.googleAnalytion('blog', 'Search', '');
  }
  public async onEnter(): Promise<void> {
    this.json1 = [];
    this.nodata = false;
    this.istext = false;
    this.istextblog = false;
    this.ishide = false;
    this.getlisthotellike(0);
    this.getblog();
  }
  likeItem(id) {
    if (!this.networkProvider.isOnline()) {
      this.gf.showWarning('Không có kết nối mạng', 'Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng', 'Đóng');
      return;
    }
    var se = this;
    //se.jsontemp = se.json1;
    se.storage.get('auth_token').then(auth_token => {
      if (auth_token) {
        for (let i = 0; i < se.json1.length; i++) {
          if (se.json1[i].HotelId == id) {
            se.json1[i].Liked = true;
            break;
          }
        }
        var text = "Bearer " + auth_token;
        var options = {
          method: 'POST',
          url: C.urls.baseUrl.urlMobile + '/mobile/OliviaApis/AddFavouriteHotel',
          timeout: 10000, maxAttempts: 5, retryDelay: 2000,
          headers:
          {
            'postman-token': 'a19ecc0a-cb83-4dd9-3fd5-71062937a931',
            'cache-control': 'no-cache',
            'content-type': 'application/json',
            authorization: text
          },
          body: { hotelId: id },
          json: true
        };

        request(options, function (error, response, body) {
          if (error) {
            error.page = "hotellike";
            error.func = "likeitem";
            error.param = JSON.stringify(options);
            C.writeErrorLog(error, response);
            throw new Error(error)
          };
          // se.json1 = [];


        });
      }
    });
  }

  likeItemblog(item) {
    if (!this.networkProvider.isOnline()) {
      this.gf.showWarning('Không có kết nối mạng', 'Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng', 'Đóng');
      return;
    }
    var se = this;
    // se.jsontemp = se.json1;
    se.storage.get('auth_token').then(auth_token => {
      if (auth_token) {
        se.bindItemLike(item);
        var text = "Bearer " + auth_token;
        var options = {
          method: 'POST',
          url: C.urls.baseUrl.urlMobile + '/mobile/OliviaApis/AddFavouriteBlog',
          timeout: 10000, maxAttempts: 5, retryDelay: 2000,
          headers:
          {
            'postman-token': 'a19ecc0a-cb83-4dd9-3fd5-71062937a931',
            'cache-control': 'no-cache',
            'content-type': 'application/json',
            authorization: text
          },
          body: { postId: item },
          json: true
        };

        request(options, function (error, response, body) {
          if (error) {
            error.page = "hotellike";
            error.func = "unlikeitemblog";
            error.param = JSON.stringify(options);
            C.writeErrorLog(error, response);
            throw new Error(error)
          };
        });
      }
    });
  }
  bindItemUnLike(id) {
    for (let i = 0; i < this.arrblog.length; i++) {
      if (this.arrblog[i].id == id) {
        this.arrblog[i].Like = false;
        break;
      }
    }
  }
  bindItemLike(id) {
    for (let i = 0; i < this.arrblog.length; i++) {
      if (this.arrblog[i].id == id) {
        this.arrblog[i].Like = true;
        break;
      }
    }
  }
  async presentLoading() {
    this.myloader = await this.loadingCtrl.create({
    });
    this.myloader.present();
  }

  getPlace() {
    var se = this;
    se.getPlaceLikeByUser().then(data => {
      if (data && data.length > 0) {
        let ids = data.join(',');
        let urlApi = C.urls.baseUrl.urlMobile + '/api/Data/GetPlace?IdPlaces=' + ids + '&paging.pageNumber=0&paging.pageSize=500';
        //let urlApi = 'http://192.168.10.121:3400/api/Data/GetPlace?IdPlaces='+ids+'&paging.pageNumber=0&paging.pageSize=500';
        se.gf.RequestApi('GET', urlApi, {}, {}, 'ExperienceSearch', 'loadDataAfterSearchItem').then((data: any) => {
          if (data && data.data.length > 0) {
            se.nodataplace = false;
            se.zone.run(() => {
              se.arrplace = data.data;

              se.arrplace.forEach(element => {
                element.liked = true;
                if (element.workingHours.length > 0) {
                  element.workingHoursDisplay = '';
                  element.workingHours.forEach(elementsub => {
                    if (!element.workingHoursDisplay) {
                      element.workingHoursDisplay = elementsub.name + ' | ' + elementsub.timeFrom + '-' + elementsub.timeTo;
                    } else {
                      element.workingHoursDisplay += " , " + elementsub.name + ' | ' + elementsub.timeFrom + '-' + elementsub.timeTo;
                    }
                  });
                }
              });
            })

          }
        })
      } else {
        se.arrplace = [];
        se.nodataplace = true;
        if (se.myloader) {
          se.myloader.dismiss();
        }
      }
    })
  }

  getPlaceLikeByUser(): Promise<any> {
    var se = this;
    return new Promise((resolve, reject) => {
      se.storage.get('auth_token').then(auth_token => {
        if (auth_token) {
          var text = "Bearer " + auth_token;
          var options = {
            method: 'GET',
            url: C.urls.baseUrl.urlMobile + '/api/Data/GetPlaceUserLike',
            //url:  'http://192.168.10.121:3400/api/Data/GetPlaceUserLikeMobile',
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
              if (se.myloader) {
                se.myloader.dismiss();
              }
              error.page = "hotellike";
              error.func = "getPlaceLikeByUser";
              error.param = JSON.stringify(options);
              C.writeErrorLog(error, response);
              throw new Error(error)
            }
            se.zone.run(() => {
              var ids = 0;
              if (body) {
                ids = JSON.parse(body);
              }
              resolve(ids);
            });
          });

        }
        else {
          se.arrplace = [];
          this.nodataplace = true;
          this.istextplace = true;
          if (se.myloader) {
            se.myloader.dismiss();
          }
          resolve([]);
        }

      });
    })
  }

  async itemListSearchClick(item, listsearchdisplay) {
    var se = this;

    // se.gf.setParams(item,'experienceItem');
    //   let listdetail = [];
    //   se.gf.setParams(listdetail, 'listSearch_ExperienceDetail');
    //   const modal: HTMLIonModalElement =
    //   await this.modalCtrl.create({
    //     component: ExperienceDetailPage,
    //     id: 'ExperienceDetail'
    //   });
    //   modal.present();
  }

  unlikePlace(item) {
    var se = this;
    se.storage.get('auth_token').then(auth_token => {
      if (auth_token) {
        var text = "Bearer " + auth_token;
        var header = { authorization: text };
        var body = item.id;
        let urlLikePlace = C.urls.baseUrl.urlMobile + '/api/Data/UnLikePlace';
        se.gf.RequestApi('POST', urlLikePlace, header, body, 'ExperienceSearch', 'unlikePlace').then((data: any) => {

          se.zone.run(() => {
            item.liked = false;
          })
        })
      }
    })
  }

  likePlace(item) {
    var se = this;
    se.storage.get('auth_token').then(auth_token => {
      if (auth_token) {
        var text = "Bearer " + auth_token;
        var header = { authorization: text };
        var body = item.id;
        let urlLikePlace = C.urls.baseUrl.urlMobile + '/api/Data/LikePlace';
        se.gf.RequestApi('POST', urlLikePlace, header, body, 'ExperienceSearch', 'likePlace').then((data: any) => {

          se.zone.run(() => {
            item.liked = true;
          })
        })
      }
    })
  }
  loadTourListByListId(listId) {
    let se = this;
    let url = C.urls.baseUrl.urlMobile + '/tour/api/TourApi/SearchTourDestination?lsIdTour=' + listId + `&departuredId=${((this.tourService.itemSearchDepature && this.tourService.itemSearchDepature.Id) ? this.tourService.itemSearchDepature.Id : 37)}`;
    let headers = {
      apisecret: '2Vg_RTAccmT1mb1NaiirtyY2Y3OHaqUfQ6zU_8gD8SU',
      apikey: '0HY9qKyvwty1hSzcTydn0AHAXPb0e2QzYQlMuQowS8U'
    };
    se.gf.RequestApi('GET', url, headers, null, 'tourlist', 'loadTourListByListId').then((data) => {
      let res = JSON.parse(data);
      se.slideData = res.Response;

      se.slideData.forEach(element => {
        let itemmap = this.tourService.listTopSale.filter((item) => item.Id == element.Id);
        if (itemmap && itemmap.length > 0) {
          element.TopSale = itemmap[0].TotalPax;
        }
        if (element.TourTimeName && element.TourTimeName.split(' ').length == 4) {
          let arr = element.TourTimeName.split(' ');
          element.sortTourTime = arr[0] * 1 + arr[2] * 1;
        } else {
          element.sortTourTime = 0;
        }
        if (element.AvartarLink && element.AvartarLink.indexOf('http') == -1) {
          element.AvartarLink = 'https:' + element.AvartarLink;
        }
        element.Liked=true;
        se.convertAvgPoint(element);
      });
      if(se.slideData.length>0){
        se.nodata=false;
      }
      se.mapingPriceTour();
    })
  }
  convertAvgPoint(element) {
    if (element.AvgPoint && (element.AvgPoint.toString().length == 1 || element.AvgPoint === 10)) {
      element.AvgPoint = element.AvgPoint + ".0";
    }
  }
  mapingPriceTour() {
    let se = this;
    let headers = {
      apisecret: '2Vg_RTAccmT1mb1NaiirtyY2Y3OHaqUfQ6zU_8gD8SU',
      apikey: '0HY9qKyvwty1hSzcTydn0AHAXPb0e2QzYQlMuQowS8U'
    };
    if (se.slideData && se.slideData.length > 0) {
      let listIds = se.slideData.map(item => item.Id).join(',');
      se.gf.RequestApiWithQueryString('GET', C.urls.baseUrl.urlMobile + '/tour/api/TourApi/GetMercuriusPriceByTourIds', headers, { TourIds: listIds, date: moment(this.searchhotel.CheckInDate).format('YYYY-MM-DD') }, 'tourList', 'GetMercuriusPriceByTourIds').then((data) => {
        if (data && data.Status == "Success" && data.Response && data.Response.length > 0) {
          this.zone.run(() => {
          for (let index = 0; index < se.slideData.length; index++) {
            const element = se.slideData[index];
            
              data.Response.forEach((p) => {
                if (p.Contract && p.Contract[0] && p.Contract[0].PriceAdult && p.Code == "TO" + element.Id) {
                  element.PriceAdult = p.Contract[0].PriceAdult;
                  if (p.Contract[0].PriceAdult < element.MinPrice) {
                    element.priceShow = se.gf.convertNumberToString(p.Contract[0].PriceAdult);
                  } else {
                    element.priceShow = se.gf.convertNumberToString(element.MinPrice);
                  }
                  element.DepartureTime = moment(p.Contract[0].DepartureTime[0]).format("DD-MM-YYYY");
                  element.sortByTime = p.Contract[0].DepartureTime[0];
  
                }
              })
           
           
          }
        })

        }
      })

    }


  }
  itemSelectedTour(msg) {
    if (!this.networkProvider.isOnline()) {
      this.gf.showWarning('Không có kết nối mạng', 'Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng', 'Đóng');
      return;
    }
    this.tourService.tourDetailId = msg.Id;
    this.tourService.backPage = 'hometour';
    this.navCtrl.navigateForward('/tourdetail');
  }
  likeItemTour(msg) {
    if (!this.networkProvider.isOnline()) {
      this.gf.showWarning('Không có kết nối mạng', 'Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng', 'Đóng');
      return;
    }
    var se = this;
    //se.jsontemp = se.json1;
    se.storage.get('auth_token').then(auth_token => {
      if (auth_token) {
        for (let i = 0; i < se.slideData.length; i++) {
          if ( se.slideData[i].Id == msg.Id) {
             se.slideData[i].Liked = true;
            break;
          }
        }
        var text = "Bearer " + auth_token;
        var options = {
          method: 'POST',
          url: C.urls.baseUrl.urlMobile + '/mobile/OliviaApis/AddFavouriteTour',
          timeout: 10000, maxAttempts: 5, retryDelay: 2000,
          headers:
          {
            'postman-token': 'a19ecc0a-cb83-4dd9-3fd5-71062937a931',
            'cache-control': 'no-cache',
            'content-type': 'application/json',
            authorization: text
          },
          body: { tourId: msg.Id },
          json: true
        };

        request(options, function (error, response, body) {
          if (error) {
            error.page = "hotellike";
            error.func = "likeitem";
            error.param = JSON.stringify(options);
            C.writeErrorLog(error, response);
            throw new Error(error)
          };
          // se.json1 = [];


        });
      }
    });
  }
  unlikeItemTour(msg) {
    if (!this.networkProvider.isOnline()) {
      this.gf.showWarning('Không có kết nối mạng', 'Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng', 'Đóng');
      return;
    }
    var se = this;
    se.jsontemp = se.json1;
    se.storage.get('auth_token').then(auth_token => {
      if (auth_token) {
        for (let i = 0; i < se.slideData.length; i++) {
          if (se.slideData[i].Id == msg.Id) {
            se.slideData[i].Liked = false;
            break;
          }
        }
        var text = "Bearer " + auth_token;
        var options = {
          method: 'POST',
          url: C.urls.baseUrl.urlMobile + '/mobile/OliviaApis/RemoveFavouriteTour',
          timeout: 10000, maxAttempts: 5, retryDelay: 2000,
          headers:
          {
            'postman-token': 'a19ecc0a-cb83-4dd9-3fd5-71062937a931',
            'cache-control': 'no-cache',
            'content-type': 'application/json',
            authorization: text
          },
          body: { tourId: msg.Id},
          json: true
        };

        request(options, function (error, response, body) {
          if (error) {
            error.page = "hotellike";
            error.func = "unlikeitem";
            error.param = JSON.stringify(options);
            C.writeErrorLog(error, response);
            throw new Error(error)
          };

        });
      }
    });
  }
  goToRegister() {
    this.navCtrl.navigateForward('/register');
  }
}
