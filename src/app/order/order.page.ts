
import { InsurrancepopoverPage } from './../insurrancepopover/insurrancepopover.page';
import { Component, NgZone, ViewChild, OnInit, Input } from '@angular/core';
import { NavController, ModalController, AlertController, Platform, IonContent, IonSlides, LoadingController, PopoverController, ActionSheetController, ToastController } from '@ionic/angular';
import * as request from 'requestretry';
import * as moment from 'moment';
import { Storage } from '@ionic/storage';
import { C } from './../providers/constants';
import { ValueGlobal, SearchHotel } from '../providers/book-service';
import { GlobalFunction, ActivityService } from './../providers/globalfunction';

import { NetworkProvider } from '../network-provider.service';
import { Network } from '@ionic-native/network/ngx';
import { UserReviewsPage } from '../userreviews/userreviews';
import { OverlayEventDetail } from '@ionic/core';
import { UserFeedBackPage } from '../userfeedback/userfeedback';
import $ from 'jquery';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { flightService } from '../providers/flightService';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { MytripService } from '../providers/mytrip-service.service';
import { SafariViewController } from '@ionic-native/safari-view-controller/ngx';
import {
  clearInterval
} from 'timers';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { tourService } from '../providers/tourService';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { normalizeURL } from 'ionic-angular';
import { forEach } from '@angular/router/src/utils/collection';
import { MytripTicketQrcodeSlidePage } from '../mytripticketqrcodeslide/mytripticketqrcodeslide';
//import { PDFGenerator } from '@awesome-cordova-plugins/pdf-generator/ngx';
@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage {

  @ViewChild('scrollArea') scrollArea: IonContent;
  @ViewChild(IonContent) content: IonContent;
  @ViewChild('mySlider') slider: IonSlides;
  @Input() rootpage: any;

  public listMyTrips = [];
  public listHistoryTrips = [];
  public listRequestTrips = [];
  public listAlltrips = [];
  public listSupport = [];
  public currentTrip = 0;
  public currentRQTrip = 0;
  public showCalCin = false;
  public showCalCout = false;
  public datecin: Date;
  public datecout: Date;
  public cindisplay; coutdisplay;
  public cinRQdisplay; coutRQdisplay;
  public cincombodeparturedisplay; cincomboarrivaldisplay; coutcombodeparturedisplay; coutcomboarrivaldisplay;
  public cincombodeparturelocationdisplay; cincomboarrivallocationdisplay; coutcombodeparturelocationdisplay; coutcomboarrivallocationdisplay;
  public cincombodeparturetimedisplay; cincomboarrivaltimedisplay; coutcombodeparturetimedisplay; coutcomboarrivaltimedisplay;
  public cincombodepartureflightnumberdisplay; cincomboarrivalflightnumberdisplay; coutcombodepartureflightnumberdisplay; coutcomboarrivalflightnumberdisplay;
  public cin; cout; coutthu; cinthu; numberOfDay = 0; numberOfRQDay = 0;
  public hasdata = false;
  public hasloaddata = false;
  public hasloadRQdata = false;
  public activeTabTrip = 1;
  public tabtrip: string = "nexttrip";
  public isShowConfirm = false;
  private tabBarHeight;
  private topOrBottom: string;
  private contentBox;
  public currentPosition = 0;
  public intervalID;
  public isRequestTrip = false;
  public isConnected;
  public loader: any;
  public myloader;
  topDealData = [];
  slide;
  Description: any;
  loginuser: any;
  mytripcount = 0;
  requestripcount = 0;
  historytripcount = 0;
  reloadcount = 0;
  arrHotelReviews: any[];
  nexttripcounttext = '';
  historytripcounttext = ''; popover; arrinsurrance = [];
  arrchildinsurrance: any = [];
  arrchild: any = [];
  private subscription: Subscription;
  listClaimed: any = [];
  listClaimedFlightOriginal: any = [];
  firstload: any = true;
  departCodeDisplay: string;
  arrivalCodeDisplay: string;
  isFlyBooking: boolean = false;
  textDeparture: string;
  textRegionDepart: string;
  textRegionReturn: string;
  textAirpotDepart: string;
  textAirpotReturn: string;
  textReturn: string;
  textArrivalRegionDepart: string;
  textArrivalRegionReturn: string;
  textAirpotArrivalDepart: string;
  textAirpotArrivalReturn: string;
  listWeek: any = [];
  mylistOrders: any = [];
  listOrderDinnerActive: any;
  listOrderActive: any;
  loaddatadone: boolean;
  memberid: string;
  showOnlyOne: any;
  detail: any;
  pageIndex: any = 1;
  pageSize: any = 25;
  totalTrip: any = 0;
  _infiniteScroll: any;
  options: NativeTransitionOptions = {
    direction: 'left',
    duration: 500,
    slowdownfactor: 3,
    slidePixels: 20,
    iosdelay: 100,
    androiddelay: 150,
    fixedPixelsTop: 0,
    fixedPixelsBottom: 60
  }
  enableheader = false;
  itemsks = [1, 2, 3, 4, 5, 6];
  cincombodeparture: string;
  cincomboarrival: string;
  noLoginObj: any;
  childList: any;
  expandDivTourNotes: boolean;
  expandDivTourInfo: boolean;
  expandDivIncludePrice: boolean;
  bookingjson: any;
  totalCost = 0;
  flightRoundTripStr: string;
  totalPaxStr: any;
  loadsummarydone: any;

  baggageHandedDepart; baggageHandedReturn; totalVMB = 0;
  totalService: number;
  luggageSignedDepart: any;
  departConditionInfo: any;
  returnConditionInfo: any;
  luggageSignedReturn: any;
  isdkv = false;
  ishdnp = false;
  isptp = false;
  isttt = false;
  booking_json_data: any;
  PromotionNote: any;
  ischeckStops = false;

  departAirport: any;
  returnAirport: any;
  totalDichung = 0;
  coutDC: number;
  totalHotel: number;
  HotelPolicies: any;
  amount_after_tax: any;
  qrcodeurl: string;
  objectDetail:any;
  isTTV=false;
  includePrice: any;
  ischeckqrLink=false;
  _departTicketInfoCRM: any;
  _returnTicketInfoCRM: any;
  objSummary: any;
  expandPrice: boolean;
  ticketDownloadFiles: any=[];
  showIncludeContent: string;
  buttonCheckin: boolean = true;
  buttonBooking: any;
  constructor(public platform: Platform, public navCtrl: NavController, public searchhotel: SearchHotel, public popoverController: PopoverController,
    public storage: Storage, public zone: NgZone, public modalCtrl: ModalController,
    public alertCtrl: AlertController, public valueGlobal: ValueGlobal, public gf: GlobalFunction, public loadingCtrl: LoadingController,
    public network: Network,
    public networkProvider: NetworkProvider,
    private router: Router,
    private actionsheetCtrl: ActionSheetController,
    public toastCtrl: ToastController,
    public activityService: ActivityService,
    public _flightService: flightService, public clipboard: Clipboard,
    public _mytripservice: MytripService,
    public _tourService: tourService,
    private safariViewController: SafariViewController,
    private socialSharing: SocialSharing,
    private file: File,private transfer:FileTransfer
    //private pdfGenerator: PDFGenerator
  ) {
    this.handleSplashScreen();

    //this.getdata();
    storage.get('auth_token').then(auth_token => {
      zone.run(() => {
        this.loginuser = auth_token;
      })

    });
    storage.get('jti').then((uid: any) => {
      if (uid) {
        this.memberid = uid;
      }
    })
    //google analytic
    gf.googleAnalytion('mytrips', 'Search', '');

    //this.storage.remove("listAirport");
    this.storage.get("listAirport").then((data) => {
      if (!data) {
        this.loadLocation().then((data) => {
          this._flightService.listAirport = data;
        });
      } else {
        this._flightService.listAirport = data;
      }
    })
    this.ionViewWillEnter();
    this.platform.resume.subscribe(async () => {
      this.ionViewWillEnter();
      if (this.networkProvider.isOnline()) {
        this.isConnected = true;
        this.networkProvider.setNetworkStatus(true);
        this.gf.setNetworkStatus(true);
      } else {
        this.isConnected = false;
        this.networkProvider.setNetworkStatus(false);
        this.gf.setNetworkStatus(false);
        this.gf.showWarning('Không có kết nối mạng', 'Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng', 'Đóng');

        this.storage.get('listmytrips').then(data => {
          if (data) {
            this.loadMytrip(data, false);
          }
        })
      }
    })

    console.log(this.rootpage);
  }
  fileTransfer: FileTransferObject = this.transfer.create();
  public async ngOnInit() {
    var se = this;
    //Gọi hàm refresh claim bảo hiểm khi back từ trang hoàn thành claim
    await se.refreshInsurranceInfo();
    se.subscription = se.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && (event.url === '/app/tabs/tab3?refresh=true')) {
        se.refreshInsurranceInfo();
      }
    });

    se._mytripservice.orderPageState.pipe().subscribe((data) => {
      se.ionViewWillEnter();
      se.enableheader = true;

    })

    se._flightService.itemMenuFlightClick.pipe().subscribe((data) => {
      if (data == 2) {
        se.zone.run(() => {
          se.enableheader = true;
        })
      }
    })

    se._tourService.itemPaymentDone.pipe().subscribe((data) => {
      if (data) {
        se.zone.run(() => {
          se.enableheader = true;
        })
      }
    })

    se._mytripservice.itemLoginUser.pipe().subscribe((checkuser) => {
      if (checkuser) {
        se.storage.get('auth_token').then(auth_token => {
          se.zone.run(() => {
            se.loginuser = auth_token;
          })

        });
        se.listMyTrips = [];
        se.hasloaddata = false;
        se.loaddatadone = false;
        se.hasdata = false;
        se.mytripcount = 0;
        se.pageIndex = 1;
        se.isConnected = true;
        se.expandDivIncludePrice = false;
        se.expandDivTourInfo = false;
        se.expandDivTourNotes = false;
        if (se.networkProvider.isOnline()) {
          se.getdata(null, false);
          se._mytripservice.publicLoadDataMytripHistorySubject(1);
          se.getdata(null, true);
          //se.loadOrder();
        }
        else {
          se.isConnected = false;
          se.storage.get('listmytrips').then(data => {
            if (data) {
              se.loadMytrip(data, false);
              //se.loadOrder();
            }
          })
        }
      }
    })

    se._mytripservice.itemEnableHeader.pipe().subscribe((data) => {
      se.enableheader = true;
    })
  }

  async ionViewWillEnter() {
    var se = this;
    se.enableheader = true;
    se.storage.get('auth_token').then(auth_token => {
      se.zone.run(() => {
        se.loginuser = auth_token;
      })
    });
    se.storage.get('jti').then((uid: any) => {
      if (uid) {
        se.memberid = uid;
      }
    })
    if (se.listMyTrips.length > 0) {
      se.listMyTrips = [];
      se.mytripcount = 0;
      se.hasloaddata = false;
      se.loaddatadone = false;
      se.hasdata = false;
      se.pageIndex = 1;
      se.getdata(null, false);

      setTimeout(() => {
        se._mytripservice.publicLoadDataMytripHistorySubject(0);
        se.getdata(null, true);
      }, 1000)
      //se.loadOrder();
      if (se.activityService.insurranceBookingId) {
        se.refreshInsurranceInfo();
      }
      if (se.mytripcount + se.requestripcount > 0) {
        let totalnexttrip = se.mytripcount * 1 + se.requestripcount * 1;
        se.nexttripcounttext = " (" + totalnexttrip + ")";
      } else {
        se.nexttripcounttext = "";
      }
      if (se.historytripcount > 0) {
        se.historytripcounttext = " (" + se.historytripcount + ")";
      }

      //Update trạng thái đã thanh toán nếu thanh toán từ mytrip
      if (se.listMyTrips && se.listMyTrips.length > 0 && se.activityService.objPaymentMytrip && se.activityService.objPaymentMytrip.book) {
        se.listMyTrips.forEach(element => {
          if (element.HotelIdERP == se.activityService.objPaymentMytrip.trip.HotelIdERP && se.activityService.objPaymentMytrip.trip.payment_status == 1) {
            element.payment_status = 1;
          }
        });
        se.activityService.objPaymentMytrip = null;
      }
      if (se.listMyTrips && se.listMyTrips.length > 0 && se.currentTrip == se.listMyTrips.length) {
        se.currentTrip = 0;
      }
      if (se.gf.getParams('notifiBookingCode')) {
        se.storage.get('listmytrips').then(data => {
          if (data) {
            se.loadMytrip(data, false);
          }
        })
      }

    } else {
      se.loadPageData();
    }
    se.storage.get('auth_token').then(auth_token => {
      se.loginuser = auth_token;
    });

  }

  loadPageData() {
    var se = this;
    if (this.gf.getParams('notifiBookingCode') && !this.gf.getParams('selectedTab3')) {
      this.activeTabTrip = 1;
      this.tabtrip = 'nexttrip';
    }

    this.storage.get('auth_token').then((data: any) => {
      this.loginuser = data;
    })

    if (!this.activityService.tab3Loaded || (this.activityService.tab3Loaded && this.listAlltrips.length == 0)) {
      //this.gf.clearActivatedTab();
      this.mytripcount = 0;
      this.requestripcount = 0;
      this.historytripcount = 0;
      this.historytripcounttext = "";
      this.nexttripcounttext = "";
      //Kiểm tra mạng on/off để hiển thị
      if (this.networkProvider.isOnline()) {
        this.networkProvider.setNetworkStatus(true);
        this.gf.setNetworkStatus(true);
        this.isConnected = true;
       
        this.getdata(null, false);
        setTimeout(() => {
          this.getdata(null, true);
        }, 1000)

        //load dữ liệu topdeal suggest
        this.storage.get('listtopdealdefault').then((data: any) => {
          if (data && data.length > 0) {
            this.topDealData = data;
            //this.slide = data[0];
            this.loaddatatopdeal(data);
          } else {
            this.getHoteldeal();
          }
        })
      } else {
        this.isConnected = false;
        this.storage.get('listmytrips').then(data => {
          if (data) {
            this.loadMytrip(data, false);
          }
        })
      }
    }
  }

  ionViewDismiss() {
    this.hasloaddata = false;
    this.loaddatadone = false;
  }

  ionViewWillLeave() {
    this.zone.run(() => {
      clearInterval(this.intervalID);

    })
    this.hasloaddata = false;
    this.loaddatadone = false;

  }

  async presentLoadingData() {
    this.myloader = await this.loadingCtrl.create({
    });
    this.myloader.present();
  }
  async presentLoadingDuration(timeout) {
    let loader = await this.loadingCtrl.create({
      message: "",
      duration: timeout
    });
    loader.present();
  }

  /***
   * Hàm load thông tin phòng
   */
  getListSupportByUser(auth_token) {
    var se = this;
    if (auth_token) {
      var text = "Bearer " + auth_token;
      var options = {
        method: 'GET',
        url: C.urls.baseUrl.urlMobile + '/mobile/OliviaApis/BookingMemberDetailByUser',
        timeout: 10000, maxAttempts: 5, retryDelay: 2000, retryCount: 0,
        headers:
        {
          'accept': 'application/json',
          'content-type': 'application/json-patch+json',
          authorization: text
        }
      };
      request(options, function (error, response, body) {
        if (error) {
          error.page = "mytrips";
          error.func = "getListSupportByUser";
          error.param = JSON.stringify(options);

          if (options.retryCount > 0) {
            C.writeErrorLog(error, response);
          }
          options.retryCount++;
          throw new Error(error)
        } else {
          options.retryCount++;
          if (body) {
            se.zone.run(() => {
              se.listSupport = JSON.parse(body);
              se._mytripservice.listSupport = se.listSupport;
            });
          } else {
            if (response.statusCode == 400 || response.statusCode == 401) {
              if (se.isShowConfirm) return;
              //se.showConfirm();
              se.isShowConfirm = true;
            }
          }
        }
      });
    }
  }

  getdata(token, ishistory) {
    var se = this;
    if (!se.isConnected) {
      se.gf.showToastWarning('Thiết bị đang không kết nối mạng, vui lòng bật kết nối để tiếp tục thao tác!');
      se.hasloaddata = true;
      return;
    }
    se.storage.get('auth_token').then(auth_token => {
      if (auth_token || token) {
        var text = "Bearer " + (token ? token : auth_token);
        var options = {
          method: 'GET',
          url: C.urls.baseUrl.urlMobile + '/api/dashboard/getMyTripPaging?getall=true&getHistory=' + ishistory + '&pageIndex=' + se.pageIndex + '&pageSize=' + (ishistory ? 20 : 25),
          //url: C.urls.baseUrl.urlMobile + '/api/dashboard/getMyTripPaging?getall=true&memberid=17c3fd5b-a372-41dd-936b-69beac9aa933&getHistory=' + ishistory + '&pageIndex=' + se.pageIndex + '&pageSize=' + (ishistory ? 20 : 25),
          
          headers:
          {
            'accept': 'application/json',
            'content-type': 'application/json-patch+json',
            authorization: text
          }
        };
        request(options, function (error, response, body) {
          if (error) {
            error.page = "mytrips";
            error.func = "getdata";
            error.param = JSON.stringify(options);
            C.writeErrorLog(error, response);
          }
          else if (response.statusCode == 401) {
            se.storage.get('jti').then((memberid) => {
              se.storage.get('deviceToken').then((devicetoken) => {
                se.gf.refreshToken(memberid, devicetoken).then((token) => {
                  setTimeout(() => {
                    se.getdatanewtoken(token, ishistory);
                    //se.loadOrder();
                  }, 100)
                });

              })
            })
          }
          else {
            if (body) {
              se.zone.run(() => {

                let lstTrips = JSON.parse(body);
                if (!ishistory) {
                  se._mytripservice.listmytrips = lstTrips;
                  se.storage.get('listmytrips').then(data => {
                    if (data) {
                      se.storage.remove('listmytrips').then(() => {
                        se.storage.set('listmytrips', lstTrips);
                      })
                    } else {
                      se.storage.set('listmytrips', lstTrips);
                    }
                  })
                  se.loadMytrip(lstTrips, ishistory);

                } else {
                  //se._mytripservice.listHistoryTrips = lstTrips.trips;
                  se.storage.get('listmytripshistory').then(data => {
                    if (data) {
                      se.storage.remove('listmytripshistory').then(() => {
                        se.storage.set('listmytripshistory', lstTrips);
                      })
                    } else {
                      se.storage.set('listmytripshistory', lstTrips);
                    }
                  })
                  se.loadMytrip(lstTrips, ishistory);
                  se._mytripservice.totalHistoryTrip = lstTrips.total;
                  
                }

                se.hideloader();
              });
            } else {
              if (response.statusCode != 200) {
                se.listMyTrips = [];
                se.listHistoryTrips = [];
                se.hasloaddata = true;
                se.mytripcount = 0;
                se.historytripcount = 0;
                se.hideloader();

              }
              else if (response.statusCode == 401) {
                se.storage.get('jti').then((memberid) => {
                  se.storage.get('deviceToken').then((devicetoken) => {
                    se.gf.refreshToken(memberid, devicetoken).then((token) => {
                      setTimeout(() => {
                        se.getdatanewtoken(token, ishistory);
                      }, 100)
                    });

                  })
                })
              }
            }

          }

        });
      } else {
        se.hasloaddata = true;
        se.listMyTrips = [];
        se.listHistoryTrips = [];
        se.hideloader();
        se.mytripcount = 0;
        se.historytripcount = 0;
        //se.refreshToken();
      }
    });
    setTimeout(() => {
      if (se.myloader) {
        se.myloader.dismiss();
      }
    }, 1000)
  }

  getdatanewtoken(token, ishistory) {
    var se = this;
    if (token) {
      var text = "Bearer " + token;
      var options = {
        method: 'GET',
        url: C.urls.baseUrl.urlMobile + '/api/dashboard/getMyTripPaging?getall=true&getHistory=' + ishistory + '&pageIndex=' + se.pageIndex + '&pageSize=' + (ishistory ? 20 : 25),
        headers:
        {
          'accept': 'application/json',
          'content-type': 'application/json-patch+json',
          authorization: text
        }
      };
      request(options, function (error, response, body) {
        if (error) {
          error.page = "mytrips";
          error.func = "getdata";
          error.param = JSON.stringify(options);
          C.writeErrorLog(error, response);
        }

        else {
          if (body) {
            se.zone.run(() => {

              let lstTrips = JSON.parse(body);
              if (!ishistory) {
                se._mytripservice.listmytrips = lstTrips;
                se.storage.get('listmytrips').then(data => {
                  if (data) {
                    se.storage.remove('listmytrips').then(() => {
                      se.storage.set('listmytrips', lstTrips);
                    })
                  } else {
                    se.storage.set('listmytrips', lstTrips);
                  }
                })
                se.loadMytrip(lstTrips, ishistory);
              } else {
                //se._mytripservice.listHistoryTrips = lstTrips.trips;
                se.storage.get('listmytripshistory').then(data => {
                  if (data) {
                    se.storage.remove('listmytripshistory').then(() => {
                      se.storage.set('listmytripshistory', lstTrips);
                    })
                  } else {
                    se.storage.set('listmytripshistory', lstTrips);
                  }
                })
                se.loadMytrip(lstTrips, ishistory);
                se._mytripservice.totalHistoryTrip = lstTrips.total;
                
              }
              se.hideloader();
            });
          } else {
            if (response.statusCode != 200) {
              se.listMyTrips = [];
              se.listHistoryTrips = [];
              se.hasloaddata = true;
              se.mytripcount = 0;
              se.historytripcount = 0;
              se.hideloader();

            }

          }

        }

      });
    } else {
      se.hasloaddata = true;
      se.listMyTrips = [];
      se.listHistoryTrips = [];
      se.mytripcount = 0;
      se.historytripcount = 0;
      se.hideloader();
      //se.refreshToken();
    }
    setTimeout(() => {
      if (se.myloader) {
        se.myloader.dismiss();
      }
    }, 500)
  }

  loadMytrip(listtrips, ishistory) {
    var se = this;
    se.loadLocation().then((data) => {

      se.valueGlobal.countclaim = 0;
      se.totalTrip = listtrips.total;

      let lstTrips = listtrips;
      //List trip sắp đi

      if (!ishistory) {
        if (listtrips.trips && listtrips.trips.length == 0) {
          se.pageIndex = 1;
        }
        if (lstTrips && lstTrips.trips && lstTrips.trips.length > 0) {
          se.hasdata = true;
          lstTrips.trips.forEach(element => {

            if (!se.gf.checkExistsItemInArray(se.listMyTrips, element, 'order')) {
              if (element.booking_id && (element.booking_id.indexOf("FLY") == -1 && element.booking_id.indexOf("VMB") == -1) && element.booking_type != "CB_FLY_HOTEL") {
                if (element.flight_ticket_info && element.flight_ticket_info.indexOf("VXR") != -1) {
                  element.booking_type = "COMBO_VXR";
                }
                else if (element.booking_id.indexOf('VC') != -1) {
                  element.booking_type = "TICKET";//TOUR
                  element.VVCCheckinDisplay =se.gf.getDayOfWeek(se.gf.getCinIsoDate(element.checkInDate)).daynameshort + ", " +  moment(element.checkInDate).format('DD-MM-YYYY');
                  element.VVCCheckinDisplay1 = moment(element.checkInDate).format('DD-MM-YYYY');
                }
                //tour
                else if (element.booking_id && (element.booking_id.indexOf("DL") != -1 || element.booking_id.indexOf("TO") != -1)) {
                  element.booking_type = "TOUR";
                  element.tourCheckinDisplay = moment(element.checkInDate).format('DD-MM-YYYY');
                  let _listpax = element.totalPaxStr.split('|');
                  _listpax = _listpax.map((p) => { return p.trim().split(' ').slice(1).join(' ').replace('n', 'N').replace('t', 'T') + ' x' + p.trim().split(' ')[0] });
                  element.tourListPax = _listpax;
                }
                else if (element.booking_type == 'COMBO_FLIGHT'){
                   //check đã xuất vé + có checkin online
                   element.bookingjson = JSON.parse(element.booking_json_data);
                   console.log(element.bookingjson);
                  if ((element.payment_status == 1 || element.payment_status == 5) && element.bookingsComboData[0].issueTicketDate != '' && (!element.bookingsComboData[1] || (element.bookingsComboData[1] && element.bookingsComboData[1].issueTicketDate != ''))) {
                    let objjson = JSON.parse(element.booking_json_data);
                    let _checked = objjson.some(item => { return item.Passengers && item.Passengers.some(p => p.CheckinInfo && p.CheckinInfo.indexOf('http') != -1) });
                    element.hadCheckinOnline = _checked;
                    element.hadCheckinOnlineDepart=false;
                    element.hadCheckinOnlineReturn=false;
                    if (objjson[0]) {
                      for (let i = 0; i < objjson[0].Passengers.length; i++) {
                        const el = objjson[0].Passengers[i];
                        if (el.CheckinInfo && el.CheckinInfo.indexOf('http') != -1) {
                          element.hadCheckinOnlineDepart = true;
                          break;
                        }
                      }
                    }
                    if (objjson.length > 1 && objjson[1]) {
                      for (let i = 0; i < objjson[1].Passengers.length; i++) {
                        const el = objjson[1].Passengers[i];
                        if (el.CheckinInfo && el.CheckinInfo.indexOf('http') != -1) {
                          element.hadCheckinOnlineReturn = true;
                          break;
                        }
                      }
                    }
                    // console.log(JSON.parse(element.booking_json_data));
                  }
                }
                element.isFlyBooking = false;

                //if (element.payment_status != 3 && element.payment_status != -2) {
                if (element.avatar && element.avatar.indexOf("104x104") == -1 && element.avatar.indexOf('i.travelapi.com') == -1 && element.booking_type != 'TICKET') {

                  const hasCdn1 = element.avatar.includes("cdn1");
                  if (hasCdn1) {
                    const imageUrl = element.avatar;
                    const newImageUrl = imageUrl.replace(/(\.\w+)$/, "-104x104$1");
                    element.avatar = newImageUrl;
                  }
                  // if (element.avatar.indexOf('jpeg') != -1 || element.avatar.indexOf('webp') != -1) {
                  //   urlavatar = element.avatar.substring(0, element.avatar.length - 5);
                  //   tail = element.avatar.substring(element.avatar.length - 5, element.avatar.length);
                  // } else {
                  //   urlavatar = element.avatar.substring(0, element.avatar.length - 4);
                  //   tail = element.avatar.substring(element.avatar.length - 4, element.avatar.length);
                  // }
               
                }
                if (element.avatar) {
                  element.avatar = (element.avatar.toLocaleString().trim().indexOf("http") != -1) ? element.avatar : ('https:' + element.avatar);
                }
                if (element.delivery_payment_date) {
                  let arrpaymentdate = element.delivery_payment_date.split("T");
                  let hour = '', day = '';
                  let arrday;
                  if (arrpaymentdate && arrpaymentdate.length > 1) {
                    //hour = arrpaymentdate[1].substring(0,5);
                    let arrhour = arrpaymentdate[1].substring(0, 5).split(":");
                    if (arrhour && arrhour.length > 0) {
                      hour = arrhour[0].toString() + "h" + arrhour[1].toString();
                    }
                    arrday = arrpaymentdate[0].split('-');
                    if (arrday && arrday.length > 0) {
                      day = arrday[2].toString() + "/" + arrday[1].toString();
                    }
                  }
                  element.deliveryPaymentDisplay = "" + hour + ", " + day;

                  let arrhours = arrpaymentdate[1].split(":");
                  let today = new Date();
                  let d = new Date(Number(arrday[0]), Number(arrday[1]) - 1, Number(arrday[2]), Number(arrhours[0]), Number(arrhours[1]), 0);
                  let diffminutes = moment(d).diff(today, 'minutes');
                  //Quá hạn thanh toán thì không hiển thị thông tin thanh toán
                  if (diffminutes < 0) {
                    element.deliveryPaymentDisplay = "";
                  }
                  else {
                    let _timezone = new Date().getTimezoneOffset();
                    if (_timezone != -420) {
                      let arr1 = element.delivery_payment_date.toString().split('T');
                      let arr2 = arr1[1].split(':')
                      let arr3 = arr1[0].split('-');

                      element.delivery_payment_time_display = arr2[0] + ':' + arr2[1];
                      element.delivery_payment_date_display = arr3[2] + '-' + arr3[1] + '-' + arr3[0];
                    } else {
                      element.delivery_payment_time_display = moment(element.delivery_payment_date).format("HH:mm");
                      element.delivery_payment_date_display = moment(element.delivery_payment_date).format("DD-MM-YYYY");
                    }

                    if (!(element.pay_method == 3 || element.pay_method == 51 || element.pay_method == 2)) {
                      var obj = se.gf.getbank(element.pay_method);
                      element.urlimgbank = obj.urlimgbank;
                      element.textbank = obj.textbank;
                      element.accountNumber = obj.accountNumber;
                      element.bankName = obj.bankName;
                      element.url = obj.url;
                    } else if (element.pay_method == 3 && element.payment_info) {
                      if (element.payment_info && element.payment_info.length > 0) {
                        element.payment_info = JSON.parse(element.payment_info);
                      }
                      element.PaymentCode = element.payment_info.PaymentCode;
                    }

                  }
                  if (diffminutes < 60) {
                    element.paymentBefore = diffminutes + "'";
                    if (diffminutes < 15) {
                      element.deliveryPaymentDisplay = "";
                    }
                  } else if (diffminutes >= 60) {
                    let hours = Math.floor(diffminutes / 60);
                    let minutes = diffminutes - (hours * 60);
                    element.paymentBefore = hours + "h" + minutes + "'";
                  }

                  if (element.booking_type=="TICKET") {
                    let arrtemp = element.inclusion.split('|');
                    element.paxDisplay = arrtemp[6];
                    if (arrtemp[7]) {
                      let kkdayValue = JSON.parse(arrtemp[7]);
                      element.kkdayRender = JSON.parse(arrtemp[8]);
                     
                      element.objdataRaw = element.kkdayRender[1].dataRaw.filter((el) => { return kkdayValue.traffic.car.s_location==el.id});
                      // console.log( element.objLocation);
                      // console.log(element.kkdayRender);
                    }
                    
                  }
                  
                  if (element.amount_after_tax) {
                    element.priceShow = Math.round(element.amount_after_tax).toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
                  }
                }

                if (element.booking_type == "20" || element.booking_id.indexOf('OFF') != -1 || element.booking_id.indexOf('TO') != -1) {
                  if (element.hotel_name && (element.room_id || element.hotel_name.toUpperCase().indexOf('VOUCHER') != -1)) {
                    element.bookingOffType = 1;//KS
                  }
                  else if (element.hotel_name && (element.hotel_name.toUpperCase().indexOf('VIETJET') != -1
                    || element.hotel_name.toUpperCase().indexOf('VIETNAM') != -1)
                    || element.hotel_name.toUpperCase().indexOf('JETSTAR') != -1
                    || element.hotel_name.toUpperCase().indexOf('BAMBOO') != -1
                    || element.hotel_name.toUpperCase().indexOf('VMB') != -1
                    || element.hotel_name.toUpperCase().indexOf('VÉ MÁY BAY') != -1) {
                    element.bookingOffType = 2;//VMB
                  }
                  else if (element.hotel_name && (element.hotel_name.toUpperCase().indexOf('TRANSFER') != -1 || element.hotel_name.toUpperCase().indexOf('XE') != -1)) {
                    element.bookingOffType = 3;//DC
                  } else if (element.booking_id.indexOf('TO') != -1) {
                    element.bookingOffType = 4;//TOUR
                  }
                  element.delivery_payment_date_display = "";
                }

                element.isRequestTrip = false;
                //date display
                let _timezone = new Date().getTimezoneOffset();
                if (_timezone != -420) {
                  element.checkInDisplayCity = se.gf.getDayOfWeek(se.gf.getCinIsoDate(element.checkInDate)).daynameshort + ", " + moment(se.gf.getCinIsoDate(element.checkInDate)).format('DD-MM-YYYY');
                  element.checkOutDisplayCity = se.gf.getDayOfWeek(se.gf.getCinIsoDate(element.checkOutDate)).daynameshort + ", " + moment(se.gf.getCinIsoDate(element.checkOutDate)).format('DD-MM-YYYY');

                  element.checkInDisplayShort = se.gf.getDayOfWeek(se.gf.getCinIsoDate(element.checkInDate)).daynameshort + ", " + moment(se.gf.getCinIsoDate(element.checkInDate)).format('DD-MM');
                  element.checkOutDisplayShort = se.gf.getDayOfWeek(element.checkOutDate).daynameshort + ", " + moment(element.checkOutDate).format('DD-MM-YYYY');
                }
                else {
                  element.checkInDisplayCity = se.gf.getDayOfWeek(element.checkInDate).daynameshort + ", " + moment(element.checkInDate).format('DD-MM-YYYY');
                  element.checkOutDisplayCity = se.gf.getDayOfWeek(element.checkOutDate).daynameshort + ", " + moment(element.checkOutDate).format('DD-MM-YYYY');

                  element.checkInDisplayShort = se.gf.getDayOfWeek(element.checkInDate).daynameshort + ", " + moment(element.checkInDate).format('DD-MM');
                  element.checkOutDisplayShort = se.gf.getDayOfWeek(element.checkOutDate).daynameshort + ", " + moment(element.checkOutDate).format('DD-MM-YYYY');
                }

                element.departAirport = se.getAirportByCode(element.departCode);
                element.returnAirport = se.getAirportByCode(element.arrivalCode);
                se.getRatingStar(element);

                
                // if (element.booking_id=='DL0828508') {
                //   se.listMyTrips.push(element);
                // }
              
                se.listMyTrips.push(element);
                se.mytripcount++;
                if (element.insuranceInfo && element.insuranceInfo.adultList.length > 0) {
                  if (se.checkItemHasNotClaim(element.insuranceInfo.adultList) || se.checkItemHasNotClaim(element.insuranceInfo.childList)) {
                    se.zone.run(() => {
                      se.valueGlobal.countclaim++;
                    })
                  }
                }

                //tính giờ bay
                if (element.bookingsComboData && element.bookingsComboData.length > 0) {
                  let diffhours = element.bookingsComboData[0].arrivalTime ? element.bookingsComboData[0].arrivalTime.replace(':', '') * 1 - element.bookingsComboData[0].departureTime.replace(':', '') * 1 : 0;
                  if (diffhours) {
                    let str = diffhours.toString();
                    let m = str.substring(str.length - 2, str.length);
                    let h = str.substring(0, str.length - 2);
                    h = h.length < 2 ? "0" + h + "h" : h + "h";
                    m = m != "00" ? m + "m" : "";
                    element.bookingsComboData[0].flightTimeDisplay = h + m;
                  }
                  let ddate = element.checkInDate;
                  let _timezone = new Date().getTimezoneOffset();
                  if (_timezone != -420) {
                    element.checkInDisplayCity = se.gf.getDayOfWeek(element.checkInDate).daynameshort + ", " + moment(element.checkInDate).format("DD-MM-YYYY");
                    element.checkOutDisplayCity = se.gf.getDayOfWeek(element.checkOutDate).daynameshort + ", " + moment(element.checkOutDate).format("DD-MM-YYYY");
                  } else {
                    element.checkInDisplayCity = se.gf.getDayOfWeek(se.gf.getCinIsoDate(element.checkInDate)).daynameshort + ", " + moment(se.gf.getCinIsoDate(element.checkInDate)).format("DD-MM-YYYY");
                    element.checkOutDisplayCity = se.gf.getDayOfWeek(se.gf.getCinIsoDate(element.checkOutDate)).daynameshort + ", " + moment(se.gf.getCinIsoDate(element.checkOutDate)).format("DD-MM-YYYY");
                  }

                  //Thay mới ngày bay
                  if (element.bookingsComboData) {
                    if (element.bookingsComboData && element.bookingsComboData.length > 1) {

                      for (let i = 0; i < 2; i++) {
                        const elementNew = element.bookingsComboData[i];
                        if (i == 0) {
                          if (elementNew.departureDate && !elementNew.departureDateNew) {
                            let newdate;
                            if (elementNew.departureDate.indexOf('-') != -1) {
                              newdate = elementNew.departureDate.split('-');
                            }
                            if (elementNew.departureDate.indexOf('/') != -1) {
                              newdate = elementNew.departureDate.split('/');
                            }
                            let d;
                            if (newdate && newdate.length > 1) {
                              d = new Date(Number(newdate[2]), Number(newdate[1]) - 1, Number(newdate[0]));
                            }
                            // element.checkInDisplay = se.gf.getDayOfWeek(elementNew.departureDate).daynameshort+ ", " + moment(elementNew.departureDate).format("DD-MM-YYYY");
                            elementNew.checkInDisplay = se.gf.getDayOfWeek(d).daynameshort + ", " + moment(d).format("DD-MM-YYYY");
                          }
                          if (elementNew.departureDateNew) {
                            let newdate;
                            if (elementNew.departureDateNew.indexOf('-') != -1) {
                              newdate = elementNew.departureDateNew.split('-');
                            }
                            if (elementNew.departureDateNew.indexOf('/') != -1) {
                              newdate = elementNew.departureDateNew.split('/');
                            }
                            let d;
                            if (newdate && newdate.length > 1) {
                              d = new Date(Number(newdate[2]), Number(newdate[1]) - 1, Number(newdate[0]));
                            }
                            // element.checkInDisplay = se.gf.getDayOfWeek(elementNew.departureDateNew).daynameshort+ ", " + moment(elementNew.departureDateNew).format("DD-MM-YYYY");
                            elementNew.checkInDisplay = se.gf.getDayOfWeek(d).daynameshort + ", " + elementNew.departureDateNew;
                          }
                        } else {
                          if (elementNew.departureDate && !elementNew.departureDateNew) {
                            let newdate;
                            if (elementNew.departureDate.indexOf('-') != -1) {
                              newdate = elementNew.departureDate.split('-');
                            }
                            if (elementNew.departureDate.indexOf('/') != -1) {
                              newdate = elementNew.departureDate.split('/');
                            }
                            let d;
                            if (newdate && newdate.length > 1) {
                              d = new Date(Number(newdate[2]), Number(newdate[1]) - 1, Number(newdate[0]));
                            }
                            // element.checkInDisplay = se.gf.getDayOfWeek(elementNew.departureDate).daynameshort+ ", " + moment(elementNew.departureDate).format("DD-MM-YYYY");
                            elementNew.checkOutDisplay = se.gf.getDayOfWeek(d).daynameshort + ", " + moment(d).format("DD-MM-YYYY");
                          }
                          if (elementNew.departureDateNew) {
                            let newdate;
                            if (elementNew.departureDateNew.indexOf('-') != -1) {
                              newdate = elementNew.departureDateNew.split('-');
                            }
                            if (elementNew.departureDateNew.indexOf('/') != -1) {
                              newdate = elementNew.departureDateNew.split('/');
                            }
                            let d;
                            if (newdate && newdate.length > 1) {
                              d = new Date(Number(newdate[2]), Number(newdate[1]) - 1, Number(newdate[0]));
                            }
                            // element.checkInDisplay = se.gf.getDayOfWeek(elementNew.departureDateNew).daynameshort+ ", " + moment(elementNew.departureDateNew).format("DD-MM-YYYY");
                            elementNew.checkOutDisplay = se.gf.getDayOfWeek(d).daynameshort + ", " + elementNew.departureDateNew;
                          }
                        }

                      }
                    }
                  }

                  if (element.bookingsComboData[1]) {
                    let diffhours = element.bookingsComboData[1].arrivalTime ? element.bookingsComboData[1].arrivalTime.replace(':', '') * 1 - element.bookingsComboData[1].departureTime.replace(':', '') * 1 : 0;
                    if (diffhours) {
                      let str = diffhours.toString();
                      let m = str.substring(str.length - 2, str.length);
                      let h = str.substring(0, str.length - 2);
                      h = h.length < 2 ? "0" + h + "h" : h + "h";
                      m = m != "00" ? m + "m" : "";
                      element.bookingsComboData[1].flightTimeDisplay = h + m;
                    }

                    // let rdate = element.checkOutDate;
                    // element.bookingsComboData[1].checkOutDisplay = se.gf.getDayOfWeek(rdate).daynameshort+ ", " + moment(rdate).format('DD-MM-YYYY');
                  }
                  element.arrPickupDropoff = [];
                  element.bookingsComboData.forEach(el => {
                    if (el.trip_Code == "GO" || el.trip_Code == "RETURN" || el.trip_Code == "GOROUNDTRIP" || el.trip_Code == "RETURNROUNDTRIP") {
                      element.isPickupDropoff = true;
                      el.sortPD = el.trip_Code == "GO" ? 1 : (el.trip_Code == "GOROUNDTRIP" ? 2 : (el.trip_Code == "RETURN" ? 3 : 4));
                      element.arrPickupDropoff.push(el);
                      if (el.departureDate) {
                        let newdate = el.departureDate.split('/');
                        if (newdate && newdate.length > 1) {
                          let d = new Date(Number(newdate[2]), Number(newdate[1]) - 1, Number(newdate[0]));
                          el.departureDateDisplay = moment(d).format("DD-MM");
                        }

                      }

                    }

                    if (el.airlineName.toLowerCase().indexOf('cathay') != -1) {
                      element.hasCathay = true;
                    }
                  });

                  if (element.arrPickupDropoff && element.arrPickupDropoff.length > 0) {
                    se.zone.run(() => element.arrPickupDropoff.sort(function (a, b) {
                      return a.sortPD - b.sortPD;
                    }))
                  }
                }

                //}
              }

              //list vmb
              else {
                if (element.flight_ticket_info && element.flight_ticket_info.indexOf("VXR") != -1) {
                  element.booking_type = "COMBO_VXR";
                }

                //if (element.payment_status != 3 && element.payment_status != -2) {
                //if (element.payment_status != 3) {
                if (element.avatar && element.avatar.indexOf("104x104") == -1 && element.avatar.indexOf('i.travelapi.com') == -1 && element.booking_type != 'TICKET') {
                  let urlavatar = element.avatar.substring(0, element.avatar.length - 4);
                  let tail = element.avatar.substring(element.avatar.length - 4, element.avatar.length);
                  element.avatar = urlavatar + "-" + "104x104" + tail;
                }
                if (element.avatar) {
                  element.avatar = (element.avatar.toLocaleString().trim().indexOf("http") != -1) ? element.avatar : ('https:' + element.avatar);
                }
                if (element.booking_id && (element.booking_id.indexOf("FLY") != -1 || element.booking_id.indexOf("VMB") != -1 || element.booking_type == "CB_FLY_HOTEL")) {
                  element.isFlyBooking = true;
                  //console.log(JSON.parse(element.booking_json_data));
                  //check đã xuất vé + có checkin online
                  element.bookingjson = JSON.parse(element.booking_json_data);
                   console.log(element.bookingjson);
                  if ((element.payment_status == 1 || element.payment_status == 5) && element.bookingsComboData[0].issueTicketDate != '' && (!element.bookingsComboData[1] || (element.bookingsComboData[1] && element.bookingsComboData[1].issueTicketDate != ''))) {
                    let objjson = JSON.parse(element.booking_json_data);
                    let _checked = objjson.some(item => { return item.Passengers && item.Passengers.some(p => p.CheckinInfo && p.CheckinInfo.indexOf('http') != -1) });
                    element.hadCheckinOnline = _checked;
                    element.hadCheckinOnlineDepart=false;
                    element.hadCheckinOnlineReturn=false;
                    if (objjson[0]) {
                      for (let i = 0; i < objjson[0].Passengers.length; i++) {
                        const el = objjson[0].Passengers[i];
                        if (el.CheckinInfo && el.CheckinInfo.indexOf('http') != -1) {
                          element.hadCheckinOnlineDepart = true;
                          break;
                        }
                      }
                    }
                    if (objjson.length > 1 && objjson[1]) {
                      for (let i = 0; i < objjson[1].Passengers.length; i++) {
                        const el = objjson[1].Passengers[i];
                        if (el.CheckinInfo && el.CheckinInfo.indexOf('http') != -1) {
                          element.hadCheckinOnlineReturn = true;
                          break;
                        }
                      }
                    }
                    // console.log(JSON.parse(element.booking_json_data));
                  }
                  if (element.hotel_name.indexOf("VMB QT") != -1  || element.hotel_id == "F000002") {
                    element.isBookingVMBQT = true;
                    element.allowCheckinOnline = false;
                    if (element.booking_json_data) {
                    
                      // element.bookingjson = JSON.parse(element.booking_json_data);
                      if (element.bookingjson && element.bookingjson.length > 0) {
                        element.totalCost = 0;
                        let _timezone = new Date(element.checkInDate).getTimezoneOffset();
                        element.bookingjson.forEach((elementbkg,idx) => {
                          if (elementbkg.Supplier3rd){
                            element.isTravelPort = true;
                          }
                          if (elementbkg && elementbkg.Transits) {
                            element.totalCost += elementbkg.TotalCost * 1;

                            for (let index = 0; index < elementbkg.Transits.length; index++) {
                              const elementTran = elementbkg.Transits[index];
                              let cin = moment(new Date(this.gf.getCinIsoDate(elementTran.DepartTime.replace('/Date(', '').replace(')/', '') * 1))).format('YYYY-MM-DD');
                              if(element.bookingJsonDataParse && element.bookingJsonDataParse[idx] && element.bookingJsonDataParse[idx].transits[index] && element.bookingJsonDataParse[idx].transits[index].departTimeParse){
                                elementTran.DepartTimeDisplay = moment(element.bookingJsonDataParse[idx].transits[index].departTimeParse).format('HH:mm');
                                let _d = element.bookingJsonDataParse[idx].transits[index].departTimeParse;
                                elementTran.DepartDayDisplay = moment(_d).format('DD')+ "Thg " + moment(_d).format('MM');
                                if(elementTran.LandingTime){
                                  elementTran.LandingTimeDisplay = moment(element.bookingJsonDataParse[idx].transits[index].landingTimeParse).format('HH:mm');
                                  let _dr = element.bookingJsonDataParse[idx].transits[index].landingTimeParse;
                                  elementTran.LandingDayDisplay = moment(_dr).format('DD')+ "Thg " + moment(_dr).format('MM');
                                }
                                cin = moment(_d).format('YYYY-MM-DD');
                                }else{
                                if (_timezone != -420) {
                                  elementTran.DepartTimeDisplay = moment(new Date(elementTran.DepartTime.replace('/Date(', '').replace(')/', '') * 1 + _timezone * 60000 + 25200000)).format('HH:mm');
                                  elementTran.LandingTimeDisplay = moment(new Date(elementTran.LandingTime.replace('/Date(', '').replace(')/', '') * 1 + _timezone * 60000 + 25200000)).format('HH:mm');

                                  elementTran.DepartDayDisplay = moment(new Date(elementTran.DepartTime.replace('/Date(', '').replace(')/', '') * 1 + _timezone * 60000 + 25200000)).format('DD') + "Thg " + moment(new Date(elementTran.DepartTime.replace('/Date(', '').replace(')/', '') * 1 + _timezone * 60000 + 25200000)).format('MM');
                                  elementTran.LandingDayDisplay = moment(new Date(elementTran.LandingTime.replace('/Date(', '').replace(')/', '') * 1 + _timezone * 60000 + 25200000)).format('DD') + "Thg " + moment(new Date(elementTran.LandingTime.replace('/Date(', '').replace(')/', '') * 1 + _timezone * 60000 + 25200000)).format('MM');
                                  cin = moment(new Date(elementTran.DepartTime.replace('/Date(', '').replace(')/', '') * 1 + _timezone * 60000 + 25200000)).format('YYYY-MM-DD');

                                } else {
                                  elementTran.DepartTimeDisplay = moment(new Date(elementTran.DepartTime.replace('/Date(', '').replace(')/', '') * 1)).format('HH:mm');
                                  elementTran.LandingTimeDisplay = moment(new Date(elementTran.LandingTime.replace('/Date(', '').replace(')/', '') * 1)).format('HH:mm');
                                  elementTran.DepartDayDisplay = moment(new Date(this.gf.getCinIsoDate(elementTran.DepartTime.replace('/Date(', '').replace(')/', '') * 1))).format('DD') + "Thg " + moment(new Date(this.gf.getCinIsoDate(elementTran.DepartTime.replace('/Date(', '').replace(')/', '') * 1))).format('MM');
                                  elementTran.LandingDayDisplay = moment(new Date(this.gf.getCinIsoDate(elementTran.LandingTime.replace('/Date(', '').replace(')/', '') * 1))).format('DD') + "Thg " + moment(new Date(this.gf.getCinIsoDate(elementTran.LandingTime.replace('/Date(', '').replace(')/', '') * 1))).format('MM');
                                }
                              }
                              elementTran.departAirport = this.getAirportByCode(elementTran.FromPlaceCode);
                              elementTran.landingAirport = this.getAirportByCode(elementTran.ToPlaceCode);

                              elementTran.cindisplay = this.gf.getDayOfWeek(cin).daynameshort + ", " + moment(cin).format('DD-MM-YYYY')

                              let elementNext = elementbkg.Transits[index + 1];
                              if (elementNext) {

                                let dt = elementNext.DepartTime.replace('/Date(', '').replace(')/', '') * 1;
                                let lt = elementTran.LandingTime.replace('/Date(', '').replace(')/', '') * 1;
                                let diffminutes = moment(dt).diff(lt, 'minutes');
                                if (diffminutes) {
                                  let hours: any = Math.floor(diffminutes / 60);
                                  let minutes: any = diffminutes - (hours * 60);
                                  if (hours < 10) {
                                    hours = hours != 0 ? "0" + hours : "0";
                                  }
                                  if (minutes < 10) {
                                    minutes = "0" + minutes;
                                  }
                                  elementTran.timeOverlay = hours + ' tiếng ' + minutes + ' phút';
                                }
                              }
                            }

                          }
                        });
                        if(element.payment_fee){ 
                          this.totalCost = this.totalCost - element.payment_fee;
                        }
                      }
                      element.flightRoundTripStr = 'Vé máy bay ' + (element.bookingjson.length > 1 ? 'khứ hồi' : 'một chiều');
                      if (element.totalPaxStr) {
                        element.totalPaxStrVMBQT = element.totalPaxStr.replace(' |', ',');
                      }
                    }
                  }

                  element.totalpricedisplay = se.gf.convertNumberToString(Math.round(element.amount_after_tax));
                  if (element.payment_status == 0 && element.delivery_payment_date) {
                    let diffminutes = moment(new Date()).diff(moment(element.delivery_payment_date), 'minutes');
                    if (diffminutes <= 0) {
                      let hours: any = Math.floor(diffminutes * (-1) / 60);
                      let minutes: any = diffminutes * (-1) - (hours * 60);
                      if (hours < 10) {
                        hours = hours != 0 ? "0" + hours : "0";
                      }
                      if (minutes < 10) {
                        minutes = "0" + minutes;
                      }
                      let _timezone = new Date().getTimezoneOffset();
                      if (_timezone != -420) {
                        let arr1 = element.delivery_payment_date.toString().split('T');
                        let arr2 = arr1[1].split(':')
                        let arr3 = arr1[0].split('-');

                        element.time_payment = arr2[0] + ':' + arr2[1];
                        element.date_payment = arr3[2] + '-' + arr3[1] + '-' + arr3[0];
                        element.delivery_payment_date_display = "Hạn thanh toán trước " + arr2[0] + ':' + arr2[1]; + " " + se.gf.getDayOfWeek(new Date(arr1[0])).daynameshort + ", " + arr3[2] + " thg " + arr3[1] + ", " + arr3[0];
                        element.delivery_payment_time_display = arr2[0] + ':' + arr2[1];
                        element.delivery_payment_date_display = arr3[2] + '-' + arr3[1] + '-' + arr3[2];
                      } else {
                        element.time_payment = moment(this.gf.getCinIsoDate(element.delivery_payment_date)).format("HH:mm");
                        element.date_payment = moment(this.gf.getCinIsoDate(element.delivery_payment_date)).format("DD-MM-YYYY");
                        element.delivery_payment_date_display = "Hạn thanh toán trước " + moment(this.gf.getCinIsoDate(element.delivery_payment_date)).format("HH:mm") + " " + se.gf.getDayOfWeek(this.gf.getCinIsoDate(element.delivery_payment_date)).daynameshort + ", " + moment(this.gf.getCinIsoDate(element.delivery_payment_date)).format("DD") + " thg " + moment(this.gf.getCinIsoDate(element.delivery_payment_date)).format("MM") + ", " + moment(this.gf.getCinIsoDate(element.delivery_payment_date)).format("YYYY");
                        element.delivery_payment_time_display = moment(this.gf.getCinIsoDate(element.delivery_payment_date)).format("HH:mm");
                        element.delivery_payment_date_display = moment(this.gf.getCinIsoDate(element.delivery_payment_date)).format("DD-MM-YYYY");
                      }

                      //element.delivery_payment_date_display = "Vui lòng thanh toán trong vòng " + hours + 'h'+ minutes +"'";
                      if (!(element.pay_method == 3 || element.pay_method == 51 || element.pay_method == 2)) {
                        var obj = se.gf.getbank(element.pay_method);
                        element.urlimgbank = obj.urlimgbank;
                        element.textbank = obj.textbank;
                        element.accountNumber = obj.accountNumber;
                        element.bankName = obj.bankName;
                        element.url = obj.url;
                      } else if (element.pay_method == 3 && element.payment_info) {
                        element.payment_info = JSON.parse(element.payment_info);
                        element.PaymentCode = element.payment_info.PaymentCode
                      }
                    }

                  }
                  let _timezone = new Date().getTimezoneOffset();
                  if (_timezone != -420) {
                    element.checkInDisplayCity = se.gf.getDayOfWeek(se.gf.getCinIsoDate(element.checkInDate)).daynameshort + ", " + moment(se.gf.getCinIsoDate(element.checkInDate)).format("DD-MM-YYYY");
                    element.checkOutDisplayCity = se.gf.getDayOfWeek(se.gf.getCinIsoDate(element.checkOutDate)).daynameshort + ", " + moment(se.gf.getCinIsoDate(element.checkOutDate)).format("DD-MM-YYYY");
                  }
                  else {
                    element.checkInDisplayCity = se.gf.getDayOfWeek(element.checkInDate).daynameshort + ", " + moment(element.checkInDate).format("DD-MM-YYYY");
                    element.checkOutDisplayCity = se.gf.getDayOfWeek(element.checkOutDate).daynameshort + ", " + moment(element.checkOutDate).format("DD-MM-YYYY");
                  }
                  //Thay mới ngày bay
                  if (element.bookingsComboData) {
                    if (element.bookingsComboData && element.bookingsComboData.length > 1 && ['GO', 'RETURN', 'GOROUNDTRIP', 'RETURNROUNDTRIP'].indexOf(element.bookingsComboData[1].trip_Code) == -1 && element.bookingsComboData[1].airlineName && element.bookingsComboData[1].airlineName.toLowerCase().indexOf('cathay') == -1) {

                      for (let i = 0; i < 2; i++) {
                        const elementNew = element.bookingsComboData[i];
                        if (i == 0) {
                          if (elementNew.departureDate && !elementNew.departureDateNew) {
                            let newdate;
                            if (elementNew.departureDate.indexOf('-') != -1) {
                              newdate = elementNew.departureDate.split('-');
                            }
                            if (elementNew.departureDate.indexOf('/') != -1) {
                              newdate = elementNew.departureDate.split('/');
                            }
                            let d;
                            if (newdate && newdate.length > 1) {
                              d = new Date(Number(newdate[2]), Number(newdate[1]) - 1, Number(newdate[0]));
                            }
                            // element.checkInDisplay = se.gf.getDayOfWeek(elementNew.departureDate).daynameshort+ ", " + moment(elementNew.departureDate).format("DD-MM-YYYY");
                            element.checkInDisplay = se.gf.getDayOfWeek(d).daynameshort + ", " + moment(d).format("DD-MM-YYYY");
                          }
                          if (elementNew.departureDateNew) {
                            let newdate;
                            if (elementNew.departureDateNew.indexOf('-') != -1) {
                              newdate = elementNew.departureDateNew.split('-');
                            }
                            if (elementNew.departureDateNew.indexOf('/') != -1) {
                              newdate = elementNew.departureDateNew.split('/');
                            }
                            let d;
                            if (newdate && newdate.length > 1) {
                              d = new Date(Number(newdate[2]), Number(newdate[1]) - 1, Number(newdate[0]));
                            }
                            // element.checkInDisplay = se.gf.getDayOfWeek(elementNew.departureDateNew).daynameshort+ ", " + moment(elementNew.departureDateNew).format("DD-MM-YYYY");
                            element.checkInDisplay = se.gf.getDayOfWeek(d).daynameshort + ", " + elementNew.departureDateNew;
                          }
                        } else {
                          if (elementNew.departureDate && !elementNew.departureDateNew) {
                            let newdate;
                            if (elementNew.departureDate.indexOf('-') != -1) {
                              newdate = elementNew.departureDate.split('-');
                            }
                            if (elementNew.departureDate.indexOf('/') != -1) {
                              newdate = elementNew.departureDate.split('/');
                            }
                            let d;
                            if (newdate && newdate.length > 1) {
                              d = new Date(Number(newdate[2]), Number(newdate[1]) - 1, Number(newdate[0]));
                            }
                            // element.checkInDisplay = se.gf.getDayOfWeek(elementNew.departureDate).daynameshort+ ", " + moment(elementNew.departureDate).format("DD-MM-YYYY");
                            element.checkOutDisplay = se.gf.getDayOfWeek(d).daynameshort + ", " + moment(d).format("DD-MM-YYYY");
                          }
                          if (elementNew.departureDateNew) {
                            let newdate;
                            if (elementNew.departureDateNew.indexOf('-') != -1) {
                              newdate = elementNew.departureDateNew.split('-');
                            }
                            if (elementNew.departureDateNew.indexOf('/') != -1) {
                              newdate = elementNew.departureDateNew.split('/');
                            }
                            let d;
                            if (newdate && newdate.length > 1) {
                              d = new Date(Number(newdate[2]), Number(newdate[1]) - 1, Number(newdate[0]));
                            }
                            // element.checkInDisplay = se.gf.getDayOfWeek(elementNew.departureDateNew).daynameshort+ ", " + moment(elementNew.departureDateNew).format("DD-MM-YYYY");
                            element.checkOutDisplay = se.gf.getDayOfWeek(d).daynameshort + ", " + elementNew.departureDateNew;
                          }
                        }

                      }


                    } else {

                      if (element.bookingsComboData[0].departureDate && !element.bookingsComboData[0].departureDateNew) {
                        let newdate;
                        if (element.bookingsComboData[0].departureDate.indexOf('-') != -1) {
                          newdate = element.bookingsComboData[0].departureDate.split('-');
                        }
                        if (element.bookingsComboData[0].departureDate.indexOf('/') != -1) {
                          newdate = element.bookingsComboData[0].departureDate.split('/');
                        }
                        let d;
                        if (newdate && newdate.length > 1) {
                          d = new Date(Number(newdate[2]), Number(newdate[1]) - 1, Number(newdate[0]));
                        }
                        element.checkInDisplay = se.gf.getDayOfWeek(d).daynameshort + ", " + moment(d).format("DD-MM-YYYY");
                        element.checkOutDisplay = se.gf.getDayOfWeek(d).daynameshort + ", " + moment(d).format("DD-MM-YYYY");
                      }
                      if (element.bookingsComboData[0].departureDateNew) {
                        let newdate;
                        if (element.bookingsComboData[0].departureDateNew.indexOf('-') != -1) {
                          newdate = element.bookingsComboData[0].departureDateNew.split('-');
                        }
                        if (element.bookingsComboData[0].departureDateNew.indexOf('/') != -1) {
                          newdate = element.bookingsComboData[0].departureDateNew.split('/');
                        }
                        let d;
                        if (newdate && newdate.length > 1) {
                          d = new Date(Number(newdate[2]), Number(newdate[1]) - 1, Number(newdate[0]));
                        }
                        element.checkInDisplay = se.gf.getDayOfWeek(d).daynameshort + ", " + element.bookingsComboData[0].departureDateNew;
                        element.checkOutDisplay = se.gf.getDayOfWeek(d).daynameshort + ", " + element.bookingsComboData[0].departureDateNew;
                      }
                    }
                  }



                  element.checkInDisplayShort = se.gf.getDayOfWeek(element.checkInDate).daynameshort + ", " + moment(element.checkInDate).format('DD-MM');
                  element.checkOutDisplayShort = se.gf.getDayOfWeek(element.checkOutDate).daynameshort + ", " + moment(element.checkOutDate).format('DD-MM-YYYY');

                  let departFlight = element.bookingsComboData.filter((f) => { return moment(f.departureDate).format('DD-MM-YYYY') == moment(element.checkInDate).format('DD-MM-YYYY') && f.airlineCode });
                  if (departFlight && departFlight.length > 0) {
                    element.itemdepart = departFlight[0];

                  } else {
                    element.itemdepart = element.bookingsComboData[0];

                  }
                  element.flightFrom = element.itemdepart.flightFrom;
                  element.flightTo = element.itemdepart.flightTo;
                  element.departAirport = se.getAirportByCode(element.itemdepart.departCode);
                  element.returnAirport = se.getAirportByCode(element.itemdepart.arrivalCode);

                  se.textDeparture = se.getDayOfWeek(element.itemdepart.departureDate) + ', ' + element.itemdepart.departureDate;
                  se.textRegionDepart = se.getRegionByCode(element.itemdepart.departCode);
                  se.textRegionReturn = se.getRegionByCode(element.itemdepart.arrivalCode);
                  se.textAirpotDepart = se.getAirpot(element.itemdepart.departCode);
                  se.textAirpotReturn = se.getAirpot(element.itemdepart.arrivalCode);

                  let idxlug = 0;
                  element.textChildDisplay = "";
                  //đi chung
                  element.arrPickupDropoff = [];
                  element.bookingsComboData.forEach(el => {

                    if (el.airlineName.indexOf('Vietnam Airlines') != -1) {
                      //chặng dừng
                      if (el.flightNumner.indexOf(',') != -1) {
                        let fnstring = el.flightNumner.split(',')[0].trim();
                        let fn = fnstring.substring(2, el.flightNumner.length) * 1;
                        if (fn >= 6000) {
                          el.operatedBy = "Khai thác bởi Pacific Airlines";
                        }
                      } else {//bay thẳng
                        let fn = el.flightNumner.substring(2, el.flightNumner.length) * 1;
                        if (fn >= 6000) {
                          el.operatedBy = "Khai thác bởi Pacific Airlines";
                        }
                      }

                    }
                    if (el.passengers && el.passengers.length > 0) {
                      for (let index = 0; index < el.passengers.length; index++) {
                        el.passengers[index].arrlug = [];
                      }
                      for (let index = 0; index < el.passengers.length; index++) {
                        const elementlug = el.passengers[index];
                        let departElementLug = null;
                        if (idxlug == 1) {
                          departElementLug = element.bookingsComboData[idxlug - 1].passengers;
                        }

                        if (elementlug.hanhLy && elementlug.hanhLy.indexOf(':') == -1 && ((elementlug.hanhLy.replace('kg', '')) * 1 > 0 || elementlug.seatNumber)) {
                          if (idxlug == 1) {
                            if (departElementLug) {
                              let itemfilter = departElementLug.filter((l) => { return l.arrlug && l.name == elementlug.name });
                              if (itemfilter && itemfilter.length > 0) {
                                itemfilter[0].arrlug.push({ lugname: el.departCode + " - " + el.arrivalCode, lugweight: elementlug.hanhLy, lugprice: (elementlug.hanhLy.replace('kg', '') * 1 > 0 ? elementlug.giaTienHanhLy : 0), seatnumber: elementlug.seatNumber })
                              }
                              else {
                                if (elementlug.seatNumber) {
                                  itemfilter[0].arrlug.push({ lugname: el.departCode + " - " + el.arrivalCode, lugweight: "", lugprice: 0, seatnumber: elementlug.seatNumber })
                                }
                              }
                            } else {
                              elementlug.arrlug.push({ lugname: el.departCode + " - " + el.arrivalCode, lugweight: elementlug.hanhLy, lugprice: (elementlug.hanhLy.replace('kg', '') * 1 > 0 ? elementlug.giaTienHanhLy : 0), seatnumber: elementlug.seatNumber })
                            }
                          } else {
                            if (elementlug.arrlug.length > 0) {
                              let itemfilter = elementlug.arrlug.filter((l) => { return l.paxname == elementlug.name });
                              if (itemfilter && itemfilter.length > 0) {
                                itemfilter[0].arrlug.push({ lugname: el.departCode + " - " + el.arrivalCode, lugweight: elementlug.hanhLy, lugprice: (elementlug.hanhLy.replace('kg', '') * 1 > 0 ? elementlug.giaTienHanhLy : 0), seatnumber: elementlug.seatNumber })
                              }
                              else {
                                if (elementlug.seatNumber) {
                                  itemfilter[0].arrlug.push({ lugname: el.departCode + " - " + el.arrivalCode, lugweight: "", lugprice: 0, seatnumber: elementlug.seatNumber })
                                }
                              }
                            } else {
                              elementlug.arrlug.push({ lugname: el.departCode + " - " + el.arrivalCode, lugweight: elementlug.hanhLy, lugprice: (elementlug.hanhLy.replace('kg', '') * 1 > 0 ? elementlug.giaTienHanhLy : 0), seatnumber: elementlug.seatNumber })
                            }
                          }

                        }

                      }

                    }

                    if (el.trip_Code == "GO" || el.trip_Code == "RETURN" || el.trip_Code == "GOROUNDTRIP" || el.trip_Code == "RETURNROUNDTRIP") {
                      element.isPickupDropoff = true;
                      el.sortPD = el.trip_Code == "GO" ? 1 : (el.trip_Code == "GOROUNDTRIP" ? 2 : (el.trip_Code == "RETURN" ? 3 : 4));
                      element.arrPickupDropoff.push(el);
                      if (el.departureDate) {
                        let newdate = el.departureDate.split('/');
                        if (newdate && newdate.length > 1) {
                          let d = new Date(Number(newdate[2]), Number(newdate[1]) - 1, Number(newdate[0]));
                          el.departureDateDisplay = moment(d).format("DD-MM");
                        }

                      }

                    }

                    idxlug++;
                  })

                  if (element.arrPickupDropoff && element.arrPickupDropoff.length > 0) {
                    se.zone.run(() => element.arrPickupDropoff.sort(function (a, b) {
                      return a.sortPD - b.sortPD;
                    }))
                  }

                  if (element.bookingsComboData.length > 1) {
                    let returnFlight = element.bookingsComboData.filter((f) => { return moment(f.departureDate).format('DD-MM-YYYY') == moment(element.checkOutDate).format('DD-MM-YYYY') && f.airlineCode });
                    if (returnFlight && returnFlight.length > 0) {
                      element.itemreturn = returnFlight[0];

                    } else {
                      element.itemreturn = element.bookingsComboData[1];

                    }
                    element.textReturn = se.getDayOfWeek(element.itemreturn.departureDate) + ', ' + element.itemreturn.departureDate;
                    se.textArrivalRegionDepart = se.getRegionByCode(element.itemreturn.departCode);
                    se.textArrivalRegionReturn = se.getRegionByCode(element.itemreturn.arrivalCode);
                    se.textAirpotArrivalDepart = se.getAirpot(element.itemreturn.departCode);
                    se.textAirpotArrivalReturn = se.getAirpot(element.itemreturn.arrivalCode);

                  }

                  if (element.bookingsComboData && element.bookingsComboData[0].passengers && element.bookingsComboData[0].passengers.length > 0) {
                    element.adult = 0;
                    element.child = 0;
                    element.infant = 0;

                    element.bookingsComboData[0].passengers.forEach((elementlug, index) => {
                      let yearold = 18*12;
                      if (elementlug.dob) {
                        let arr = [];
                        if (elementlug.dob && elementlug.dob.indexOf('/') != -1) {
                          arr = elementlug.dob.split('/');
                        }
                        else if (elementlug.dob && elementlug.dob.indexOf('-') != -1) {
                          arr = elementlug.dob.split('-');
                        }

                        if (arr.length > 0) {
                          let newdob = new Date(Number(arr[2]), Number(arr[1] - 1), Number(arr[0]));
                          yearold = moment(element.checkInDate).diff(moment(newdob), 'month');
                        }

                        elementlug.isAdult = yearold > 12*12 ? true : false;
                        if (elementlug.isAdult) {
                          element.adult += 1;
                        } else {
                          if (!element.textChildDisplay) {
                            element.textChildDisplay = "(";
                          }
                          if (yearold < 2*12) {
                            element.infant += 1;
                            elementlug.isInfant = true;
                            element.textChildDisplay += element.textChildDisplay && element.textChildDisplay.length > 1 ? ", " + (yearold > 0 ? Math.round(yearold/12) : 1) : (yearold > 0 ? Math.round(yearold/12) : 1);
                          } else {
                            element.child += 1;
                            element.textChildDisplay += element.textChildDisplay && element.textChildDisplay.length > 1 ? ", " + (yearold > 0 ? Math.round(yearold/12) : 1) : (yearold > 0 ? Math.round(yearold/12) : 1);
                          }
                        }

                        if (index == element.bookingsComboData[0].passengers.length - 1 && element.textChildDisplay) {
                          element.textChildDisplay += ")";
                        }
                      }



                      if (elementlug.hanhLy && elementlug.hanhLy.length > 0 && elementlug.hanhLy.indexOf(':') != -1) {
                        elementlug.hanhLy = elementlug.hanhLy.replace(/\n/ig, ':');
                        let arrlug = elementlug.hanhLy.split(':');
                        elementlug.arrlug = [];
                        if (arrlug && arrlug.length > 0) {
                          let idx = 0;
                          arrlug.forEach(lug => {
                            if (idx > 0) {
                              let arrlugname = lug;
                              if (arrlugname.length > 4) {
                                arrlugname = arrlugname.substring(0, 4);
                              }
                              let lugweight = arrlugname.substring(0, 2);
                              if (idx == 1 && lugweight > 0) {
                                elementlug.arrlug.push({ lugname: element.bookingsComboData[0].departCode + " - " + element.bookingsComboData[0].arrivalCode, lugweight: arrlugname });
                              }
                              else if (idx == 3 && lugweight > 0) {
                                elementlug.arrlug.push({ lugname: element.bookingsComboData[0].arrivalCode + " - " + element.bookingsComboData[0].departCode, lugweight: arrlugname });
                              }
                            }
                            idx++;
                          });
                        }
                      }

                    });
                  }

                  //chiều về
                  if (element.bookingsComboData && element.bookingsComboData[1] && element.bookingsComboData[1].passengers && element.bookingsComboData[1].passengers.length > 0) {

                    element.bookingsComboData[1].passengers.forEach((elementlug, index) => {
                      let yearold = 18*12;
                      if (elementlug.dob) {
                        let arr = [];
                        if (elementlug.dob && elementlug.dob.indexOf('/') != -1) {
                          arr = elementlug.dob.split('/');
                        }
                        else if (elementlug.dob && elementlug.dob.indexOf('-') != -1) {
                          arr = elementlug.dob.split('-');
                        }

                        if (arr.length > 0) {
                          let newdob = new Date(Number(arr[2]), Number(arr[1] - 1), Number(arr[0]));
                          yearold = moment(element.checkInDate).diff(moment(newdob), 'month');
                        }

                        elementlug.isAdult = yearold > 12*12 ? true : false;
                        if (elementlug.isAdult) {
                          // element.adult += 1;
                        } else {
                          if (yearold < 2*12) {
                            elementlug.isInfant = true;
                          }
                        }

                      }

                    });

                  }
                }
                if (element.delivery_payment_date) {
                  let arrpaymentdate = element.delivery_payment_date.split("T");
                  let hour = '', day = '';
                  let arrday;
                  if (arrpaymentdate && arrpaymentdate.length > 1) {
                    let arrhour = arrpaymentdate[1].substring(0, 5).split(":");
                    if (arrhour && arrhour.length > 0) {
                      hour = arrhour[0].toString() + "h" + arrhour[1].toString();
                    }
                    arrday = arrpaymentdate[0].split('-');
                    if (arrday && arrday.length > 0) {
                      day = arrday[2].toString() + "/" + arrday[1].toString();
                    }
                  }
                  element.deliveryPaymentDisplay = "" + hour + ", " + day;
                  let _timezone = new Date().getTimezoneOffset();
                  if (_timezone != -420) {
                    let arr1 = element.delivery_payment_date.toString().split('T');
                    let arr2 = arr1[1].split(':')
                    let arr3 = arr1[0].split('-');
                    element.delivery_payment_time_display = arr2[0] + ':' + arr2[1];
                    element.delivery_payment_date_display = arr3[2] + '-' + arr3[1] + '-' + arr3[2];
                  } else {
                    element.delivery_payment_time_display = moment(element.delivery_payment_date).format("HH:mm");
                    element.delivery_payment_date_display = moment(element.delivery_payment_date).format("DD-MM-YYYY");
                  }
                  let arrhours = arrpaymentdate[1].split(":");
                  let today = new Date();
                  let d = new Date(Number(arrday[0]), Number(arrday[1]) - 1, Number(arrday[2]), Number(arrhours[0]), Number(arrhours[1]), 0);
                  let diffminutes = moment(d).diff(today, 'minutes');
                   //pdanh - 05-07-2023: Fix lỗi timezone hạn thanh toán
                   if (_timezone != -420) {
                     let _nt = new Date().getTime();
                     let _nd = moment(_nt * 1 + _timezone * 60000 + 25200000);
                     diffminutes = moment(element.delivery_payment_date).diff(_nd, 'minutes');
                   }
                  //Quá hạn thanh toán thì không hiển thị thông tin thanh toán
                  if (diffminutes < 0) {
                    element.deliveryPaymentDisplay = "";
                    element.delivery_payment_date_display = "";
                  }
                  let hours = Math.round(diffminutes / 60);
                  let minutes = diffminutes - (hours * 60);
                  element.paymentBefore = hours + "h" + minutes + "'";
                  // if (element.extra_guest_info) {
                  //   let arrpax = element.extra_guest_info.split('|');
                  //   if (arrpax && arrpax.length > 1 && arrpax[1] > 0 && arrpax[2] == 0) {
                  //     element.paxDisplay = arrpax[0].toString() + " người lớn, " + arrpax[1].toString() + " trẻ em";
                  //     element.adultDisplay = "Người lớn x"+ arrpax[0];
                  //     element.adultDisplay = "Trẻ em x"+ arrpax[1];
                  //   } else if (arrpax && arrpax[0] > 0 && arrpax[1] == 0 && arrpax[2] == 0) {
                  //     element.paxDisplay = arrpax[0].toString() + " người lớn";
                  //     element.adultDisplay = "Người lớn x"+ arrpax[0];
                  //   }else if (arrpax && arrpax[0] > 0 && arrpax[1] >0 && arrpax[2] > 0){
                  //     element.paxDisplay = arrpax[0].toString() + " người lớn, " + arrpax[1].toString() + " trẻ em, " + arrpax[2].toString() + " người già";
                  //     element.adultDisplay = "Người lớn x"+ arrpax[0];
                  //     element.adultDisplay = "Trẻ em x"+ arrpax[1];
                  //     element.adultDisplay = "Người già x"+ arrpax[2];
                  //   }else if (arrpax && arrpax[0] > 0 && arrpax[2] > 0){
                  //     element.paxDisplay = arrpax[0].toString() + " người lớn," + arrpax[2].toString() + " người già";
                  //     element.adultDisplay = "Người lớn x"+ arrpax[0];
                  //     element.adultDisplay = "Người già x"+ arrpax[2];
                  //   }
                  // }
                  if (element.booking_type=="TICKET") {
                    let arrtemp = element.inclusion.split('|');
                    element.paxDisplay = arrtemp[6];
                    element.kkdayValue = JSON.parse(arrtemp[7]) ;
                    console.log(element.kkdayValue); 
                  }
                  if (element.amount_after_tax) {
                    element.priceShow = Math.round(element.amount_after_tax).toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
                  }
                }
                element.isRequestTrip = false;
                if (element.totalPaxStr) {
                  element.totalPaxStr = element.totalPaxStr.replace('|', ',');
                }

                //check cathay
                if (element.bookingsComboData) {
                  let Temp = [];
                  Temp.push(element.bookingsComboData);
                  if (Temp) {

                    let Temp_Cathay = [];
                    Temp.forEach(function (item) {

                      Temp_Cathay.push(
                        item.filter(function (word) {
                          return word.airlineName.toLowerCase().includes("cathay");
                        })
                      );
                    });
                    if (
                      Temp_Cathay[0] &&
                      Temp_Cathay[0][0] && Temp_Cathay[0][0].passengers &&
                      Temp_Cathay[0][0].passengers.length > 0
                    ) {
                      element.IsCathay = true;
                      element.hasCathay = true;
                    }
                    else {
                      element.IsCathay = false;
                    }
                    if (element.IsCathay && element.itemdepart && element.itemdepart.passengers.length > 0) {
                      element.itemdepart.passengers.forEach(el => {
                        for (let i = 0; i < Temp_Cathay[0][0].passengers.length; i++) {
                          if (el.name.toLowerCase().trim() == Temp_Cathay[0][0].passengers[i].name.toLowerCase().trim()) {
                            el.IsCathay = true;
                            break;
                          }
                        }

                      })
                    }
                  }


                }


                if (element.booking_id && (element.booking_id.indexOf("FLY") != -1 || element.booking_id.indexOf("VMB") != -1 || element.booking_type == "CB_FLY_HOTEL")) {
                  let temp = element.bookingsComboData[0].departureDate.split("/");
                  let daytemp=temp[2]+ temp[1] + temp[0];
                  var dep = moment(daytemp+ " " + element.bookingsComboData[0].departureTime, "YYYYMMDD HH:mm")
                  let _time = moment(dep).diff(new Date(), 'minutes');
               
                  //pdanh 02-08-2023: Thêm valid checkin online
                  //pdanh 07-08-2023: Sửa lại lấy từ thông tin load api
                   //_time = khoảng thời gian từ lúc book vé so với ngày khởi hành
                   //Nếu _time > 24 tiếng => cho phép chọn checkin online
                   this.zone.run(() => {
                    // if(_time > 24*60){
                    //   element.ischeckinOnl = false;
                    //   element.textCheckinOnline = "* Thẻ lên tàu bay sẽ được cập nhật trong vòng 24 tiếng trước khi đóng chuyến";
                    // }
                    // //Nếu 4 < _time < 24: Ẩn nút YC Checkin online
                    // else if(24*60 > _time && _time > 4*60){
                    //   element.ischeckinOnl = true;
                    //   element.textCheckinOnline = "* Vui lòng liên hệ nhân viên iVIVU để được hỗ trợ";
                    // }
                    // //Nếu _time <= 4: Ẩn nút YC Checkin online
                    // else if(_time <=4*60){
                    //   element.ischeckinOnl = true;
                    //   element.textCheckinOnline = "* Chuyến bay trong khung đóng chuyến. Quý khách vui lòng làm thủ tục tại sân bay";
                    // }
                    if(element.allowRequestCheckinOnline){
                      element.ischeckinOnl = !element.allowRequestCheckinOnline.allowCheckin;
                      element.textCheckinOnline = element.allowRequestCheckinOnline.note;
                    }
                  })

                 if(element.isBookingVMBQT && element.bookingJsonDataParse && element.bookingJsonDataParse.length >0){
                  //element.ischeckinOnl = false;
                  let d = element.bookingJsonDataParse[0].departureDateParse;
                  let dr = element.bookingJsonDataParse.length ==1 ? element.bookingJsonDataParse[0].arrivalDateParse : element.bookingJsonDataParse[element.bookingJsonDataParse.length-1].departureDateParse;
                  element.checkInDisplay = se.gf.getDayOfWeek(d).daynameshort + ", " + moment(d).format('DD-MM-YYYY');
                  element.checkOutDisplay = se.gf.getDayOfWeek(dr).daynameshort + ", " + moment(dr).format('DD-MM-YYYY');
                 }
                  let diffminutes = moment(dep).diff(new Date(), 'minutes');
                  if (diffminutes <= 210) {
                    this.zone.run(() => {
                      element.bookingjson[0].RequestCheckin=0;
                      element.ischeckinOnl=true;
                  
                    })
                  }
                 
                  // if (element.booking_id=='DL0828508') {
                  //   se.listMyTrips.push(element);
                  // }
                  se.listMyTrips.push(element);
                  se.mytripcount++;
                  //se.nextflightcounttext ="(" + se.mytripcount +")";
                }

                //}
              }
            }

          });

        }

        if (lstTrips && lstTrips.requestPrices && lstTrips.requestPrices.length > 0) {
          lstTrips.requestPrices.forEach(element => {
            if (!se.gf.checkExistsItemInArray(se.listMyTrips, element, 'order')) {
              if (element.request_id.indexOf("HTBKG") == -1) {
                let urlavatar = "", tail = "";
                if (element.hotelAvatar.indexOf('i.travelapi.com') == -1 ) {
                  // if (element.hotelAvatar.indexOf('jpeg') != -1 || element.hotelAvatar.indexOf('webp') != -1) {
                  //   urlavatar = element.hotelAvatar.substring(0, element.hotelAvatar.length - 5);
                  //   tail = element.hotelAvatar.substring(element.hotelAvatar.length - 5, element.hotelAvatar.length);
                  // } else {
                  //   urlavatar = element.hotelAvatar.substring(0, element.hotelAvatar.length - 4);
                  //   tail = element.hotelAvatar.substring(element.hotelAvatar.length - 4, element.hotelAvatar.length);
                  // }
                  const hasCdn1 = element.hotelAvatar.includes("cdn1");
                  if (hasCdn1) {
                    const imageUrl = element.hotelAvatar;
                    const newImageUrl = imageUrl.replace(/(\.\w+)$/, "-104x104$1");
                    element.hotelAvatar = newImageUrl;
                  }
                } else {
                  element.avatar = element.hotelAvatar;
                }
                if (element.avatar) {
                  element.avatar = (element.avatar.toLocaleString().trim().indexOf("http") != -1) ? element.avatar : 'https:' + element.avatar;
                }
                element.isRequest = true;
                element.booking_id = element.request_id;
                element.checkInDisplayCity = se.gf.getDayOfWeek(element.start_date).daynameshort + ", " + moment(element.start_date).format('DD-MM-YYYY');
                element.checkOutDisplayCity = se.gf.getDayOfWeek(element.end_date).daynameshort + ", " + moment(element.end_date).format('DD-MM-YYYY');

                element.checkInDisplayShort = se.gf.getDayOfWeek(element.start_date).daynameshort + ", " + moment(element.start_date).format('DD-MM-YYYY');
                element.checkOutDisplayShort = se.gf.getDayOfWeek(element.end_date).daynameshort + ", " + moment(element.end_date).format('DD-MM-YYYY');

                element.address = element.hotelAddress;
                element.totalPaxStr = "" + (element.total_adult ? element.total_adult + " người lớn" : "") + (element.total_child ? ", " + element.total_child + " trẻ em" : "");
                se.getRatingStar(element);
                // if (element.booking_id=='VC0002855') {
                //   se.listMyTrips.push(element);
                // }
                
                se.listMyTrips.push(element);
                se.mytripcount++;
              }

            }
          });
        }

        se._mytripservice.listMyTrips = se.listMyTrips;
        let idx1 = 0;
        if (se.gf.getParams('mytripbookingdetail') && se.gf.getParams('mytripbookingdetail').currentTrip) {
          idx1 = se.gf.getParams('mytripbookingdetail').currentTrip;
          se.currentTrip = idx;
        }

        se.sortMytrip();

        if (se.listMyTrips.length > 0) {
          //Tạm thời gọi api get notifi để build lại thông tin thay đổi chuyến bay nếu có
          se.loadUserNotificationAndMapFlightChange();

          if (se.gf.getParams('notifiBookingCode')) {
            var co = 0
            //Map số bkg trong listtrip để focus vào bkg được notifi
            var idxMap = se.listMyTrips.map((item, index) => {
              return item.booking_id == se.gf.getParams('notifiBookingCode');
            });
            if (idxMap && idxMap.length > 0) {
              var idx = idxMap.findIndex((el) => { return el == true });
              se.currentTrip = idx;
              if (idx != -1) {
                if (this.listMyTrips[idx].delivery_payment_date_display && (this.listMyTrips[idx].pay_method == 0 || this.listMyTrips[idx].pay_method == 5 || this.listMyTrips[idx].pay_method == 10) && !(this.listMyTrips[idx].payment_status == 1 || this.listMyTrips[idx].payment_status == 5 || this.listMyTrips[idx].payment_status == 9 || this.listMyTrips[idx].payment_status == -2 || this.listMyTrips[idx].payment_status == 3)) {
                  se.amount_after_tax = '';
                  this._mytripservice.tripdetail = this.listMyTrips[idx];
                  this._mytripservice.currentTrip = this.currentTrip;
                  this._mytripservice.listcount = this.listMyTrips.length;
                  this.paymentselect(se.listMyTrips[idx], 0);
                  co = 1;
                }
                else if (this.listMyTrips[idx].delivery_payment_date_display && !(this.listMyTrips[idx].pay_method == 0 || this.listMyTrips[idx].pay_method == 5 || this.listMyTrips[idx].pay_method == 10) && !(this.listMyTrips[idx].payment_status == 1 || this.listMyTrips[idx].payment_status == 5 || this.listMyTrips[idx].payment_status == 9 || this.listMyTrips[idx].payment_status == -2 || this.listMyTrips[idx].payment_status == 3)) {
                  se.amount_after_tax = '';
                  this._mytripservice.tripdetail = this.listMyTrips[idx];
                  this._mytripservice.currentTrip = this.currentTrip;
                  this._mytripservice.listcount = this.listMyTrips.length;
                  this.paymentselect(se.listMyTrips[idx], 1);
                  co = 1;
                }
                se.gf.setParams('', 'notifiBookingCode');
              }



              if (idx != -1 && co == 0) {
                se.showtripdetail(se.listMyTrips[idx]);
              } else if (co == 0) {

                //Map số bkg trong listtrip để focus vào bkg được notifi
                var idxMaphis = se.listHistoryTrips.map((item, index) => {
                  return item.booking_id == se.gf.getParams('notifiBookingCode');
                });
                if (idxMaphis && idxMaphis.length > 0) {
                  var idxhis = idxMaphis.findIndex((el) => { return el == true });
                  se.currentTrip = idxhis;

                  if (idxhis != -1) {
                    se.gf.setParams('', 'notifiBookingCode');
                    if (se.valueGlobal.notifyAction == "sharereview") {
                      se.feedback(se.listHistoryTrips[idxhis]);
                    } else {
                      se.showtripdetail(se.listHistoryTrips[idxhis]);
                    }

                  } else {
                    se._mytripservice.publicLoadDataMytripHistorySubject(0);
                    se.getdata(null, true);
                  }
                }

              }


            }
          }

          //Map item được claim nếu có load lại dữ liệu
          if (se.activityService.insurranceBookingId) {
            var idxMap = se.listMyTrips.map((item, index) => {
              return item.booking_id == se.activityService.insurranceBookingId;
            });
            if (idxMap && idxMap.length > 0) {
              var idx = idxMap.findIndex((el) => { return el == true });
              se.currentTrip = idx;
            }
          }

          if (se.listMyTrips.length == 1 && se.listMyTrips[0].bookingsComboData && se.listMyTrips[0].bookingsComboData.length > 0) {

            se.listMyTrips[0].bookingsComboData.forEach(element => {
              if (element.airlineName.toLowerCase().indexOf('cathay') != -1) {
                //Add bảo hiểm
                se.getCathayClaimInfo(se.listMyTrips[0].booking_id).then((data) => {

                  var claimed;

                  let objData = JSON.parse(data);
                  if (objData.insurObj) {
                    let dataCathay = objData.insurObj;
                    se.listMyTrips[0].hasCathay = true;
                    dataCathay.adultList.forEach(objAdult => {
                      if (!objAdult.claimedFlights) {
                        let itemAdult = { claimed: objAdult.claimedFlights, insurance_code: objAdult.insurance_code, customer_name: objAdult.customer_name, customer_id: objAdult.customer_cmnd, customer_address: '', customer_dob: objAdult.customer_dob };
                        if (!se.gf.checkExistsItemInArray(se.arrinsurrance, itemAdult, 'cathay')) {
                          se.arrinsurrance.push(itemAdult);
                        }

                      } else {
                        objAdult.flightObj.forEach((f) => {
                          var objmap = objAdult.claimedFlights.filter((cf) => f.flightNumner && cf == f.flightNumner.replace(' ', ''));
                          if (objmap && objmap.length > 0) {
                            se.listClaimed.push({ flight_number: objmap[0], insurance_code: objAdult.insurance_code, bookingid: objAdult.booking_id });
                          }
                        });
                        var claimedDone;
                        if (objData.flightObj[1].airlineCode && objData.flightObj[1].airlineName.toLowerCase().indexOf('cathay') == -1) {
                          claimedDone = objAdult.claimedFlights.filter((cf, i, arr) => { return arr.indexOf(arr.find(t => t === cf)) === i }).length > 1;
                        }
                        else {
                          claimedDone = objAdult.claimedFlights.filter((cf, i, arr) => { return arr.indexOf(arr.find(t => t === cf)) === i }).length > 0;
                        }
                        let itemAdult = { claimed: claimedDone, insurance_code: objAdult.insurance_code, customer_name: objAdult.customer_name, customer_id: objAdult.customer_cmnd, customer_address: '', customer_dob: objAdult.customer_dob };
                        if (!se.gf.checkExistsItemInArray(se.arrinsurrance, itemAdult, 'cathay')) {
                          se.arrinsurrance.push(itemAdult);
                        }
                      }
                    });
                    dataCathay.childList.forEach(objChild => {
                      if (!objChild.claimedFlights) {
                        let itemChild = {
                          claimed: objChild.claimedFlights, insurance_code: objChild.insurance_code, customer_name: objChild.customer_name, customer_id: objChild.customer_cmnd, customer_address: '', customer_dob: objChild.customer_dob,
                          name: objChild.customer_name, id: objChild.insurance_code, birth: objChild.customer_dob
                        };
                        // se.arrchildinsurrance.push(itemChild);

                        if (!se.gf.checkExistsItemInArray(se.arrchildinsurrance, itemChild, 'cathay')) {
                          se.arrchildinsurrance.push(itemChild);
                          se.arrchild.push(itemChild);
                        }
                      } else {
                        objChild.flightObj.forEach((f) => {
                          var objmap = objChild.claimedFlights.filter((cf) => f.flightNumner && cf == f.flightNumner.replace(' ', ''));
                          if (objmap && objmap.length > 0) {
                            se.listClaimed.push({ flight_number: objmap[0], insurance_code: objChild.insurance_code, bookingid: objChild.booking_id });
                          }
                        });

                        var claimedDone
                        if (objData.flightObj[1].airlineCode && objData.flightObj[1].airlineName.toLowerCase().indexOf('cathay') == -1) {
                          claimedDone = objChild.claimedFlights.filter((cf, i, arr) => { return arr.indexOf(arr.find(t => t === cf)) === i }).length > 1;
                        } else {
                          claimedDone = objChild.claimedFlights.filter((cf, i, arr) => { return arr.indexOf(arr.find(t => t === cf)) === i }).length > 0;
                        }
                        let itemChild = {
                          claimed: claimedDone, insurance_code: objChild.insurance_code, customer_name: objChild.customer_name, customer_id: objChild.customer_cmnd, customer_address: '', customer_dob: objChild.customer_dob,
                          name: objChild.customer_name, id: objChild.insurance_code, birth: objChild.customer_dob
                        };
                        if (!se.gf.checkExistsItemInArray(se.arrchildinsurrance, itemChild, 'cathay')) {
                          se.arrchildinsurrance.push(itemChild);
                          se.arrchild.push(itemChild);
                        }
                      }
                    });
                  }
                  //check cathay VMB
                  if (se.listMyTrips[0] && se.listMyTrips[0].itemdepart && se.arrinsurrance.length > 0) {
                    se.listMyTrips[0].itemdepart.passengers.forEach((item) => {
                      for (let i = 0; i < se.arrinsurrance.length; i++) {
                        if (item.name.toLowerCase().trim() == se.arrinsurrance[i].customer_name.toLowerCase().trim()) {
                          item.claimed = se.arrinsurrance[i].claimed;
                          break;
                        }
                      }
                    });
                  }
                  if (se.listMyTrips[0] && se.listMyTrips[0].itemdepart && se.arrchildinsurrance.length > 0) {
                    se.listMyTrips[0].itemdepart.passengers.forEach((item) => {
                      for (let i = 0; i < se.arrchildinsurrance.length; i++) {
                        if (item.name.toLowerCase().trim() == se.arrchildinsurrance[i].customer_name.toLowerCase().trim()) {
                          item.claimed = se.arrchildinsurrance[i].claimed;
                          break;
                        }
                      }
                    });
                  }

                })

                let arrcd = se.listMyTrips[0].bookingsComboData[0].departureDate.split('-');
                let nd = new Date(arrcd[2], arrcd[1] - 1, arrcd[0]);
                se.cincombodeparture = moment(nd).format('YYYY-MM-DD');

                if (se.listMyTrips[0].bookingsComboData && se.listMyTrips[0].bookingsComboData.length > 1) {
                  se.departCodeDisplay = se.listMyTrips[0].bookingsComboData[0].departCode + ' → ' + se.listMyTrips[0].bookingsComboData[0].arrivalCode;
                  if (se.listMyTrips[0].bookingsComboData.length > 1) {
                    se.arrivalCodeDisplay = se.listMyTrips[0].bookingsComboData[1].departCode + ' → ' + se.listMyTrips[0].bookingsComboData[1].arrivalCode;
                  }

                  if (!se.cincombodepartureflightnumberdisplay) {
                    se.cincombodepartureflightnumberdisplay = se.listMyTrips[0].bookingsComboData[0].flightNumner;
                  }

                  if (!se.cincomboarrivalflightnumberdisplay) {
                    se.cincomboarrivalflightnumberdisplay = se.listMyTrips[0].bookingsComboData[1].flightNumner;
                  }

                  if (se.listMyTrips[0].bookingsComboData[1] && se.listMyTrips[0].bookingsComboData[1].departCode) {
                    let arrca = se.listMyTrips[0].bookingsComboData[1].departureDate.split('-');
                    let nd = new Date(arrca[2], arrca[1] - 1, arrca[0]);
                    se.cincomboarrival = moment(nd).format('YYYY-MM-DD');
                  }
                }
              }
            })

            if (!se.listMyTrips[0].hasCathay) {
              se.arrinsurrance = [];
            }

            se.listMyTrips[0].isRoundTrip = se.listMyTrips[0].itemdepart && se.listMyTrips[0].itemreturn ? true : false;
            if(se.listMyTrips[0].itemdepart){
              se.listMyTrips[0].itemdepart.allowChangeFlight = se.listMyTrips[0].itemdepart.airlineName.toLowerCase().indexOf('vietnam airline') == -1;
            }
            if(se.listMyTrips[0].itemreturn){
              se.listMyTrips[0].itemreturn.allowChangeFlight = se.listMyTrips[0].itemreturn.airlineName.toLowerCase().indexOf('vietnam airline') == -1;
            }
          }
          if (se.listMyTrips[0].isFlyBooking) {
            this.getDetailTicketFromDat(0).then((data) => {
              if (se.listMyTrips[0].textReturn && se.listMyTrips[0].bookingsComboData[1].airlineCode && se.listMyTrips[0].bookingsComboData[1].airlineName.toLowerCase().indexOf('cathay') == -1 && ['GO', 'RETURN', 'GOROUNDTRIP', 'RETURNROUNDTRIP'].indexOf(se.listMyTrips[0].bookingsComboData[1].trip_Code) == -1) {
                this.getDetailTicketFromDat(1).then((data) => {

                })
              }
              this.getmhoteldetail();
            })
          } else {
            se.totalHotel = 0;

            se.totalHotel = se.listMyTrips[0].amount_after_tax + se.listMyTrips[0].promotionDiscountAmount;
            if (se.listMyTrips[0].booking_type == 'COMBO_FLIGHT') {
              this.departAirport = this.getAirportByCode(se.listMyTrips[0].bookingsComboData[0].departCode);
              this.returnAirport = this.getAirportByCode(se.listMyTrips[0].bookingsComboData[1].departCode);
              this.getDetailTicketFromDat(0).then((data) => {
                if (se.listMyTrips[0].bookingsComboData[1].airlineCode && se.listMyTrips[0].bookingsComboData[1].airlineName.toLowerCase().indexOf('cathay') == -1 && ['GO', 'RETURN', 'GOROUNDTRIP', 'RETURNROUNDTRIP'].indexOf(se.listMyTrips[0].bookingsComboData[1].trip_Code) == -1) {
                  this.getDetailTicketFromDat(1).then((data) => {

                    this.getmhoteldetail();
                  })
                }
              })
            }

          }
          this.getmhoteldetail();
          this.totalVMB = 0;
          se.totalService = 0;
          //chặng dừng nếu có
          if (se.listMyTrips[0].booking_json_data) {
            this.booking_json_data = JSON.parse(se.listMyTrips[0].booking_json_data);
            let TotalPriceReturn = 0;
            let TotalPriceGo = 0;
            this.booking_json_data.forEach(item => {
              if (item.Passengers) {
                item.Passengers.forEach(element => {
                  if (element.GiaTienHanhLyTA) {
                    se.totalService = se.totalService + Number(element.GiaTienHanhLyTA);
                  }
                  if (element.SeatPriceTA) {
                    se.totalService = se.totalService + Number(element.SeatPriceTA);
                  }
                  //se.totalService = se.totalService + Number(element.GiaTienHanhLyTA) + Number(element.SeatPriceTA);
                });
              }
              if (item.PromotionNote && this.isJson(item.PromotionNote)) {
                this.PromotionNote = JSON.parse(item.PromotionNote);
                TotalPriceReturn = this.PromotionNote.TotalPriceReturn;
                TotalPriceGo = this.PromotionNote.TotalPriceGo;
              }

              if (item.Transits && item.Transits.length > 1) {
                this.ischeckStops = true;
              }
            })
            if (this.ischeckStops) {
              this.booking_json_data.forEach(item => {
                if (item.Transits) {
                  for (let i = 0; i < item.Transits.length; i++) {
                    item.Transits[i].departAirport = this.getAirportByCode(item.Transits[i].FromPlaceCode);
                    item.Transits[i].returnAirport = this.getAirportByCode(item.Transits[i].ToPlaceCode);
                    item.Transits[i].DepartureTime = moment(item.Transits[i].DepartTime).format('HH:mm')
                    item.Transits[i].ArrivalTime = moment(item.Transits[i].LandingTime).format('HH:mm')
                    if (i > 0) {
                      var DepartureDate: any = this.parseDatetime(item.DepartureDate, item.Transits[i].DepartureTime)
                      var LandingTime: any = this.parseDatetime(item.DepartureDate, item.Transits[i - 1].ArrivalTime)
                      let hours = (DepartureDate - LandingTime) / 36e5;
                      // item.Transits[i].hours =hours;
                      let layminutes: any = hours - (Math.floor(hours));
                      item.Transits[i].timeOverStop = Math.floor(hours) + " tiếng " + (layminutes > 0 ? (+Math.round(layminutes * 60) + " phút") : '');
                    }
                  }

                }
              })
            }
            let coutDCdepart = 0;
            let coutDCreturn = 0;
            if (TotalPriceGo > 0) {
              coutDCdepart = 2;
            }
            if (TotalPriceReturn > 0) {
              coutDCreturn = 2;
            }
            se.coutDC = coutDCdepart + coutDCreturn;
            se.totalDichung = TotalPriceGo + TotalPriceReturn;
            se.totalVMB = se.listMyTrips[0].amount_after_tax - se.totalService - se.totalDichung + se.listMyTrips[0].promotionDiscountAmount;
            if(se.listMyTrips[0].payment_fee){
              se.totalVMB = se.totalVMB - se.listMyTrips[0].payment_fee;
            }
          }
          if (se.listMyTrips[0].paid_amount && se.listMyTrips[0].paid_amount > 0) {
            se.amount_after_tax = se.listMyTrips[0].amount_after_tax - se.listMyTrips[0].paid_amount;
          } else {
            se.amount_after_tax = se.listMyTrips[0].amount_after_tax
          }

         
        } else {
          se.hasdata = false;
        }

        setTimeout(() => {
          if (se.myloader) {
            se.myloader.dismiss();
          }
          if (se.mytripcount + se.requestripcount > 0) {
            se.nexttripcounttext = " (" + (se.mytripcount + se.requestripcount) + ")";
          } else {
            se.nexttripcounttext = "";
          }
          console.log(se.listMyTrips.length);
          //check case 1bkg tour
          if (se.listMyTrips && se.listMyTrips.length == 1 && se.listMyTrips[0].booking_type == 'TOUR') {
            if (se.listMyTrips[0].child_ages) {
              let countstring = se.listMyTrips[0].child_ages.match(/tuổi/g || []).length;
              let inputstr = se.listMyTrips[0].child_ages;
              for (let index = 0; index < countstring; index++) {
                inputstr = inputstr.replace('tuổi', 't');
              }
              se.listMyTrips[0].childAgesDisplay = inputstr;
            }
            se.getBookingTourDetail(se.listMyTrips[0]);
          }

          else if (se.listMyTrips && se.listMyTrips.length == 1 && se.listMyTrips[0].isBookingVMBQT) {
            if(se.listMyTrips[0].isTravelPort){
              se.getSummaryBooking(se.listMyTrips[0]);
            }
            
            if (se.listMyTrips[0].bookingJsonDataParse && se.listMyTrips[0].bookingJsonDataParse.length >0) {
              let arrpolicy = se.listMyTrips[0].off_hotel_paypolicy.split('\r\n');
              se.listMyTrips[0].listpolicy = [];
              arrpolicy.forEach(element => {
                if (element && element.toLowerCase().indexOf('đổi chiều đi') != -1) {
                  se.listMyTrips[0].hasdepartpolicy = true;
                  se.listMyTrips[0].listpolicy.push({ type: 1, name: element.replace('-', ''), isdepart: true, typePolicy:1});//1- đổi vé; 2- hủy vé 
                } else if (element && element.toLowerCase().indexOf('đổi chiều về') != -1) {
                  se.listMyTrips[0].hasreturnpolicy = true;
                  se.listMyTrips[0].listpolicy.push({ type: 1, name: element.replace('-', ''), isdepart: false, typePolicy:1 });
                }
                else if (element && element.toLowerCase().indexOf('hủy chiều đi') != -1) {
                  se.listMyTrips[0].hasdepartpolicy = true;
                  se.listMyTrips[0].listpolicy.push({ type: 2, name: element.replace('-', ''), isdepart: true, typePolicy:2 });
                } else if (element && element.toLowerCase().indexOf('hủy chiều về') != -1) {
                  se.listMyTrips[0].hasreturnpolicy = true;
                  se.listMyTrips[0].listpolicy.push({ type: 2, name: element.replace('-', ''), isdepart: false, typePolicy:2 });
                }
              });
              // se.listMyTrips[0].listpolicy = [];
              // if(se.listMyTrips[0].bookingJsonDataParse[0] && se.listMyTrips[0].bookingJsonDataParse[0].cancelPolicy){
              //   se.listMyTrips[0].hasdepartpolicy = true;
              //   se.listMyTrips[0].listpolicy.push({ type: 2, name: se.listMyTrips[0].bookingJsonDataParse[0].cancelPolicy, isdepart: true, typePolicy:2});//1- đổi vé; 2- hủy vé 
              // }
              // if(se.listMyTrips[0].bookingJsonDataParse[0] && se.listMyTrips[0].bookingJsonDataParse[0].changePolicy){
              //   se.listMyTrips[0].hasdepartpolicy = true;
              //   se.listMyTrips[0].listpolicy.push({ type: 1, name: se.listMyTrips[0].bookingJsonDataParse[0].changePolicy, isdepart: true, typePolicy:1});
              // }
              // if(se.listMyTrips[0].bookingJsonDataParse[1] && se.listMyTrips[0].bookingJsonDataParse[1].cancelPolicy){
              //   se.listMyTrips[0].hasreturnpolicy = true;
              //   se.listMyTrips[0].listpolicy.push({ type: 2, name: se.listMyTrips[0].bookingJsonDataParse[1].cancelPolicy, isdepart: false, typePolicy:2});//1- đổi vé; 2- hủy vé 
              // }
              // if(se.listMyTrips[0].bookingJsonDataParse[1] && se.listMyTrips[0].bookingJsonDataParse[1].changePolicy){
              //   se.listMyTrips[0].hasdepartpolicy = true;
              //   se.listMyTrips[0].listpolicy.push({ type: 1, name: se.listMyTrips[0].bookingJsonDataParse[1].changePolicy, isdepart: false, typePolicy:1});
              // }
            }
           

            if (se.listMyTrips[0].paid_amount && se.listMyTrips[0].paid_amount > 0) {
              se.listMyTrips[0].priceShow = (se.listMyTrips[0].amount_after_tax - se.listMyTrips[0].paid_amount).toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
            }
            //pdanh 12-07-2023: Sửa lỗi sync thông tin, điều kiện vé update dưới CRM
            //Nếu có cập nhật từ CRM thì ưu tiên show thông tin update dưới CRM( 'ticketConditions' trong object 'bookingJsonDataParse')
            if(se.listMyTrips[0].bookingJsonDataParse[0] && se.listMyTrips[0].bookingJsonDataParse[0].ticketConditions){
              se.listMyTrips[0].departTicketInfoCRM = se.listMyTrips[0].bookingJsonDataParse[0].ticketConditions;
            }
            if(se.listMyTrips[0].bookingJsonDataParse[1] && se.listMyTrips[0].bookingJsonDataParse[1].ticketConditions){
              se.listMyTrips[0].returnTicketInfoCRM = se.listMyTrips[0].bookingJsonDataParse[1].ticketConditions;
            }
          }
          else if(se.listMyTrips && se.listMyTrips.length == 1 && se.listMyTrips[0].booking_type == 'TICKET'){
            if ((se.listMyTrips[0].payment_status == 1 || se.listMyTrips[0].payment_status == 5 ) &&  se.listMyTrips[0].approve_date){
              this.gf.ticketGetBookingCRM(se.listMyTrips[0].booking_id).then((data) => {
                this.objectDetail=data;
               
                if(this.objectDetail && this.objectDetail.startDate){
                  let arrcd = this.objectDetail.startDate.split('-');
                  let nd = new Date(arrcd[0], arrcd[1] - 1, arrcd[2]);
                  this.objectDetail.startDateShow = moment(nd).format('DD-MM-YYYY');
                }

                var objmap;
                if (this.objectDetail.listNotes) {
                   objmap = this.objectDetail.listNotes.filter((item) => item.qrLink);
                }

                // if(this.objectDetail && this.objectDetail.fileUrls && this.objectDetail.fileUrls.length >0){
                //   let _arrsplit = this.objectDetail.fileUrls[0].split('&');
                //   if(_arrsplit && _arrsplit.length >0 && _arrsplit[1]){
                //     let _fname = _arrsplit[1].split('=');
                //     this.ticketDownloadFile = _fname[1] || '';
                //   }
                // }
                if(this.objectDetail && this.objectDetail.fileUrls && this.objectDetail.fileUrls.length >0){
                  this.objectDetail.fileUrls.forEach(element => {
                    if(element.indexOf('&') != -1){
                      let _arrsplit = element.split('&');
                      if(_arrsplit && _arrsplit.length >0 && _arrsplit[1]){
                        let _fname = _arrsplit[1].split('=');
                        this.ticketDownloadFiles.push({name: _fname[1] || '', url: element});
                      }
                    }else{
                      this.ticketDownloadFiles.push({name: element, url: element });
                    }
                   
                  });
                  
                }
                if(objmap && objmap.length >0){
                  this.ischeckqrLink=true;
                }else{
                  
                    this.GetVoucherLinks(se.listMyTrips[0].booking_id).then((data) => {
                      se.listMyTrips[0].listVoucher=data;
                      if (Array.isArray(se.listMyTrips[0].listVoucher)) {
                        for (let index = 0; index < se.listMyTrips[0].listVoucher.length; index++) {
                          const result = se.listMyTrips[0].listVoucher[index].split("filename=");
                          console.log(result);
                          var objlink= {
                            filename:result[1],
                            link:se.listMyTrips[0].listVoucher[index]='https://beta-vvcapi.ivivu.com/'+se.listMyTrips[0].listVoucher[index]
                          }
                          se.listMyTrips[0].listVoucher[index]=objlink;
                        }
                      }else{
                        se.listMyTrips[0].listVoucher=[];
                      }
                    
                    })
                  
               
                  
                }
            
              });
            }
            this.gf.RequestApi('GET', C.urls.baseUrl.urlTicket + '/api/Booking/Summary/' + se.listMyTrips[0].booking_id , {}, {}, '', '').then((data) => {
              if (data && data.success) {
                this.includePrice = data.data.booking.includePrice.split('|');
                this.includePrice = "<p>" + this.includePrice[0] + " | " + this.includePrice[1] + "</p>" + this.includePrice[2] + this.includePrice[3];
                this.objSummary=data.data.booking;

                this.showIncludeContent ='';
                if(this.objSummary && this.objSummary.includePrice){
                  let arr = this.objSummary.includePrice.split('|');
                  console.log(arr);
                  if(arr && arr.length >0 && arr[4]){
                    this.showIncludeContent = arr[4];
                  }
                }
              }
            });
          }
          if (se.listMyTrips && se.listMyTrips.length == 1 && !(se.listMyTrips[0].pay_method == 3 || se.listMyTrips[0].pay_method == 51 || se.listMyTrips[0].pay_method == 2)) {
            se.buildLinkQrCode(se.listMyTrips[0]);
          }
          // console.log('rq xxxxx')
          // console.log(se.listMyTrips[0].bookingjson[0].RequestCheckin)
          se.zone.run(() => {
            se.hasloaddata = true;
            se.hasdata = true;
          })

        }, 300);
        se.getListSupportByUser(this.loginuser);
      }
      //List trip đã đi
      else {
        if (lstTrips && lstTrips.trips && lstTrips.trips.length > 0) {

          if (this.gf.getParams('selectedTab3') && this.gf.getParams('notifiBookingCode')) {
            this.activeTabTrip = 3;
            this.tabtrip = 'historytrip';
          }

          lstTrips.trips.forEach(elementHis => {
            if (!se.gf.checkExistsItemInArray(se.listHistoryTrips, elementHis, 'order')) {
              if (elementHis.avatar && elementHis.avatar.indexOf('i.travelapi.com') == -1 && elementHis.booking_type != 'TICKET') {
                let urlavatar = elementHis.avatar.substring(0, elementHis.avatar.length - 4);
                let tail = elementHis.avatar.substring(elementHis.avatar.length - 4, elementHis.avatar.length);
                elementHis.avatar157 = urlavatar + "-" + "110x157" + tail;
                elementHis.avatar104 = urlavatar + "-" + "110x104" + tail;
                elementHis.avatar110 = urlavatar + "-" + "110x118" + tail;
              } else {
                if (elementHis.booking_type != 'VC') {
                  elementHis.avatar110 = "//cdn1.ivivu.com/iVivu/2018/02/07/15/noimage-110x124.jpg";
                }
              
              }
              if (elementHis.avatar) {
                elementHis.avatar = (elementHis.avatar.toLocaleString().trim().indexOf("http") != -1) ? elementHis.avatar : 'https:' + elementHis.avatar;
              }
              elementHis.checkInDisplayCity = se.gf.getDayOfWeek(elementHis.checkInDate).daynameshort + ", " + moment(elementHis.checkInDate).format('DD-MM-YYYY');
              elementHis.checkOutDisplayCity = se.gf.getDayOfWeek(elementHis.checkOutDate).daynameshort + ", " + moment(elementHis.checkOutDate).format('DD-MM-YYYY');

              se.getRatingStar(elementHis);

              //map thông tin giống với trip future
              if (elementHis.booking_id.indexOf("FLY") == -1 && elementHis.booking_id.indexOf("VMB") == -1) {
                elementHis.isFlyBooking = false;
                if (elementHis.flight_ticket_info && elementHis.flight_ticket_info.indexOf("VXR") != -1) {
                  elementHis.booking_type = "COMBO_VXR";
                }
                else if (elementHis.booking_id.indexOf('VC') != -1) {
                  elementHis.booking_type = "TICKET";//TOUR
                 
                  elementHis.VVCCheckinDisplay =se.gf.getDayOfWeek(se.gf.getCinIsoDate(elementHis.checkInDate)).daynameshort + ", " +  moment(elementHis.checkInDate).format('DD-MM-YYYY');
                }
                //tour
                else if (elementHis.booking_id && (elementHis.booking_id.indexOf("DL") != -1 || elementHis.booking_id.indexOf("TO") != -1)) {
                  elementHis.booking_type = "TOUR";
                  elementHis.tourCheckinDisplay = moment(elementHis.checkInDate).format('DD-MM-YYYY');
                  let _listpax = elementHis.totalPaxStr.split('|');
                  _listpax = _listpax.map((p) => { return p.trim().split(' ').slice(1).join(' ').replace('n', 'N').replace('t', 'T') + ' x' + p.trim().split(' ')[0] });
                  elementHis.tourListPax = _listpax;
                }
                if (elementHis.booking_type == "20" || elementHis.booking_id.indexOf('OFF') != -1 || elementHis.booking_id.indexOf('TO') != -1) {

                  if (elementHis.hotel_name && (elementHis.room_id || elementHis.hotel_name.toUpperCase().indexOf('VOUCHER') != -1)) {
                    elementHis.bookingOffType = 1;//KS
                  }
                  else if (elementHis.hotel_name && (elementHis.hotel_name.toUpperCase().indexOf('VIETJET') != -1
                    || elementHis.hotel_name.toUpperCase().indexOf('VIETNAM') != -1)
                    || elementHis.hotel_name.toUpperCase().indexOf('JETSTAR') != -1
                    || elementHis.hotel_name.toUpperCase().indexOf('BAMBOO') != -1
                    || elementHis.hotel_name.toUpperCase().indexOf('VMB') != -1
                    || elementHis.hotel_name.toUpperCase().indexOf('VÉ MÁY BAY') != -1) {
                    elementHis.bookingOffType = 2;//VMB
                  }
                  else if (elementHis.hotel_name && (elementHis.hotel_name.toUpperCase().indexOf('TRANSFER') != -1 || elementHis.hotel_name.toUpperCase().indexOf('XE') != -1)) {
                    elementHis.bookingOffType = 3;//DC
                  }
                  else if (elementHis.booking_id.indexOf('TO') != -1) {
                    elementHis.bookingOffType = 4;//TOUR
                  }
                }
                //if (elementHis.payment_status != 3 && elementHis.payment_status != -2) {
                if (elementHis.avatar && elementHis.avatar.indexOf("104x104") == -1 && elementHis.avatar.indexOf('i.travelapi.com') == -1 && elementHis.booking_type != 'TICKET') {
                  // let urlavatar = elementHis.avatar.substring(0, elementHis.avatar.length - 4);
                  // let tail = elementHis.avatar.substring(elementHis.avatar.length - 4, elementHis.avatar.length);
                  // elementHis.avatar = urlavatar + "-" + "104x104" + tail;
                  const hasCdn1 = elementHis.avatar.includes("cdn1");
                  if (hasCdn1) {
                    const imageUrl = elementHis.avatar;
                    const newImageUrl = imageUrl.replace(/(\.\w+)$/, "-104x104$1");
                    elementHis.avatar = newImageUrl;
                  }
                }
                if (elementHis.delivery_payment_date) {
                  let arrpaymentdate = elementHis.delivery_payment_date.split("T");
                  let hour = '', day = '';
                  let arrday;
                  if (arrpaymentdate && arrpaymentdate.length > 1) {
                    //hour = arrpaymentdate[1].substring(0,5);
                    let arrhour = arrpaymentdate[1].substring(0, 5).split(":");
                    if (arrhour && arrhour.length > 0) {
                      hour = arrhour[0].toString() + "h" + arrhour[1].toString();
                    }
                    arrday = arrpaymentdate[0].split('-');
                    if (arrday && arrday.length > 0) {
                      day = arrday[2].toString() + "/" + arrday[1].toString();
                    }
                  }
                  elementHis.deliveryPaymentDisplay = "" + hour + ", " + day;
                  let arrhours = arrpaymentdate[1].split(":");
                  let today = new Date();
                  let d = new Date(Number(arrday[0]), Number(arrday[1]) - 1, Number(arrday[2]), Number(arrhours[0]), Number(arrhours[1]), 0);
                  let diffminutes = moment(d).diff(today, 'minutes');
                  //Quá hạn thanh toán thì không hiển thị thông tin thanh toán
                  if (diffminutes < 0) {
                    elementHis.deliveryPaymentDisplay = "";
                  }

                  if (elementHis.booking_type=="TICKET") {
                    let arrtemp = elementHis.inclusion.split('|');
                    elementHis.paxDisplay = arrtemp[6];
                  }
                  // if (elementHis.extra_guest_info) {
                  //   let arrpax = elementHis.extra_guest_info.split('|');
                  //   if (arrpax && arrpax.length > 1 && arrpax[1] > 0 && arrpax[2] == 0) {
                  //     elementHis.paxDisplay = arrpax[0].toString() + " người lớn, " + arrpax[1].toString() + " trẻ em";
                  //     elementHis.adultDisplay = "Người lớn x"+ arrpax[0];
                  //     elementHis.childDisplay = "Trẻ em x"+ arrpax[1];
                  //   } else if (arrpax && arrpax[0] > 0 && arrpax[1] == 0 && arrpax[2] == 0) {
                  //     elementHis.paxDisplay = arrpax[0].toString() + " người lớn";
                  //     elementHis.adultDisplay = "Người lớn x"+ arrpax[0];
                  //   }else if (arrpax && arrpax[0] > 0 && arrpax[1] >0 && arrpax[2] > 0){
                  //     elementHis.paxDisplay = arrpax[0].toString() + " người lớn, " + arrpax[1].toString() + " trẻ em, " + arrpax[2].toString() + " người già";
                  //     elementHis.adultDisplay = "Người lớn x"+ arrpax[0];
                  //     elementHis.childDisplay = "Trẻ em x"+ arrpax[1];
                  //     elementHis.elderDisplay = "Người già x"+ arrpax[2];
                  //   }else if (arrpax && arrpax[0] > 0 && arrpax[2] > 0){
                  //     elementHis.paxDisplay = arrpax[0].toString() + " người lớn," + arrpax[2].toString() + " người già";
                  //     elementHis.adultDisplay = "Người lớn x"+ arrpax[0];
                  //     elementHis.elderDisplay = "Người già x"+ arrpax[2];
                  //   }
                  // }
                  if (elementHis.amount_after_tax) {
                    elementHis.priceShow = Math.round(elementHis.amount_after_tax).toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
                  }
                }
                elementHis.isRequestTrip = false;
                //date display
                elementHis.checkInDisplay = se.gf.getDayOfWeek(elementHis.checkInDate).daynameshort + ", " + moment(elementHis.checkInDate).format("DD-MM-YYYY");
                elementHis.checkOutDisplay = se.gf.getDayOfWeek(elementHis.checkOutDate).daynameshort + ", " + moment(elementHis.checkOutDate).format("DD-MM-YYYY");
                //Thay mới ngày bay
                if (elementHis.bookingsComboData) {
                  if (elementHis.bookingsComboData.length > 1 && ['GO', 'RETURN', 'GOROUNDTRIP', 'RETURNROUNDTRIP'].indexOf(elementHis.bookingsComboData[1].trip_Code) == -1 && elementHis.bookingsComboData[1].airlineName && elementHis.bookingsComboData[1].airlineName.toLowerCase().indexOf('cathay') == -1) {
                    for (let i = 0; i < 2; i++) {
                      const elementNew = elementHis.bookingsComboData[i];
                      if (i == 0) {
                        if (elementNew.departureDate && !elementNew.departureDateNew) {
                          let newdate;
                          if (elementNew.departureDate.indexOf('-') != -1) {
                            newdate = elementNew.departureDate.split('-');
                          }
                          if (elementNew.departureDate.indexOf('/') != -1) {
                            newdate = elementNew.departureDate.split('/');
                          }
                          let d;
                          if (newdate && newdate.length > 1) {
                            d = new Date(Number(newdate[2]), Number(newdate[1]) - 1, Number(newdate[0]));
                          }
                          // element.checkInDisplay = se.gf.getDayOfWeek(elementNew.departureDate).daynameshort+ ", " + moment(elementNew.departureDate).format("DD-MM-YYYY");
                          elementHis.checkInDisplay = se.gf.getDayOfWeek(d).daynameshort + ", " + moment(d).format("DD-MM-YYYY");
                        }
                        if (elementNew.departureDateNew) {
                          let newdate;
                          if (elementNew.departureDateNew.indexOf('-') != -1) {
                            newdate = elementNew.departureDateNew.split('-');
                          }
                          if (elementNew.departureDateNew.indexOf('/') != -1) {
                            newdate = elementNew.departureDateNew.split('/');
                          }
                          let d;
                          if (newdate && newdate.length > 1) {
                            d = new Date(Number(newdate[2]), Number(newdate[1]) - 1, Number(newdate[0]));
                          }
                          // element.checkInDisplay = se.gf.getDayOfWeek(elementNew.departureDateNew).daynameshort+ ", " + moment(elementNew.departureDateNew).format("DD-MM-YYYY");
                          elementHis.checkInDisplay = se.gf.getDayOfWeek(d).daynameshort + ", " + elementNew.departureDateNew;
                        }
                      } else {
                        if (elementNew.departureDate && !elementNew.departureDateNew) {
                          let newdate;
                          if (elementNew.departureDate.indexOf('-') != -1) {
                            newdate = elementNew.departureDate.split('-');
                          }
                          if (elementNew.departureDate.indexOf('/') != -1) {
                            newdate = elementNew.departureDate.split('/');
                          }
                          let d;
                          if (newdate && newdate.length > 1) {
                            d = new Date(Number(newdate[2]), Number(newdate[1]) - 1, Number(newdate[0]));
                          }
                          // element.checkInDisplay = se.gf.getDayOfWeek(elementNew.departureDate).daynameshort+ ", " + moment(elementNew.departureDate).format("DD-MM-YYYY");
                          elementHis.checkOutDisplay = se.gf.getDayOfWeek(d).daynameshort + ", " + moment(d).format("DD-MM-YYYY");
                        }
                        if (elementNew.departureDateNew) {
                          let newdate;
                          if (elementNew.departureDateNew.indexOf('-') != -1) {
                            newdate = elementNew.departureDateNew.split('-');
                          }
                          if (elementNew.departureDateNew.indexOf('/') != -1) {
                            newdate = elementNew.departureDateNew.split('/');
                          }
                          let d;
                          if (newdate && newdate.length > 1) {
                            d = new Date(Number(newdate[2]), Number(newdate[1]) - 1, Number(newdate[0]));
                          }
                          // element.checkInDisplay = se.gf.getDayOfWeek(elementNew.departureDateNew).daynameshort+ ", " + moment(elementNew.departureDateNew).format("DD-MM-YYYY");
                          elementHis.checkOutDisplay = se.gf.getDayOfWeek(d).daynameshort + ", " + elementNew.departureDateNew;
                        }
                      }

                    }


                  } else {

                    if (elementHis.bookingsComboData[0].departureDate && !elementHis.bookingsComboData[0].departureDateNew) {
                      let newdate;
                      if (elementHis.bookingsComboData[0].departureDate.indexOf('-') != -1) {
                        newdate = elementHis.bookingsComboData[0].departureDate.split('-');
                      }
                      if (elementHis.bookingsComboData[0].departureDate.indexOf('/') != -1) {
                        newdate = elementHis.bookingsComboData[0].departureDate.split('/');
                      }
                      let d;
                      if (newdate && newdate.length > 1) {
                        d = new Date(Number(newdate[2]), Number(newdate[1]) - 1, Number(newdate[0]));
                      }
                      elementHis.checkInDisplay = se.gf.getDayOfWeek(d).daynameshort + ", " + moment(d).format("DD-MM-YYYY");
                      elementHis.checkOutDisplay = se.gf.getDayOfWeek(d).daynameshort + ", " + moment(d).format("DD-MM-YYYY");
                    }
                    if (elementHis.bookingsComboData[0].departureDateNew) {
                      let newdate;
                      if (elementHis.bookingsComboData[0].departureDateNew.indexOf('-') != -1) {
                        newdate = elementHis.bookingsComboData[0].departureDateNew.split('-');
                      }
                      if (elementHis.bookingsComboData[0].departureDateNew.indexOf('/') != -1) {
                        newdate = elementHis.bookingsComboData[0].departureDateNew.split('/');
                      }
                      let d;
                      if (newdate && newdate.length > 1) {
                        d = new Date(Number(newdate[2]), Number(newdate[1]) - 1, Number(newdate[0]));
                      }
                      elementHis.checkInDisplay = se.gf.getDayOfWeek(d).daynameshort + ", " + elementHis.bookingsComboData[0].departureDateNew;
                      elementHis.checkOutDisplay = se.gf.getDayOfWeek(d).daynameshort + ", " + elementHis.bookingsComboData[0].departureDateNew;
                    }
                  }
                }


                elementHis.checkInDisplayShort = se.gf.getDayOfWeek(elementHis.checkInDate).daynameshort + ", " + moment(elementHis.checkInDate).format('DD-MM');
                elementHis.checkOutDisplayShort = se.gf.getDayOfWeek(elementHis.checkOutDate).daynameshort + ", " + moment(elementHis.checkOutDate).format('DD-MM-YYYY');

                se.getRatingStar(elementHis);
                if (elementHis.insuranceInfo && elementHis.insuranceInfo.adultList.length > 0) {
                  if (se.checkItemHasNotClaim(elementHis.insuranceInfo.adultList) || se.checkItemHasNotClaim(elementHis.insuranceInfo.childList)) {
                    se.zone.run(() => {
                      se.valueGlobal.countclaim++;
                    })
                  }
                }

                //tính giờ bay
                if (elementHis.bookingsComboData && elementHis.bookingsComboData.length > 0) {
                  let diffhours = elementHis.bookingsComboData[0].arrivalTime ? elementHis.bookingsComboData[0].arrivalTime.replace(':', '') * 1 - elementHis.bookingsComboData[0].departureTime.replace(':', '') * 1 : 0;
                  if (diffhours) {
                    let str = diffhours.toString();
                    let m = str.substring(str.length - 2, str.length);
                    let h = str.substring(0, str.length - 2);
                    h = h.length < 2 ? "0" + h + "h" : h + "h";
                    m = m != "00" ? m + "m" : "";
                    elementHis.bookingsComboData[0].flightTimeDisplay = h + m;
                  }
                  // let ddate = elementHis.checkInDate;
                  // elementHis.bookingsComboData[0].checkInDisplay = se.gf.getDayOfWeek(ddate).daynameshort+ ", " + moment(ddate).format('DD-MM-YYYY');

                  //Thay mới ngày bay
                  if (elementHis.bookingsComboData) {
                    if (elementHis.bookingsComboData && elementHis.bookingsComboData.length > 1) {

                      for (let i = 0; i < 2; i++) {
                        const elementNew = elementHis.bookingsComboData[i];
                        if (i == 0) {
                          if (elementNew.departureDate && !elementNew.departureDateNew) {
                            let newdate = elementNew.departureDate.split('-');
                            let d;
                            if (newdate && newdate.length > 1) {
                              d = new Date(Number(newdate[2]), Number(newdate[1]) - 1, Number(newdate[0]));
                            }
                            // element.checkInDisplay = se.gf.getDayOfWeek(elementNew.departureDate).daynameshort+ ", " + moment(elementNew.departureDate).format("DD-MM-YYYY");
                            elementNew.checkInDisplay = se.gf.getDayOfWeek(d).daynameshort + ", " + moment(d).format("DD-MM-YYYY");
                          }
                          if (elementNew.departureDateNew) {
                            let newdate = elementNew.departureDateNew.split('-');
                            let d;
                            if (newdate && newdate.length > 1) {
                              d = new Date(Number(newdate[2]), Number(newdate[1]) - 1, Number(newdate[0]));
                            }
                            // element.checkInDisplay = se.gf.getDayOfWeek(elementNew.departureDateNew).daynameshort+ ", " + moment(elementNew.departureDateNew).format("DD-MM-YYYY");
                            elementNew.checkInDisplay = se.gf.getDayOfWeek(d).daynameshort + ", " + elementNew.departureDateNew;
                          }
                        } else {
                          if (elementNew.departureDate && !elementNew.departureDateNew) {
                            let newdate = elementNew.departureDate.split('-');
                            let d;
                            if (newdate && newdate.length > 1) {
                              d = new Date(Number(newdate[2]), Number(newdate[1]) - 1, Number(newdate[0]));
                            }
                            // element.checkInDisplay = se.gf.getDayOfWeek(elementNew.departureDate).daynameshort+ ", " + moment(elementNew.departureDate).format("DD-MM-YYYY");
                            elementNew.checkOutDisplay = se.gf.getDayOfWeek(d).daynameshort + ", " + moment(d).format("DD-MM-YYYY");
                          }
                          if (elementNew.departureDateNew) {
                            let newdate = elementNew.departureDateNew.split('-');
                            let d;
                            if (newdate && newdate.length > 1) {
                              d = new Date(Number(newdate[2]), Number(newdate[1]) - 1, Number(newdate[0]));
                            }
                            // element.checkInDisplay = se.gf.getDayOfWeek(elementNew.departureDateNew).daynameshort+ ", " + moment(elementNew.departureDateNew).format("DD-MM-YYYY");
                            elementNew.checkOutDisplay = se.gf.getDayOfWeek(d).daynameshort + ", " + elementNew.departureDateNew;
                          }
                        }

                      }
                    }
                  }

                  if (elementHis.bookingsComboData && elementHis.bookingsComboData[1]) {
                    let diffhours = elementHis.bookingsComboData[1].arrivalTime ? elementHis.bookingsComboData[1].arrivalTime.replace(':', '') * 1 - elementHis.bookingsComboData[1].departureTime.replace(':', '') * 1 : 0;
                    if (diffhours) {
                      let str = diffhours.toString();
                      let m = str.substring(str.length - 2, str.length);
                      let h = str.substring(0, str.length - 2);
                      h = h.length < 2 ? "0" + h + "h" : h + "h";
                      m = m != "00" ? m + "m" : "";
                      elementHis.bookingsComboData[1].flightTimeDisplay = h + m;
                    }

                    // let rdate = elementHis.checkOutDate;
                    // elementHis.bookingsComboData[1].checkOutDisplay = se.gf.getDayOfWeek(rdate).daynameshort+ ", " + moment(rdate).format('DD') + " thg " + moment(rdate).format('MM')
                  }
                  elementHis.arrPickupDropoff = [];
                  elementHis.bookingsComboData.forEach(el => {
                    if (el.trip_Code == "GO" || el.trip_Code == "RETURN" || el.trip_Code == "GOROUNDTRIP" || el.trip_Code == "RETURNROUNDTRIP") {
                      elementHis.isPickupDropoff = true;
                      el.sortPD = el.trip_Code == "GO" ? 1 : (el.trip_Code == "GOROUNDTRIP" ? 2 : (el.trip_Code == "RETURN" ? 3 : 4));
                      elementHis.arrPickupDropoff.push(el);
                      if (el.departureDate) {
                        let newdate = el.departureDate.split('/');
                        if (newdate && newdate.length > 1) {
                          let d = new Date(Number(newdate[2]), Number(newdate[1]) - 1, Number(newdate[0]));
                          el.departureDateDisplay = moment(d).format("DD-MM");
                        }

                      }

                    }
                    if (el.airlineName.toLowerCase().indexOf('cathay') != -1) {
                      elementHis.hasCathay = true;
                    }
                  });

                  if (elementHis.arrPickupDropoff && elementHis.arrPickupDropoff.length > 0) {
                    se.zone.run(() => elementHis.arrPickupDropoff.sort(function (a, b) {
                      return a.sortPD - b.sortPD;
                    }))
                  }

                }

                // elementHis.bookingsComboData.forEach(el => {
                //   if(el.trip_Code == "GO" || el.trip_Code == "RETURN" || el.trip_Code == "GOROUNDTRIP" || el.trip_Code == "RETURNROUNDTRIP"){
                //     elementHis.isPickupDropoff = true;
                //   }
                // });

                //}
              }

              //list vmb
              else {
                if (elementHis.flight_ticket_info && elementHis.flight_ticket_info.indexOf("VXR") != -1) {
                  elementHis.booking_type = "COMBO_VXR";
                }
                if (elementHis.flight_ticket_info && elementHis.flight_ticket_info.indexOf("VXR") != -1) {
                  elementHis.booking_type = "COMBO_VXR";
                }

                //if (elementHis.payment_status != 3 && elementHis.payment_status != -2) {
                //if (elementHis.payment_status != 3) {
                if (elementHis.avatar && elementHis.avatar.indexOf('i.travelapi.com') == -1 && elementHis.booking_type != 'TICKET') {
                  let urlavatar = elementHis.avatar.substring(0, elementHis.avatar.length - 4);
                  let tail = elementHis.avatar.substring(elementHis.avatar.length - 4, elementHis.avatar.length);
                  elementHis.avatar = urlavatar + "-" + "104x104" + tail;
                }
                if (elementHis.booking_id.indexOf("FLY") != -1 || elementHis.booking_id.indexOf("VMB") != -1 || elementHis.booking_type == "CB_FLY_HOTEL") {
                  elementHis.isFlyBooking = true;
                  if (elementHis.hotel_name.indexOf("VMB QT") != -1  || elementHis.hotel_id == "F000002") {
                    elementHis.isBookingVMBQT = true;
                    if (elementHis.booking_json_data) {
                      // console.log(JSON.parse(elementHis.booking_json_data));
                      elementHis.bookingjson = JSON.parse(elementHis.booking_json_data);
                      if (elementHis.bookingjson && elementHis.bookingjson.length > 0) {
                        elementHis.bookingjson.forEach(elementbkg => {
                          if (elementbkg.Supplier3rd){
                            elementHis.isTravelPort = true;
                          }
                          if (elementbkg && elementbkg.Transits) {
                            elementHis.totalCost += elementbkg.TotalCost * 1;
                           
                            for (let index = 0; index < elementbkg.Transits.length; index++) {
                              const element = elementbkg.Transits[index];
                              if(elementHis.bookingJsonDataParse && elementHis.bookingJsonDataParse[idx] && elementHis.bookingJsonDataParse[idx].transits[index] && elementHis.bookingJsonDataParse[idx].transits[index].departTimeParse){
                                element.DepartTimeDisplay = moment(elementHis.bookingJsonDataParse[idx].transits[index].departTimeParse).format('HH:mm');
                                let _d = elementHis.bookingJsonDataParse[idx].transits[index].departTimeParse;
                                element.DepartDayDisplay = moment(_d).format('DD')+ "Thg " + moment(_d).format('MM');
                                  if(element.LandingTime){
                                    element.LandingTimeDisplay = moment(elementHis.bookingJsonDataParse[idx].transits[index].landingTimeParse).format('HH:mm');
                                    let _dr = elementHis.bookingJsonDataParse[idx].transits[index].landingTimeParse;
                                    element.LandingDayDisplay = moment(_dr).format('DD')+ "Thg " + moment(_dr).format('MM');
                                  }
                                }else{
                                  element.DepartTimeDisplay = moment(new Date(element.DepartTime.replace('/Date(', '').replace(')/', '') * 1)).format('HH:mm');
                                  element.LandingTimeDisplay = moment(new Date(element.LandingTime.replace('/Date(', '').replace(')/', '') * 1)).format('HH:mm');

                                  element.DepartDayDisplay = moment(new Date(element.DepartTime.replace('/Date(', '').replace(')/', '') * 1)).format('DD') + "Thg " + moment(new Date(element.DepartTime.replace('/Date(', '').replace(')/', '') * 1)).format('MM');
                                  element.LandingDayDisplay = moment(new Date(element.LandingTime.replace('/Date(', '').replace(')/', '') * 1)).format('DD') + "Thg " + moment(new Date(element.LandingTime.replace('/Date(', '').replace(')/', '') * 1)).format('MM');
                                }

                              element.departAirport = this.getAirportByCode(element.FromPlaceCode);
                              element.landingAirport = this.getAirportByCode(element.ToPlaceCode);
                              let cin = moment(new Date(element.DepartTime.replace('/Date(', '').replace(')/', '') * 1)).format('YYYY-MM-DD');
                              element.cindisplay = this.gf.getDayOfWeek(cin).daynameshort + ", " + moment(cin).format('DD-MM-YYYY');

                              let elementNext = elementbkg.Transits[index + 1];
                              if (elementNext) {

                                let dt = elementNext.DepartTime.replace('/Date(', '').replace(')/', '') * 1;
                                let lt = element.LandingTime.replace('/Date(', '').replace(')/', '') * 1;
                                let diffminutes = moment(dt).diff(lt, 'minutes');
                                if (diffminutes) {
                                  let hours: any = Math.floor(diffminutes / 60);
                                  let minutes: any = diffminutes - (hours * 60);
                                  if (hours < 10) {
                                    hours = hours != 0 ? "0" + hours : "0";
                                  }
                                  if (minutes < 10) {
                                    minutes = "0" + minutes;
                                  }
                                  element.timeOverlay = hours + ' tiếng ' + minutes + ' phút';
                                }
                              }
                            }

                          }
                        });
                      
                      }
                      elementHis.flightRoundTripStr = 'Vé máy bay ' + (elementHis.bookingjson.length > 1 ? 'khứ hồi' : 'một chiều');
                      if (elementHis.totalPaxStr) {
                        elementHis.totalPaxStrVMBQT = elementHis.totalPaxStr.replace(' |', ',');
                      }
                    }
                  }
                  elementHis.totalpricedisplay = se.gf.convertNumberToString(Math.round(elementHis.amount_after_tax));

                  elementHis.checkInDisplayCity = se.gf.getDayOfWeek(elementHis.checkInDate).daynameshort + ", " + moment(elementHis.checkInDate).format("DD-MM-YYYY");
                  elementHis.checkOutDisplayCity = se.gf.getDayOfWeek(elementHis.checkOutDate).daynameshort + ", " + moment(elementHis.checkOutDate).format("DD-MM-YYYY");
                  let departFlight = elementHis.bookingsComboData.filter((f) => { return moment(f.departureDate).format('DD-MM-YYYY') == moment(elementHis.checkInDate).format('DD-MM-YYYY') && f.airlineCode });
                  if (departFlight && departFlight.length > 0) {
                    elementHis.itemdepart = departFlight[0];

                  } else {
                    elementHis.itemdepart = elementHis.bookingsComboData[0];

                  }
                  elementHis.flightFrom = elementHis.itemdepart.flightFrom;
                  elementHis.flightTo = elementHis.itemdepart.flightTo;
                  elementHis.departAirport = se.getAirportByCode(elementHis.itemdepart.departCode);
                  elementHis.returnAirport = se.getAirportByCode(elementHis.itemdepart.arrivalCode);

                  se.textDeparture = se.getDayOfWeek(elementHis.itemdepart.departureDate) + ', ' + elementHis.itemdepart.departureDate;
                  se.textRegionDepart = se.getRegionByCode(elementHis.itemdepart.departCode);
                  se.textRegionReturn = se.getRegionByCode(elementHis.itemdepart.arrivalCode);
                  se.textAirpotDepart = se.getAirpot(elementHis.itemdepart.departCode);
                  se.textAirpotReturn = se.getAirpot(elementHis.itemdepart.arrivalCode);

                  let idxlug = 0;
                  elementHis.textChildDisplay = "";
                  elementHis.arrPickupDropoff = [];
                  elementHis.bookingsComboData.forEach(el => {

                    if (el.airlineName.indexOf('Vietnam Airlines') != -1) {
                      //chặng dừng
                      if (el.flightNumner.indexOf(',') != -1) {
                        let fnstring = el.flightNumner.split(',')[0].trim();
                        let fn = fnstring.substring(2, el.flightNumner.length) * 1;
                        if (fn >= 6000) {
                          el.operatedBy = "Khai thác bởi Pacific Airlines";
                        }
                      } else {//bay thẳng
                        let fn = el.flightNumner.substring(2, el.flightNumner.length) * 1;
                        if (fn >= 6000) {
                          el.operatedBy = "Khai thác bởi Pacific Airlines";
                        }
                      }

                    }

                    if (el.passengers && el.passengers.length > 0) {
                      for (let index = 0; index < el.passengers.length; index++) {
                        el.passengers[index].arrlug = [];
                      }
                      for (let index = 0; index < el.passengers.length; index++) {
                        const elementHislug = el.passengers[index];
                        let departElementHisLug = null;
                        if (idxlug == 1) {
                          departElementHisLug = elementHis.bookingsComboData[idxlug - 1].passengers;
                        }

                        if (elementHislug.hanhLy && elementHislug.hanhLy.indexOf(':') == -1 && (elementHislug.hanhLy.replace('kg', '')) * 1 > 0) {
                          if (idxlug == 1) {
                            if (departElementHisLug) {
                              let itemfilter = departElementHisLug.filter((l) => { return l.arrlug && l.name == elementHislug.name });
                              if (itemfilter && itemfilter.length > 0) {
                                itemfilter[0].arrlug.push({ lugname: el.departCode + " - " + el.arrivalCode, lugweight: elementHislug.hanhLy, lugprice: elementHislug.giaTienHanhLy })
                              }
                            } else {
                              elementHislug.arrlug.push({ lugname: el.departCode + " - " + el.arrivalCode, lugweight: elementHislug.hanhLy, lugprice: elementHislug.giaTienHanhLy })
                            }
                          } else {
                            if (elementHislug.arrlug.length > 0) {
                              let itemfilter = elementHislug.arrlug.filter((l) => { return l.paxname == elementHislug.name });
                              if (itemfilter && itemfilter.length > 0) {
                                itemfilter[0].arrlug.push({ lugname: el.departCode + " - " + el.arrivalCode, lugweight: elementHislug.hanhLy, lugprice: elementHislug.giaTienHanhLy })
                              }
                            } else {
                              elementHislug.arrlug.push({ lugname: el.departCode + " - " + el.arrivalCode, lugweight: elementHislug.hanhLy, lugprice: elementHislug.giaTienHanhLy })
                            }
                          }

                        }

                      }

                    }

                    if (el.trip_Code == "GO" || el.trip_Code == "RETURN" || el.trip_Code == "GOROUNDTRIP" || el.trip_Code == "RETURNROUNDTRIP") {
                      elementHis.isPickupDropoff = true;
                      el.sortPD = el.trip_Code == "GO" ? 1 : (el.trip_Code == "GOROUNDTRIP" ? 2 : (el.trip_Code == "RETURN" ? 3 : 4));
                      elementHis.arrPickupDropoff.push(el);
                      if (el.departureDate) {
                        let newdate = el.departureDate.split('/');
                        if (newdate && newdate.length > 1) {
                          let d = new Date(Number(newdate[2]), Number(newdate[1]) - 1, Number(newdate[0]));
                          el.departureDateDisplay = moment(d).format("DD-MM");
                        }

                      }

                    }
                    if (el.airlineName.toLowerCase().indexOf('cathay') != -1) {
                      elementHis.hasCathay = true;
                    }

                    idxlug++;
                  })

                  if (elementHis.arrPickupDropoff && elementHis.arrPickupDropoff.length > 0) {
                    se.zone.run(() => elementHis.arrPickupDropoff.sort(function (a, b) {
                      return a.sortPD - b.sortPD;
                    }))
                  }

                  if (elementHis.bookingsComboData.length > 1) {
                    let returnFlight = elementHis.bookingsComboData.filter((f) => { return moment(f.departureDate).format('DD-MM-YYYY') == moment(elementHis.checkOutDate).format('DD-MM-YYYY') && f.airlineCode });
                    if (returnFlight && returnFlight.length > 0) {
                      elementHis.itemreturn = returnFlight[0];

                    } else {
                      elementHis.itemreturn = elementHis.bookingsComboData[1];

                    }
                    elementHis.textReturn = se.getDayOfWeek(elementHis.itemreturn.departureDate) + ', ' + elementHis.itemreturn.departureDate;
                    se.textArrivalRegionDepart = se.getRegionByCode(elementHis.itemreturn.departCode);
                    se.textArrivalRegionReturn = se.getRegionByCode(elementHis.itemreturn.arrivalCode);
                    se.textAirpotArrivalDepart = se.getAirpot(elementHis.itemreturn.departCode);
                    se.textAirpotArrivalReturn = se.getAirpot(elementHis.itemreturn.arrivalCode);

                  }

                  if (elementHis.bookingsComboData && elementHis.bookingsComboData[0].passengers && elementHis.bookingsComboData[0].passengers.length > 0) {
                    elementHis.adult = 0;
                    elementHis.child = 0;
                    elementHis.infant = 0;

                    elementHis.bookingsComboData[0].passengers.forEach((elementHislug, index) => {
                      let yearold = 18*12;
                      let arr = [];
                      if (elementHislug.dob) {
                        if (elementHislug.dob && elementHislug.dob.indexOf('/') != -1) {
                          arr = elementHislug.dob.split('/');
                        }
                        else if (elementHislug.dob && elementHislug.dob.indexOf('-') != -1) {
                          arr = elementHislug.dob.split('-');
                        }

                        if (arr.length > 0) {
                          let newdob = new Date(Number(arr[2]), Number(arr[1] - 1), Number(arr[0]));
                          yearold = moment(elementHislug.checkInDate).diff(moment(newdob), 'month');
                        }

                        elementHislug.isAdult = yearold > 12*12 ? true : false;
                        if (elementHislug.isAdult) {
                          elementHis.adult += 1;
                        } else {
                          if (!elementHis.textChildDisplay) {
                            elementHis.textChildDisplay = "(";
                          }
                          if (yearold < 2*12) {
                            elementHis.infant += 1;
                            elementHislug.isInfant = true;
                            elementHis.textChildDisplay += elementHis.textChildDisplay && elementHis.textChildDisplay.length > 1 ? ", " + (yearold > 0 ? Math.round(yearold/12) : 1) : (yearold > 0 ? Math.round(yearold/12) : 1);
                          } else {
                            elementHis.child += 1;
                            elementHis.textChildDisplay += elementHis.textChildDisplay && elementHis.textChildDisplay.length > 1 ? ", " + (yearold > 0 ? Math.round(yearold/12) : 1) : (yearold > 0 ? Math.round(yearold/12) : 1);
                          }
                        }

                        if (index == elementHis.bookingsComboData[0].passengers.length - 1 && elementHis.textChildDisplay) {
                          elementHis.textChildDisplay += ")";
                        }

                      }

                      if (elementHislug.hanhLy && elementHislug.hanhLy.length > 0 && elementHislug.hanhLy.indexOf(':') != -1) {
                        elementHislug.hanhLy = elementHislug.hanhLy.replace(/\n/ig, ':');
                        let arrlug = elementHislug.hanhLy.split(':');
                        elementHislug.arrlug = [];
                        if (arrlug && arrlug.length > 0) {
                          let idx = 0;
                          arrlug.forEach(lug => {
                            if (idx > 0) {
                              let arrlugname = lug;
                              if (arrlugname.length > 4) {
                                arrlugname = arrlugname.substring(0, 4);
                              }
                              let lugweight = arrlugname.substring(0, 2);
                              if (idx == 1 && lugweight > 0) {
                                elementHislug.arrlug.push({ lugname: elementHis.bookingsComboData[0].departCode + " - " + elementHis.bookingsComboData[0].arrivalCode, lugweight: arrlugname });
                              }
                              else if (idx == 3 && lugweight > 0) {
                                elementHislug.arrlug.push({ lugname: elementHis.bookingsComboData[0].arrivalCode + " - " + elementHis.bookingsComboData[0].departCode, lugweight: arrlugname });
                              }
                            }
                            idx++;
                          });
                        }
                      }

                    });
                  }

                  //chiều về
                  if (elementHis.bookingsComboData && elementHis.bookingsComboData[1] && elementHis.bookingsComboData[1].passengers && elementHis.bookingsComboData[1].passengers.length > 0) {

                    elementHis.bookingsComboData[1].passengers.forEach((elementHislug, index) => {
                      let yearold = 18*12;
                      let arr = [];
                      if (elementHislug.dob) {
                        if (elementHislug.dob && elementHislug.dob.indexOf('/') != -1) {
                          arr = elementHislug.dob.split('/');
                        }
                        else if (elementHislug.dob && elementHislug.dob.indexOf('-') != -1) {
                          arr = elementHislug.dob.split('-');
                        }

                        if (arr.length > 0) {
                          let newdob = new Date(Number(arr[2]), Number(arr[1] - 1), Number(arr[0]));
                          yearold = moment(elementHislug.checkInDate).diff(moment(newdob), 'month');
                        }

                        elementHislug.isAdult = yearold > 12*12 ? true : false;
                        if (elementHislug.isAdult) {
                          //elementHis.adult += 1;
                        } else {
                          if (yearold < 2*12) {
                            elementHislug.isInfant = true;
                          }
                        }

                      }

                    });
                  }
                }
                //Thay mới ngày bay
                if (elementHis.bookingsComboData) {
                  if (elementHis.bookingsComboData.length > 1 && ['GO', 'RETURN', 'GOROUNDTRIP', 'RETURNROUNDTRIP'].indexOf(elementHis.bookingsComboData[1].trip_Code) == -1 && elementHis.bookingsComboData[1].airlineName && elementHis.bookingsComboData[1].airlineName.toLowerCase().indexOf('cathay') == -1) {
                    for (let i = 0; i < 2; i++) {
                      const elementNew = elementHis.bookingsComboData[i];
                      if (i == 0) {
                        if (elementNew.departureDate && !elementNew.departureDateNew) {
                          let newdate;
                          if (elementNew.departureDate.indexOf('-') != -1) {
                            newdate = elementNew.departureDate.split('-');
                          }
                          if (elementNew.departureDate.indexOf('/') != -1) {
                            newdate = elementNew.departureDate.split('/');
                          }
                          let d;
                          if (newdate && newdate.length > 1) {
                            d = new Date(Number(newdate[2]), Number(newdate[1]) - 1, Number(newdate[0]));
                          }
                          // element.checkInDisplay = se.gf.getDayOfWeek(elementNew.departureDate).daynameshort+ ", " + moment(elementNew.departureDate).format("DD-MM-YYYY");
                          elementHis.checkInDisplay = se.gf.getDayOfWeek(d).daynameshort + ", " + moment(d).format("DD-MM-YYYY");
                        }
                        if (elementNew.departureDateNew) {
                          let newdate;
                          if (elementNew.departureDateNew.indexOf('-') != -1) {
                            newdate = elementNew.departureDateNew.split('-');
                          }
                          if (elementNew.departureDateNew.indexOf('/') != -1) {
                            newdate = elementNew.departureDateNew.split('/');
                          }
                          let d;
                          if (newdate && newdate.length > 1) {
                            d = new Date(Number(newdate[2]), Number(newdate[1]) - 1, Number(newdate[0]));
                          }
                          // element.checkInDisplay = se.gf.getDayOfWeek(elementNew.departureDateNew).daynameshort+ ", " + moment(elementNew.departureDateNew).format("DD-MM-YYYY");
                          elementHis.checkInDisplay = se.gf.getDayOfWeek(d).daynameshort + ", " + elementNew.departureDateNew;
                        }
                      } else {
                        if (elementNew.departureDate && !elementNew.departureDateNew) {
                          let newdate;
                          if (elementNew.departureDate.indexOf('-') != -1) {
                            newdate = elementNew.departureDate.split('-');
                          }
                          if (elementNew.departureDate.indexOf('/') != -1) {
                            newdate = elementNew.departureDate.split('/');
                          }
                          let d;
                          if (newdate && newdate.length > 1) {
                            d = new Date(Number(newdate[2]), Number(newdate[1]) - 1, Number(newdate[0]));
                          }
                          // element.checkInDisplay = se.gf.getDayOfWeek(elementNew.departureDate).daynameshort+ ", " + moment(elementNew.departureDate).format("DD-MM-YYYY");
                          elementHis.checkOutDisplay = se.gf.getDayOfWeek(d).daynameshort + ", " + moment(d).format("DD-MM-YYYY");
                        }
                        if (elementNew.departureDateNew) {
                          let newdate;
                          if (elementNew.departureDateNew.indexOf('-') != -1) {
                            newdate = elementNew.departureDateNew.split('-');
                          }
                          if (elementNew.departureDateNew.indexOf('/') != -1) {
                            newdate = elementNew.departureDateNew.split('/');
                          }
                          let d;
                          if (newdate && newdate.length > 1) {
                            d = new Date(Number(newdate[2]), Number(newdate[1]) - 1, Number(newdate[0]));
                          }
                          // element.checkInDisplay = se.gf.getDayOfWeek(elementNew.departureDateNew).daynameshort+ ", " + moment(elementNew.departureDateNew).format("DD-MM-YYYY");
                          elementHis.checkOutDisplay = se.gf.getDayOfWeek(d).daynameshort + ", " + elementNew.departureDateNew;
                        }
                      }

                    }


                  } else {

                    if (elementHis.bookingsComboData[0].departureDate && !elementHis.bookingsComboData[0].departureDateNew) {
                      let newdate;
                      if (elementHis.bookingsComboData[0].departureDate.indexOf('-') != -1) {
                        newdate = elementHis.bookingsComboData[0].departureDate.split('-');
                      }
                      if (elementHis.bookingsComboData[0].departureDate.indexOf('/') != -1) {
                        newdate = elementHis.bookingsComboData[0].departureDate.split('/');
                      }
                      let d;
                      if (newdate && newdate.length > 1) {
                        d = new Date(Number(newdate[2]), Number(newdate[1]) - 1, Number(newdate[0]));
                      }
                      elementHis.checkInDisplay = se.gf.getDayOfWeek(d).daynameshort + ", " + moment(d).format("DD-MM-YYYY");
                      elementHis.checkOutDisplay = se.gf.getDayOfWeek(d).daynameshort + ", " + moment(d).format("DD-MM-YYYY");
                    }
                    if (elementHis.bookingsComboData[0].departureDateNew) {
                      let newdate;
                      if (elementHis.bookingsComboData[0].departureDateNew.indexOf('-') != -1) {
                        newdate = elementHis.bookingsComboData[0].departureDateNew.split('-');
                      }
                      if (elementHis.bookingsComboData[0].departureDateNew.indexOf('/') != -1) {
                        newdate = elementHis.bookingsComboData[0].departureDateNew.split('/');
                      }
                      let d;
                      if (newdate && newdate.length > 1) {
                        d = new Date(Number(newdate[2]), Number(newdate[1]) - 1, Number(newdate[0]));
                      }
                      elementHis.checkInDisplay = se.gf.getDayOfWeek(d).daynameshort + ", " + elementHis.bookingsComboData[0].departureDateNew;
                      elementHis.checkOutDisplay = se.gf.getDayOfWeek(d).daynameshort + ", " + elementHis.bookingsComboData[0].departureDateNew;
                    }
                  }
                }
              }
              elementHis.isRequestTrip = false;
              if (elementHis.totalPaxStr) {
                elementHis.totalPaxStr = elementHis.totalPaxStr.replace('|', ',');
              }
              //check cathay
              if (elementHis.bookingsComboData) {
                let Temp = [];
                Temp.push(elementHis.bookingsComboData);
                if (Temp) {

                  let Temp_Cathay = [];
                  Temp.forEach(function (item) {

                    Temp_Cathay.push(
                      item.filter(function (word) {
                        return word.airlineName.toLowerCase().includes("cathay");
                      })
                    );
                  });
                  if (
                    Temp_Cathay[0] &&
                    Temp_Cathay[0][0] && Temp_Cathay[0][0].passengers &&
                    Temp_Cathay[0][0].passengers.length > 0
                  )
                    elementHis.IsCathay = true;
                  else {
                    elementHis.IsCathay = false;
                  }
                  if (elementHis.IsCathay && elementHis.itemdepart && elementHis.itemdepart.passengers.length > 0) {
                    elementHis.itemdepart.passengers.forEach(el => {
                      for (let i = 0; i < Temp_Cathay[0][0].passengers.length; i++) {
                        if (el.name.toLowerCase().trim() == Temp_Cathay[0][0].passengers[i].name.toLowerCase().trim()) {
                          el.IsCathay = true;
                          break;
                        }
                      }

                    })
                  }
                }
              }
              se.listHistoryTrips.push(elementHis);
              se.historytripcount++;
              //}

            }

            if (se.listHistoryTrips.length > 0) {
              se._mytripservice.totalHistoryTripText = "(" + se.listHistoryTrips.length + ")";
            }


            if (elementHis.insuranceInfo && elementHis.insuranceInfo.adultList.length > 0) {
              if (se.checkItemHasNotClaim(elementHis.insuranceInfo.adultList) || se.checkItemHasNotClaim(elementHis.insuranceInfo.childList)) {
                se.zone.run(() => {
                  se.valueGlobal.countclaim++;
                })
              }
            }
          });
        }


        se._mytripservice.listHistoryTrips = se.listHistoryTrips;
        se._mytripservice.publicLoadDataMytripHistorySubject(1);
        if (se.valueGlobal.BookingCodeHis && se.gf.getParams('selectedTab3')) {
          se.activeTabTrip = 3;
          se.tabtrip = 'historytrip';
          //Map số bkg trong listtriphistory để focus vào bkg được notifi
          // var idxMap = se.listHistoryTrips.map((item, index) => {
          //   return item.booking_id == se.gf.getParams('notifiBookingCode');
          // });
          // if (idxMap && idxMap.length > 0) {
          //   var idx = idxMap.findIndex((el) => { return el == true });
          //   if (se.checkIsSharingTrip()) {
          //     se.gf.setParams('','notifiBookingCode');
          //     se.feedback(se.listHistoryTrips[idx]);
          //   }
          // }
          //Map số bkg trong listtrip để focus vào bkg được notifi
          var idxMaphis = se.listHistoryTrips.map((item, index) => {
            return item.booking_id == se.valueGlobal.BookingCodeHis;
          });
          if (idxMaphis && idxMaphis.length > 0) {
            var idxhis = idxMaphis.findIndex((el) => { return el == true });
            se.currentTrip = idxhis;
            if (idxhis != -1) {
              se.showtripdetail(se.listHistoryTrips[idxhis]);
            } else {
              
              se.getdata(null, true);
            }
          }
          //Sau khi map được trip thì set giá trị về null
          se.gf.setParams(null, 'notifiBookingCode');
          se.gf.setParams(null, 'selectedTab3');
        }

        se.historytripcounttext = " (" + se.historytripcount + ")";
      }

      if (se._infiniteScroll && se._infiniteScroll.target) {
        se._infiniteScroll.target.complete();
      }
    })


    se.hideloader();

    if (!ishistory) {
      se.storage.get('jti').then((uid: any) => {
        if (uid) {
          se.memberid = uid;
          // se.gf.getCurrentPeriod().then(data => {
          //     if(data){
          //       se.listWeek.push({ id: 1, weekname: "Tuần " + moment(data.periodStartDate).format("DD.MM") + " - " + moment(data.periodEndDate).format("DD.MM"), startDate: data.periodStartDate, endDate: data.periodEndDate });
          //       se.listWeek.push({ id: 2, weekname: "Tuần " + moment(data.periodStartDateNextWeek).format("DD.MM") + " - " + moment(data.periodEndDateNextWeek).format("DD.MM"), startDate: data.periodStartDateNextWeek, endDate: data.periodEndDateNextWeek });

          //       se.loadOrder();
          //     }
          // })
        } else {
          se.mylistOrders = [];
        }
      })
    }
    // if (this.listMyTrips.length ==1) {
    //   this.enableheader = false;
    //   this._mytripservice.tripdetail = this.listMyTrips[0];
    //   this._mytripservice.currentTrip = this.currentTrip;
    //   this.navCtrl.navigateForward('mytripdetail', {animated: true});
    // }
  }


  checkishistorytrip() {
    var se = this;
    var res = false;
    var objmap = se.listHistoryTrips.map((item, index) => {
      return (item.booking_id == se.gf.getParams('notifiBookingCode'));
    });
    return res = (objmap && objmap.length > 0 && objmap.findIndex((el) => { return el == true }) != -1);
  }

  checkIsSharingTrip() {
    var se = this;
    var res = false;
    var objmap = se.listHistoryTrips.map((item, index) => {
      return (item.booking_id == se.gf.getParams('notifiBookingCode') && se.gf.getParams('selectedTab3') != null);
    });
    return res = (objmap && objmap.length > 0 && objmap.findIndex((el) => { return el == true }) != -1);
  }
  /**
   * Thực hiện sort theo checkin/startdate
   * Vì có 2 list mytrip và requestrip nên phải sort lại đồng nhất theo date
   */
  sortMytrip() {
    var se = this;
    if (this.activeTabTrip == 1) {
      if (se.listMyTrips && se.listMyTrips.length > 0) {
        se.zone.run(() => se.listMyTrips.sort(function (a, b) {
          let direction = -1;
          if (!a['isRequestTrip'] && !b['isRequestTrip']) {
            if (moment(a['checkInDate']).diff(moment(b['checkInDate']), 'days') > 0) {
              return -1 * direction;
            }
            else {
              return 1 * direction;
            }
          }
          else if (!a['isRequestTrip'] && b['isRequestTrip']) {
            if (moment(a['checkInDate']).diff(moment(b['start_date']), 'days') > 0) {
              return -1 * direction;
            }
            else {
              return 1 * direction;
            }
          }
          else if (a['isRequestTrip'] && !b['isRequestTrip']) {
            if (moment(a['start_date']).diff(moment(b['checkInDate']), 'days') > 0) {
              return -1 * direction;
            }
            else {
              return 1 * direction;
            }
          } else {
            if (moment(a['start_date']).diff(moment(b['start_date']), 'days') > 0) {
              return -1 * direction;
            }
            else {
              return 1 * direction;
            }
          }
        }));
      }
    }else{
      if (se.listHistoryTrips && se.listHistoryTrips.length > 0) {
        se.zone.run(() => se.listHistoryTrips.sort(function (a, b) {
          let direction = -1;
          if (!a['isRequestTrip'] && !b['isRequestTrip']) {
            if (moment(a['checkInDate']).diff(moment(b['checkInDate']), 'days') > 0) {
              return -1 * direction;
            }
            else {
              return 1 * direction;
            }
          }
          else if (!a['isRequestTrip'] && b['isRequestTrip']) {
            if (moment(a['checkInDate']).diff(moment(b['start_date']), 'days') > 0) {
              return -1 * direction;
            }
            else {
              return 1 * direction;
            }
          }
          else if (a['isRequestTrip'] && !b['isRequestTrip']) {
            if (moment(a['start_date']).diff(moment(b['checkInDate']), 'days') > 0) {
              return -1 * direction;
            }
            else {
              return 1 * direction;
            }
          } else {
            if (moment(a['start_date']).diff(moment(b['start_date']), 'days') > 0) {
              return -1 * direction;
            }
            else {
              return 1 * direction;
            }
          }
        }));
      }
    }
    
  }
  sortMytripBooking() {
    var se = this;
    if (this.activeTabTrip == 1) {
      if (se.listMyTrips && se.listMyTrips.length > 0) {
        se.zone.run(() => se.listMyTrips.sort(function (a, b) {
          let direction = -1;
          if (!a['isRequestTrip'] && !b['isRequestTrip']) {
            if (moment(a['bookingDate']).diff(moment(b['bookingDate']), 'days') > 0) {
              return -1 * direction;
            }
            else {
              return 1 * direction;
            }
          }
          else if (!a['isRequestTrip'] && b['isRequestTrip']) {
            if (moment(a['bookingDate']).diff(moment(b['bookingDate']), 'days') > 0) {
              return -1 * direction;
            }
            else {
              return 1 * direction;
            }
          }
          else if (a['isRequestTrip'] && !b['isRequestTrip']) {
            if (moment(a['bookingDate']).diff(moment(b['bookingDate']), 'days') > 0) {
              return -1 * direction;
            }
            else {
              return 1 * direction;
            }
          } else {
            if (moment(a['bookingDate']).diff(moment(b['bookingDate']), 'days') > 0) {
              return -1 * direction;
            }
            else {
              return 1 * direction;
            }
          }
        }));
      }
    }else{
      if (se.listHistoryTrips && se.listHistoryTrips.length > 0) {
        se.zone.run(() => se.listHistoryTrips.sort(function (a, b) {
          let direction = -1;
          if (!a['isRequestTrip'] && !b['isRequestTrip']) {
            if (moment(a['bookingDate']).diff(moment(b['bookingDate']), 'days') > 0) {
              return -1 * direction;
            }
            else {
              return 1 * direction;
            }
          }
          else if (!a['isRequestTrip'] && b['isRequestTrip']) {
            if (moment(a['bookingDate']).diff(moment(b['bookingDate']), 'days') > 0) {
              return -1 * direction;
            }
            else {
              return 1 * direction;
            }
          }
          else if (a['isRequestTrip'] && !b['isRequestTrip']) {
            if (moment(a['bookingDate']).diff(moment(b['bookingDate']), 'days') > 0) {
              return -1 * direction;
            }
            else {
              return 1 * direction;
            }
          } else {
            if (moment(a['bookingDate']).diff(moment(b['bookingDate']), 'days') > 0) {
              return -1 * direction;
            }
            else {
              return 1 * direction;
            }
          }
        }));
      }
    }
   
  }
  hideloader() {
    var se = this;
    if (se.myloader) {
      se.myloader.dismiss();
    }
  }

  getDayOfWeek(day) {
    let cinthu = '';
    if (day) {
      let arrdate = day.split('/');
      let newdate = new Date(arrdate[2], arrdate[1], arrdate[0]);
      cinthu = moment(newdate).format("dddd");
      switch (cinthu) {
        case "Monday":
          cinthu = "Thứ 2";
          break;
        case "Tuesday":
          cinthu = "Thứ 3";
          break;
        case "Wednesday":
          cinthu = "Thứ 4";
          break;
        case "Thursday":
          cinthu = "Thứ 5";
          break;
        case "Friday":
          cinthu = "Thứ 6";
          break;
        case "Saturday":
          cinthu = "Thứ 7";
          break;
        default:
          cinthu = "Chủ nhật";
          break;
      }
    }

    return cinthu;
  }

  getAirpot(code) {
    let name = '';
    if (this._flightService.listAirport && this._flightService.listAirport.length > 0) {
      let itemairport = this._flightService.listAirport.filter((itemairport) => { return itemairport.code == code });
      return itemairport && itemairport.length > 0 ? itemairport[0].airport : '';
    }
    return '';
    // switch (code) {
    //   case "SGN":
    //     name = "Sân bay Tân Sơn Nhất | "+ code;
    //     break;
    //   case "PQC":
    //     name = "Sân bay Phú Quốc | "+ code;
    //     break;
    //   case "DAD":
    //     name = "Sân bay Đà Nẵng | "+ code;
    //     break;
    //   case "HAN":
    //     name = "Sân bay Nội Bài | "+ code;
    //     break;
    // }
    // return name;
  }

  getRegionByCode(code) {
    let itemairport: any;
    if (this._flightService.listAirport && this._flightService.listAirport.length > 0) {
      itemairport = this._flightService.listAirport.filter((itemairport) => { return itemairport.code == code });
    }
    return itemairport && itemairport.length > 0 ? itemairport[0].city : '';
  }

  setCheckInCheckOutInfo(obj) {
    var se = this;
    se.arrinsurrance = [];
    se.arrchildinsurrance = [];
    se.isFlyBooking = (obj.booking_id.indexOf('FLY') != -1 || obj.booking_id.indexOf("VMB") != -1 || obj.booking_type == "CB_FLY_HOTEL") ? true : false;
    se.datecin = new Date(se.gf.getCinIsoDate(obj.checkInDate));
    se.datecout = new Date(se.gf.getCinIsoDate(obj.checkOutDate));
    se.cindisplay = se.gf.getDayOfWeek(se.datecin).daynameshort + " " + moment(se.datecin).format('DD-MM-YYYY')
    se.coutdisplay = se.gf.getDayOfWeek(se.datecout).daynameshort + " " + moment(se.datecout).format('DD-MM-YYYY')
    if (obj.bookingsComboData) {
      se.valueGlobal.bookingsComboData = obj.bookingsComboData[0];
      se.cincombodeparturedisplay = moment(new Date(obj.bookingsComboData[0].departureDate)).format('DD-MM-YYYY');
      se.cincomboarrivaldisplay = moment(new Date(obj.bookingsComboData[0].arrivalDate)).format('DD-MM-YYYY');
      if (obj.bookingsComboData.length > 1) {
        se.coutcombodeparturedisplay = moment(new Date(obj.bookingsComboData[1].departureDate)).format('DD-MM-YYYY');
        se.coutcomboarrivaldisplay = moment(new Date(obj.bookingsComboData[1].arrivalDate)).format('DD-MM-YYYY');
      }

      if (se.isFlyBooking) {
        se.textDeparture = se.getDayOfWeek(obj.bookingsComboData[0].departureDate) + ', ' + obj.bookingsComboData[0].departureDate;
        se.textRegionDepart = se.getRegionByCode(obj.bookingsComboData[0].flightFrom);
        se.textRegionReturn = se.getRegionByCode(obj.bookingsComboData[0].flightTo);
        se.textAirpotDepart = se.getAirpot(obj.bookingsComboData[0].flightFrom);
        se.textAirpotReturn = se.getAirpot(obj.bookingsComboData[0].flightTo);
        if (obj.bookingsComboData.length > 1) {
          se.textReturn = se.getDayOfWeek(obj.bookingsComboData[1].departureDate) + ', ' + obj.bookingsComboData[1].departureDate;
          se.textArrivalRegionDepart = se.getRegionByCode(obj.bookingsComboData[1].flightFrom);
          se.textArrivalRegionReturn = se.getRegionByCode(obj.bookingsComboData[1].flightTo);
          se.textAirpotArrivalDepart = se.getAirpot(obj.bookingsComboData[1].flightFrom);
          se.textAirpotArrivalReturn = se.getAirpot(obj.bookingsComboData[1].flightTo);
        }

        if (obj.bookingsComboData[0].passengers && obj.bookingsComboData[0].passengers.length > 0) {
          obj.bookingsComboData[0].passengers.forEach((element, index) => {
            if (element.dob) {
              let arr = element.dob.split('/');
              let newdate = new Date(Number(arr[2]), Number(arr[1]), Number(arr[0]));
              let yearold = moment(new Date()).diff(moment(newdate), 'month');
              element.isAdult = yearold > 12*12 ? true : false;
            }


            if (element.hanhLy && element.hanhLy.length > 0) {
              let arrlug = element.hanhLy.split(':');
              element.arrlug = [];
              if (arrlug && arrlug.length > 0) {
                let idx = 0;
                arrlug.forEach(lug => {
                  if (idx > 0) {
                    let arrlugname = lug;
                    if (arrlugname.length > 4) {
                      arrlugname = arrlugname.substring(0, 4);
                    }
                    if (idx == 1) {
                      element.arrlug.push({ lugname: obj.bookingsComboData[0].flightFrom + " - " + obj.bookingsComboData[0].flightTo, lugweight: arrlugname });
                    }
                    else if (obj.bookingsComboData.length > 1 && idx == 2) {
                      element.arrlug.push({ lugname: obj.bookingsComboData[1].flightFrom + " - " + obj.bookingsComboData[1].flightTo, lugweight: arrlugname });
                    }

                  }

                  idx++;
                });
              }
            }
          });
        }
      }
    }

    se.numberOfDay = moment(se.datecout).diff(moment(se.datecin), 'days');

    if (obj.bookingsComboData && obj.bookingsComboData.length > 2) {
      obj.bookingsComboData = obj.bookingsComboData.slice(0, 2);
    }

    if (obj.bookingsComboData && obj.bookingsComboData.length > 1) {
      se.departCodeDisplay = obj.bookingsComboData[0].departCode + ' → ' + obj.bookingsComboData[0].arrivalCode;
      if (obj.bookingsComboData.length > 1) {
        se.arrivalCodeDisplay = obj.bookingsComboData[1].departCode + ' → ' + obj.bookingsComboData[1].arrivalCode;
      }
    }
  }

  checkExitClaim(listcheck, itemcheck, bkgid) {
    var se = this, res = false;
    res = listcheck.filter((item) => { return item.flight_number == itemcheck.flight_number && item.insurance_code == itemcheck.insurance_code && item.bookingid == bkgid }).length > 0 ? true : false;
    return res;
  }

  setCheckInCheckOutRQInfo(obj) {
    var se = this;
    var datecinRQ = new Date(obj.start_date);
    var datecoutRQ = new Date(obj.end_date);
    se.cinRQdisplay = se.gf.getDayOfWeek(datecinRQ).daynameshort + " " + moment(datecinRQ).format('DD-MM-YYYY')
    se.coutRQdisplay = se.gf.getDayOfWeek(datecoutRQ).daynameshort + " " + moment(datecoutRQ).format('DD-MM-YYYY')

    se.numberOfRQDay = moment(datecoutRQ).diff(moment(datecinRQ), 'days');
  }

  ionViewDidLoad() {
    let elements = document.querySelectorAll(".tabbar");

    if (elements != null) {
      Object.keys(elements).map((key) => {
        elements[key].style.display = 'flex';
      });
    }
    //30p load lại trạng thái 1 lần
    // var se = this;
    // se.intervalID = setInterval(() => {
    //   //se.getdata();
    //   //Kiểm tra mạng trước khi loaddata
    //   this.networkProvider.getNetworkStatus().subscribe((connected: boolean) => {
    //     this.isConnected = connected;
    //     if (this.isConnected) {
    //       setTimeout(() => {
    //         this.getdata(null);
    //       }, 100)
    //     } else {
    //       this.gf.showWarning('Không có kết nối mạng', 'Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng', 'Đóng');
    //     }
    //   });
    // }, 1800000);
  }


  loaddatatopdeal(data: any) {
    var se = this;
    var chuoi = "";
    if (data && data.length > 0) {
      se.zone.run(() => {
        //for (let i = 0; i < se.pageSize; i++) {
        let i = 0;
        if (data[i].images[0]) {
          var res = data[i].images[0].url.substring(0, 4);
          if (res != "http") {
            data[i].images[0].url = 'https:' + data[i].images[0].url;
          }
          var minPrice = data[i].minPrice.toLocaleString();
          chuoi = "";
          var name = data[i].name.split('|');
          for (let x = 1; x < name.length; x++) {
            if (x == name.length - 1) {
              chuoi = chuoi + name[x];
            } else {
              chuoi = chuoi + name[x] + "|";
            }
          }
          switch (data[i].rating) {
            case 50:
              data[i].rating = "./assets/star/ic_star_5.svg";
              break;
            case 45:
              data[i].rating = "./assets/star/ic_star_4.5.svg";
              break;
            case 40:
              data[i].rating = "./assets/star/ic_star_4.svg";
              break;
            case 35:
              data[i].rating = "./assets/star/ic_star_3.5.svg";
              break;
            case 30:
              data[i].rating = "./assets/star/ic_star_3.svg";
              break;
            case 25:
              data[i].rating = "./assets/star/ic_star_2.5.svg";
              break;
            case 20:
              data[i].rating = "./assets/star/ic_star_2.svg";
              break;
            case 15:
              data[i].rating = "./assets/star/ic_star_1.5.svg";
              break;
            case 10:
              data[i].rating = "./assets/star/ic_star.svg";
              break;
            case 5:
              data[i].rating = "./assets/star/ic_star_0.5.svg";
              break;
            default:
              break;
          }
          var item = { ischecked: 0, id: data[i].id, name: name[0], imageUrl: data[i].images[0].url, regionName: data[i].regionName, minPrice: minPrice, description: chuoi, rating: data[i].rating, priceshow: (data[i].minPrice / 1000).toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.").replace(',', '.') };
          se.zone.run(() => {
            se.slide = item;
          })

          //load combodetail
          se.loaddetailcombo(item.id);
        }

        //}
      })
    }


  }

  loaddetailcombo(hotelID) {
    let url = C.urls.baseUrl.urlPost + "/mhoteldetail/" + hotelID;
    var se = this;
    var options = {
      method: 'POST',
      url: url,
      timeout: 180000, maxAttempts: 5, retryDelay: 2000,
    };
    request(options, function (error, response, body) {
      if (response.statusCode != 200) {
        var objError = {
          page: "hoteldetail",
          func: "loaddata",
          message: response.statusMessage,
          content: response.body,
          type: "warning",
          param: JSON.stringify(options)
        };
        C.writeErrorLog(objError, response);
      }
      if (error) {
        error.page = "hoteldetail";
        error.func = "loaddata";
        error.param = JSON.stringify(options);
        C.writeErrorLog(objError, response);
      }
      if (response.statusCode == 200) {
        let jsondata = JSON.parse(body);
        if (jsondata.Combos || jsondata.ComboPromotion) {
          se.Description = jsondata.ComboPromtion ? jsondata.ComboPromtion.Description.replace(/\r\n/g, "<br/>") : jsondata.Combos.Description.replace(/\r\n/g, "<br/>");
          se.Description = se.Description.replace("Trọn gói bao gồm:", "");
          se.Description = se.Description.replace(/#r/g, "");
          se.Description = se.Description.replace(/r#/g, "");
          se.Description = se.Description.replace(/#m/g, "");
          se.Description = se.Description.replace(/m#/g, "");
          se.Description = se.Description.replace(/#n/g, "");
          se.Description = se.Description.replace(/n#/g, "");
          se.Description = se.Description.replace(/n#/g, "");
        }
      }
    })
  }

  viewComboDetail(item) {
    this.searchhotel.hotelID = item.id;
    this.searchhotel.rootPage = "MyTrip";
    this.valueGlobal.notRefreshDetail = false;
    this.navCtrl.navigateForward('/hoteldetail/' + item.id);
  }

  viewComboList() {
    this.searchhotel.fromPage = 'order';
    this.navCtrl.navigateForward('/combolist');
  }

  async handleSplashScreen(): Promise<void> {
    try {
      // wait for App to finish loading
      await this.platform.ready()
    } catch (error) {
      if (error) {
        error.page = "mytrips";
        error.func = "handleSplashScreen";
        C.writeErrorLog(error, null);
        throw new Error(error)
      };
    }
    const splash = document.getElementById('splash-screen');
    if (splash) {
      splash.style.opacity = '0';
      setTimeout(() => { splash.remove() }, 300);
    }

  }

  goback() {

    if (this._mytripservice.rootPage == "homeflight") {
      this._flightService.itemTabFlightActive.emit(true);
      this._flightService.itemMenuFlightClick.emit(1);
      this.valueGlobal.backValue = "homeflight";
      this.navCtrl.navigateBack('/app/tabs/tab1');
      this._mytripservice.backfrompage = "";
    }
    else {
      this.navCtrl.navigateRoot('/');
    }
  }

  enableTabbar(modal) {
    modal.onDidDismiss(() => {
      let elements = document.querySelectorAll(".tabbar");
      if (elements != null) {
        Object.keys(elements).map((key) => {
          elements[key].style.display = 'flex';
        });
      }
    })
  }

  openBookingTrip(trip) {
    if (!this.networkProvider.isOnline()) {
      this.gf.showWarning('Không có kết nối mạng', 'Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng', 'Đóng');
      return;
    }
    if (trip && !trip.isRequestTrip) {
      this.gf.setParams({ trip: trip, currentTrip: this.currentTrip }, 'mytripbookingdetail');
      if (this._mytripservice.rootPage == "homeflight") {
        this._mytripservice.backroute = "tabs/tab1";
      } else {
        this._mytripservice.backroute = "/app/tabs/tab3";
      }

      this.router.navigateByUrl('/mytripbookingdetail');
      //google analytic
      this.gf.googleAnalytion('mytrips', 'Search', '/opentripdeail');
    }
  }

  openWeather(cityname) {
    this.navCtrl.navigateForward('/tripweather/' + cityname);
    //google analytic
    this.gf.googleAnalytion('mytrips', 'Search', 'openweather/' + cityname);
  }

  openHotelNotes(notes) {
    if (!this.networkProvider.isOnline()) {
      this.gf.showWarning('Không có kết nối mạng', 'Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng', 'Đóng');
      return;
    }
    this.gf.setParams(notes, 'hotelnotes');
    this.navCtrl.navigateForward('/hotelnotes');
    //google analytic
    this.gf.googleAnalytion('mytrips', 'Search', 'opentripnote');
  }

  openHotelExpsNotes(trip, notes, provincename) {
    var se = this;
    if (!se.networkProvider.isOnline()) {
      se.gf.showWarning('Không có kết nối mạng', 'Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng', 'Đóng');
      return;
    }
    se.gf.setParams({ notes: notes, provincename: provincename }, 'hotelexpsnotes');
    se.navCtrl.navigateForward('/hotelexpsnotes');
    //check location của ks
    // if (trip.provinceName) {
    //   var regionCode = se.gf.convertFontVNI(trip.provinceName).replace(/ /g, '-');
    //   regionCode = regionCode.toLowerCase();
    //   regionCode = regionCode.replace('---', '-');
    //   regionCode = regionCode.replace('-province', '');
    //   regionCode = regionCode.replace('tinh-', '');
    //   regionCode = regionCode.replace('-district', '');

    //   se.searchhotel.inputExperienceItem = {};
    //   se.searchhotel.inputExperienceItem.regionCode = regionCode;
    //   se.searchhotel.inputExperienceRegionCode = regionCode;
    //   se.searchhotel.inputExperienceRegionName = trip.provinceName;
    //   se.searchhotel.inputExperienceText = trip.provinceName;
    //   se.searchhotel.inputExperienceItem.latitude = trip.Latitude;
    //   se.searchhotel.inputExperienceItem.longitude = trip.Longitude;
    //   se.valueGlobal.backValue = 'tab3';
    //   se.navCtrl.navigateForward('/experiencesearch');
    // } else {
    //   se.navCtrl.navigateForward('/hotelexpsnotes');
    // }
  }

  async presentLoading() {
    this.loader = await this.loadingCtrl.create({
      duration: 300
    });
    this.loader.present();
  }

  nextTrip() {
    if (!this.networkProvider.isOnline()) {
      this.gf.showWarning('Không có kết nối mạng', 'Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng', 'Đóng');
      return;
    }

    this.zone.run(() => {
      this.currentTrip = this.currentTrip + 1;
      // if (this.currentTrip > 0) {
      //   this.presentLoadingDuration(300);
      // }
      let obj = this.listMyTrips[this.currentTrip];
      if (obj && !obj.isRequestTrip) {
        this.setCheckInCheckOutInfo(obj);
        this.isRequestTrip = false;
      } else {
        this.setCheckInCheckOutRQInfo(obj);
        this.isRequestTrip = true;
      }
    })
    if (this.content) {
      this.content.scrollToTop(500);
    }

    //google analytic
    this.gf.googleAnalytion('mytrips', 'Search', 'nexttrip');
  }

  previousTrip() {
    if (!this.networkProvider.isOnline()) {
      this.gf.showWarning('Không có kết nối mạng', 'Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng', 'Đóng');
      return;
    }
    //this.presentLoadingDuration(300);
    this.zone.run(() => {
      this.currentTrip = this.currentTrip - 1;
      let obj = this.listMyTrips[this.currentTrip];
      if (obj && !obj.isRequestTrip) {
        this.setCheckInCheckOutInfo(obj);
        this.isRequestTrip = false;
      } else {
        this.setCheckInCheckOutRQInfo(obj);
        this.isRequestTrip = true;
      }
    })
    if (this.content) {
      this.content.scrollToTop(500);
    }

    //google analytic
    this.gf.googleAnalytion('mytrips', 'Search', 'previoustrip');
  }

  nextRQTrip() {
    this.zone.run(() => {
      this.currentRQTrip = this.currentRQTrip + 1;
      let obj = this.listRequestTrips[this.currentRQTrip];
      this.setCheckInCheckOutRQInfo(obj);
    })
    if (this.content) {
      this.content.scrollToTop(50);
    }
    //google analytic
    this.gf.googleAnalytion('mytrips', 'Search', 'nextrequesttrip');
  }

  previousRQTrip() {
    this.zone.run(() => {
      this.currentRQTrip = this.currentRQTrip - 1;
      let obj = this.listRequestTrips[this.currentRQTrip];
      this.setCheckInCheckOutRQInfo(obj);
    })
    if (this.content) {
      this.content.scrollToTop(50);
    }
    //google analytic
    this.gf.googleAnalytion('mytrips', 'Search', 'previousrequesttrip');
  }

  openHistoryTrip() {
    // let modal = this.modalCtrl.create('MytripsHistoryPage',{lstHistoryTrips: this.listHistoryTrips});
    // modal.present();
    // this.enableTabbar(modal);

    this.navCtrl.navigateForward('/mytripshistory');
    //google analytic
    this.gf.googleAnalytion('mytrips', 'Search', 'openhistorytrip');
  }

  openInclusion(inclusion) {
    // let modal = this.modalCtrl.create('ComboInClusionPage',{comboInclusion: inclusion});
    // modal.present();
    // this.enableTabbar(modal);
    this.navCtrl.navigateForward('/comboinclusion');
    //google analytic
    this.gf.googleAnalytion('mytrips', 'Search', 'openinclusion');
  }

  /***
     * Gọi tổng đài hỗ trợ
     * PDANH 26/02/2019
     */
  async makeCallSupport(phone) {
    try {
      setTimeout(() => {
        window.open(`tel:${phone}`, '_system');
      }, 10);
    }
    catch (error) {
      if (error) {
        error.page = "mytrips";
        error.func = "makeCallSupport";
        C.writeErrorLog(error, null);
      };
    }
    //google analytic
    this.gf.googleAnalytion('mytrips', 'Search', 'callsupport');
  }

  public async showConfirm() {
    let alert = await this.alertCtrl.create({
      message: "Phiên đăng nhập hết hạn. Xin vui lòng đăng nhập lại để sử dụng chức năng này.",
      buttons: [
        {
          text: 'Để sau',
          handler: () => {
            this.storage.remove('auth_token');
            this.storage.remove('email');
            this.storage.remove('username');
            this.storage.remove('jti');
            this.storage.remove('userInfoData');
            this.storage.remove('userRewardData');
            this.storage.remove('point');
            this.storage.remove('blogtripdefault');
            this.zone.run(() => {
              this.mytripcount = 0;
              this.nexttripcounttext = "";
              this.historytripcounttext = "";
              this.requestripcount = 0;
              this.historytripcount = 0;
              this.loginuser = null;
              this.valueGlobal.countNotifi = 0;
            })
            this.navCtrl.navigateRoot('/');
          }
        },
        {
          text: 'Đăng nhập',
          role: 'OK',
          handler: () => {
            this.storage.remove('auth_token');
            this.storage.remove('email');
            this.storage.remove('username');
            this.storage.remove('jti');
            this.storage.remove('userInfoData');
            this.storage.remove('userRewardData');
            this.storage.remove('point');
            this.storage.remove('blogtripdefault');
            this.zone.run(() => {
              this.mytripcount = 0;
              this.nexttripcounttext = "";
              this.historytripcounttext = "";
              this.requestripcount = 0;
              this.historytripcount = 0;
              this.loginuser = null;
              this.valueGlobal.countNotifi = 0;
            })
            //this.valueGlobal.logingoback = "MainPage";
            this.navCtrl.navigateForward('/login');
          }
        },
      ]
    });
    alert.present();
  }

  SelectNextTrip() {
    this.activeTabTrip = 1;
    if (document.querySelector(".tabbar")) {
      document.querySelector(".tabbar")['style'].display = 'flex';
    }
    this.buttonCheckin = true;
    this.buttonBooking = false;
    this.getdata(null, false);
  }
  SelectHistoryTrip() {
    this.activeTabTrip = 3;
    if (document.querySelector(".tabbar")) {
      document.querySelector(".tabbar")['style'].display = 'flex';
    }
    this.buttonCheckin = true;
    this.buttonBooking = false;
    this.getdata(null, true);
  }

  SelectRequestTrip() {
    this.activeTabTrip = 3;
    if (document.querySelector(".tabbar")) {
      document.querySelector(".tabbar")['style'].display = 'flex';
    }
    this.getRequestTrip();
    //google analytic
    this.gf.googleAnalytion('mytrips', 'Search', 'selectrequesttrip');
  }

  getRequestTrip() {
    var se = this;
    se.storage.get('auth_token').then(auth_token => {
      if (auth_token) {
        var text = "Bearer " + auth_token;
        var options = {
          method: 'GET',
          url: C.urls.baseUrl.urlMobile + '/api/dashboard/GetMyRequestPrice',
          headers:
          {
            'accept': 'application/json',
            'content-type': 'application/json-patch+json',
            authorization: text
          }
        };
        request(options, function (error, response, body) {
          if (response.statusCode != 200) {
            var objError = {
              page: "mytrips",
              func: "getRequestTrip",
              message: response.statusMessage,
              content: response.body,
              type: "warning",
              param: JSON.stringify(options),
            };
            C.writeErrorLog(objError, response);
          }
          if (error) {
            error.page = "mytrips";
            error.func = "getRequestTrip";
            error.param = JSON.stringify(options);
            C.writeErrorLog(error, response);
          } else {
            if (body) {
              se.zone.run(() => {
                se.listRequestTrips = [];
                var result = JSON.parse(body);
                let lstRQTrips = result.data;
                se.hasloadRQdata = true;
                //List trip yêu cầu
                lstRQTrips.forEach(element => {
                  if (element.request_id.indexOf("HTBKG") == -1) {

                    // if (element.hotelAvatar.indexOf('jpeg') != -1 || element.hotelAvatar.indexOf('webp') != -1) {
                    //   urlavatar = element.hotelAvatar.substring(0, element.hotelAvatar.length - 5);
                    //   tail = element.hotelAvatar.substring(element.hotelAvatar.length - 5, element.hotelAvatar.length);
                    // } else {
                    //   urlavatar = element.hotelAvatar.substring(0, element.hotelAvatar.length - 4);
                    //   tail = element.hotelAvatar.substring(element.hotelAvatar.length - 4, element.hotelAvatar.length);
                    // }
                    const hasCdn1 = element.hotelAvatar.includes("cdn1");
                    if (hasCdn1) {
                      const imageUrl = element.hotelAvatar;
                      const newImageUrl = imageUrl.replace(/(\.\w+)$/, "-104x104$1");
                      element.hotelAvatar = newImageUrl;
                    }
                    element.booking_id = element.request_id;
                    element.checkInDisplay = se.gf.getDayOfWeek(element.start_date).daynameshort + ", " + moment(element.start_date).format('DD-MM-YYYY')
                    element.checkOutDisplay = se.gf.getDayOfWeek(element.end_date).daynameshort + ", " + moment(element.end_date).format('DD-MM-YYYY')
                    se.getRatingStar(element);
                    se.listRequestTrips.push(element);
                  }

                });
                if (se.listRequestTrips.length > 0) {
                  let obj = se.listRequestTrips[0];
                  se.setCheckInCheckOutRQInfo(obj);
                }
              });
            } else {
              if (response.statusCode != 200) {
                se.listRequestTrips = [];
                se.hasloadRQdata = true;
              }
            }

          }

        });
      } else {
        se.hasloadRQdata = true;
        se.listRequestTrips = [];
      }
    });
  }

  getCombineRequestTrip() {
    var se = this;
    se.storage.get('auth_token').then(auth_token => {
      if (auth_token) {
        var text = "Bearer " + auth_token;
        var options = {
          method: 'GET',
          url: C.urls.baseUrl.urlMobile + '/api/dashboard/GetMyRequestPrice',
          headers:
          {
            'accept': 'application/json',
            'content-type': 'application/json-patch+json',
            authorization: text
          }
        };
        request(options, function (error, response, body) {
          if (response.statusCode != 200) {
            var objError = {
              page: "mytrips",
              func: "getRequestTrip",
              message: response.statusMessage,
              content: response.body,
              type: "warning",
              param: JSON.stringify(options),
            };
            C.writeErrorLog(objError, response);
          }
          if (error) {
            error.page = "mytrips";
            error.func = "getRequestTrip";
            error.param = JSON.stringify(options);
            C.writeErrorLog(error, response);
          } else {
            if (body) {
              se.zone.run(() => {

                var result = JSON.parse(body);
                se._mytripservice.listrequesttrips = result;
                se.storage.get('listrequesttrips').then(data => {
                  if (data) {
                    se.storage.remove('listrequesttrips').then(() => {
                      se.storage.set('listrequesttrips', result);
                    })
                  } else {
                    se.storage.set('listrequesttrips', result);
                  }
                })
                se.loadRequestTrip(result);
                //se.getListSupportByUser(auth_token);
              });
            } else {
              if (response.statusCode != 200) {
                se.listRequestTrips = [];
                se.requestripcount = 0;
                if (se.mytripcount + se.requestripcount > 0) {
                  se.nexttripcounttext = " (" + se.mytripcount + se.requestripcount + ")";
                } else {
                  se.nexttripcounttext = "";
                }
                se.hasloadRQdata = true;
                se.hasloaddata = true;
                if (se.myloader) {
                  se.myloader.dismiss();
                }
              }
            }

          }

        });
      } else {
        se.hasloaddata = true;
        se.hasloadRQdata = true;
        se.listRequestTrips = [];
        se.listHistoryTrips = [];
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

  loadRequestTrip(listrequesttrips) {
    var se = this;
    //se.currentTrip = 0;
    se.requestripcount = 0;
    se.listRequestTrips = [];
    let lstRQTrips = listrequesttrips.data;
    se.hasloadRQdata = true;
    //List trip yêu cầu
    lstRQTrips.forEach(element => {
      //if (!element.booking_id && element.payment_status != 3 && element.payment_status != -2) {
      // let urlavatar = element.hotelAvatar.substring(0, element.hotelAvatar.length - 4);
      // let tail = element.hotelAvatar.substring(element.hotelAvatar.length - 4, element.hotelAvatar.length);
      // element.hotelAvatar = urlavatar + "-" + "104x104" + tail;
      if (element.request_id.indexOf("HTBKG") == -1) {
        element.avatar = element.hotelAvatar;
        element.isRequestTrip = true;
        element.booking_id = element.request_id;
        element.checkInDisplay = se.gf.getDayOfWeek(element.start_date).daynameshort + ", " + moment(element.start_date).format('DD-MM-YYYY')
        element.checkOutDisplay = se.gf.getDayOfWeek(element.end_date).daynameshort + ", " + moment(element.end_date).format('DD-MM-YYYY')
        se.getRatingStar(element);
        se.listRequestTrips.push(element);
        se.requestripcount++;
      }

      //}
    });

    se._mytripservice.listRequestTrips = se.listRequestTrips;

    if (se.listRequestTrips.length > 0) {
      se.listMyTrips.push(...se.listRequestTrips)
    }

    se.sortMytrip();

    if (se.listMyTrips.length > 0) {
      //Tạm thời gọi api get notifi để build lại thông tin thay đổi chuyến bay nếu có
      se.loadUserNotificationAndMapFlightChange();

      if (se.gf.getParams('notifiBookingCode')) {
        //Map số bkg trong listtrip để focus vào bkg được notifi
        var idxMap = se.listMyTrips.map((item, index) => {
          return item.booking_id == se.gf.getParams('notifiBookingCode');
        });
        if (idxMap && idxMap.length > 0) {
          var idx = idxMap.findIndex((el) => { return el == true });
          se.currentTrip = idx;
          se.gf.setParams('', 'notifiBookingCode');
          if (idx != -1) {
            se.showtripdetail(se.listMyTrips[idx]);
          } else {

            //Map số bkg trong listtrip để focus vào bkg được notifi
            var idxMaphis = se.listHistoryTrips.map((item, index) => {
              return item.booking_id == se.valueGlobal.BookingCodeHis;
            });
            if (idxMaphis && idxMaphis.length > 0) {
              var idxhis = idxMaphis.findIndex((el) => { return el == true });
              se.currentTrip = idxhis;
              if (idxhis != -1) {
                se.showtripdetail(se.listHistoryTrips[idxhis]);
              } else {
                se._mytripservice.publicLoadDataMytripHistorySubject(0);
                se.getdata(null, true);
              }
            }

          }
        }
        //Sau khi map được trip thì set giá trị về null
        se.gf.setParams(null, 'notifiBookingCode');
      }

      //Map item được claim nếu có load lại dữ liệu
      if (se.activityService.insurranceBookingId) {
        var idxMap = se.listMyTrips.map((item, index) => {
          return item.booking_id == se.activityService.insurranceBookingId;
        });
        if (idxMap && idxMap.length > 0) {
          var idx = idxMap.findIndex((el) => { return el == true });
          se.currentTrip = idx;
        }
      }

      if (se.currentTrip && se.currentTrip != -1) {
        let obj = se.listMyTrips[se.currentTrip];
        if (obj && !obj.isRequestTrip) {
          se.setCheckInCheckOutInfo(obj);
          se.isRequestTrip = false;
        } else {
          se.setCheckInCheckOutRQInfo(obj);
          se.isRequestTrip = true;
        }
      }
      else {
        se.currentTrip = -1;
        if (se.listMyTrips.length > 0) {
          se.nextTrip();
        }

      }
    } else {
      se.hasdata = false;
    }
    se.hasdata = true;
    se.hasloaddata = true;

    setTimeout(() => {
      if (se.myloader) {
        se.myloader.dismiss();
      }
      if (se.mytripcount + se.requestripcount > 0) {
        se.nexttripcounttext = " (" + (se.mytripcount + se.requestripcount) + ")";
      } else {
        se.nexttripcounttext = "";
      }

    }, 300);
    //se.getListSupportByUser(this.loginuser);
  }

  public scrollFunction = (event: any) => {
    var se = this;
    se.zone.run(() => {
      if (!se.currentPosition) {
        se.currentPosition = event.detail.scrollTop;
      }
      if (event.detail.scrollTop > se.currentPosition) {
        document.querySelector(".tabbar")['style'].display = 'none';
        if (se.topOrBottom == "top") {
          se.contentBox.marginTop = 0;
        } else if (se.topOrBottom == "bottom") {
          se.contentBox.marginBottom = 0;
        }

      } else {
        if (document.querySelector(".tabbar")) {
          document.querySelector(".tabbar")['style'].display = 'flex';
        }

        if (se.topOrBottom == "top") {
          se.contentBox.marginTop = se.tabBarHeight;
        } else if (se.topOrBottom == "bottom") {
          se.contentBox.marginBottom = se.tabBarHeight;
        }

      }//if else
      if (se.activeTabTrip != 1) {
        if (document.querySelector(".tabbar")) {
          document.querySelector(".tabbar")['style'].display = 'flex';
          return;
        }
      }
    })
  }

  async feedback(trip: any) {
    var se = this;
    if (trip.booking_id) {
      se.checkBookingReview(trip).then((result) => {
        if (result) {
          se.showUserFeedBackPage(trip);
        }
      })
    }
  }

  async showUserFeedBackPage(trip) {
    var se = this;
    se.gf.setParams(trip, 'tripFeedBack');
    const modal: HTMLIonModalElement =
      await this.modalCtrl.create({
        component: UserFeedBackPage,
        componentProps: {
          aParameter: true,
        }
      });
    modal.present();

    modal.onDidDismiss().then((data: OverlayEventDetail) => {
      se.navCtrl.back();

    })
  }
  reloadHistoryTrip() {
    var se = this;
    se.presentLoadingData();
    se.storage.get('auth_token').then(auth_token => {
      if (auth_token) {
        var text = "Bearer " + auth_token;
        var options = {
          method: 'GET',
          url: C.urls.baseUrl.urlMobile + '/api/dashboard/getMyTripPaging?getall=true&getHistory=true&pageIndex=1&pageSize=5',
          //url: 'http://localhost:34290/api/dashboard/getmytrip?getall=true',
          headers:
          {
            'accept': 'application/json',
            'content-type': 'application/json-patch+json',
            authorization: text
          }
        };
        request(options, function (error, response, body) {
          if (response.statusCode != 200) {
            var objError = {
              page: "mytrips",
              func: "getdata",
              message: response.statusMessage,
              content: response.body,
              type: "warning",
              param: JSON.stringify(options)
            };
            C.writeErrorLog(objError, response);
          }
          if (error) {
            error.page = "mytrips";
            error.func = "getdata";
            error.param = JSON.stringify(options);
            C.writeErrorLog(error, response);
          } else {
            if (body) {
              se.zone.run(() => {
                se.historytripcount = 0;
                se.listHistoryTrips = [];

                let lstTrips = JSON.parse(body);
                //List trip đã đi
                if (lstTrips.tripHistory.length > 0) {
                  lstTrips.tripHistory.forEach(elementHis => {
                    if (elementHis.avatar && elementHis.avatar.indexOf('i.travelapi.com') == -1 && elementHis.booking_type != 'TICKET') {
                      let urlavatar = elementHis.avatar.substring(0, elementHis.avatar.length - 4);
                      let tail = elementHis.avatar.substring(elementHis.avatar.length - 4, elementHis.avatar.length);
                      elementHis.avatar157 = urlavatar + "-" + "110x157" + tail;
                      elementHis.avatar104 = urlavatar + "-" + "110x104" + tail;
                      elementHis.avatar110 = urlavatar + "-" + "110x118" + tail;
                    } else {
                      if (elementHis.booking_type != 'VC') {
                        elementHis.avatar110 = "//cdn1.ivivu.com/iVivu/2018/02/07/15/noimage-110x124.jpg";
                      }

                    }
                    if (elementHis.avatar) {
                      elementHis.avatar = (elementHis.avatar.toLocaleString().trim().indexOf("http") != -1) ? elementHis.avatar : 'https:' + elementHis.avatar;
                    }

                    se.listHistoryTrips.push(elementHis);
                    se.historytripcount++;

                  });
                  se.historytripcounttext = " (" + se.historytripcount + ")";
                }
              });
            } else {
              if (response.statusCode != 200) {
                se.mytripcount = 0;
                se.historytripcount = 0;
                se.listMyTrips = [];
                se.listHistoryTrips = [];
                se.hasdata = false;
                se.hasloaddata = true;
                se.hideloader();
                //se.showConfirm();
              }
            }

          }

        });
      } else {
        se.hasdata = false;
        se.hasloaddata = true;
        se.listMyTrips = [];
        se.listHistoryTrips = [];
        se.mytripcount = 0;
        se.historytripcount = 0;
        se.hideloader();
      }
    });
    setTimeout(() => {
      if (se.myloader) {
        se.myloader.dismiss();
      }
    }, 500)
  }
  // var se = this;
  // var options = {
  //   method: 'GET',
  //   url: 'https://beta-svc3.ivivu.com/api/review',
  //   qs: { BookingId: trip.booking_id },
  //   headers:
  //   { 
  //     'cache-control': 'no-cache'
  //   }
  // };

  checkItemHasNotClaim(listItem) {
    var res = false;
    listItem.forEach(element => {
      if (!element.isClaim) {
        res = true;
        return;
      }
    });
    return res;
  }



  loadUserReviews() {
    var se = this;
    se.storage.get('auth_token').then(auth_token => {
      if (auth_token) {
        var text = "Bearer " + auth_token;
        var options = {
          method: 'GET',
          url: C.urls.baseUrl.urlMobile + '/api/Dashboard/GetUserReviews',
          timeout: 10000, maxAttempts: 5, retryDelay: 2000,
          headers:
          {
            'cache-control': 'no-cache',
            'content-type': 'application/json',
            authorization: text
          },
          //body: JSON.stringify({file: this.photos})
        };
        request(options, function (error, response, body) {
          if (response.statusCode != 200) {
            var objError = {
              page: "userreviews",
              func: "loadUserReviews",
              message: response.statusMessage,
              content: response.body,
              type: "warning",
              param: JSON.stringify(options)
            };
            C.writeErrorLog(objError, response);
          }
          if (error) {
            error.page = "userreviews";
            error.func = "loadUserReviews";
            error.param = JSON.stringify(options);
            C.writeErrorLog(error, response);
          } else {
            if (body) {
              var result = JSON.parse(body);
              se.arrHotelReviews = [];

              if (result.data && result.data.length > 0) {
                se.zone.run(() => {
                  result.data.forEach(element => {
                    if (element.images && element.images.length > 0) {
                      element.images.forEach(img => {
                        img.thumpUrl = img.thumpUrl.replace("84x84", "150x150");
                      });
                    }
                    se.arrHotelReviews.push(element);
                  });
                })
                //bind lại điểm đánh giá
                se.bindUserReviews();
              }
            } else if (response.statusCode == 401) {
              //se.showConfirm();
            }
          }
        })
      }
    })
  }

  bindUserReviews() {
    var se = this;
    if (se.arrHotelReviews && se.arrHotelReviews.length > 0) {
      se.arrHotelReviews.forEach((item) => {
        var itemReview = se.listMyTrips.filter((element) => {
          return element.booking_id == item.bookingId && item.hotelId == element.HotelIdERP;
        })
        if (itemReview && itemReview.length > 0) {
          se.zone.run(() => {
            item.reviewLink = 'manualBindReview';
            item.reviewPoint = itemReview[0].reviewPoint;
            item.reviewPoint = itemReview[0].reviewPoint;
          })
        }
      })
    }
  }

  async showReviews(trip: any) {
    //this.navCtrl.navigateForward('/userreviews');
    var se = this;
    se.gf.setParams({ trip: trip, hotelreviewlist: se.arrHotelReviews }, 'hotelreviewlist');
    const modal: HTMLIonModalElement =
      await se.modalCtrl.create({
        component: UserReviewsPage,
      });
    modal.present();
  }

  async checkBookingReview(trip): Promise<any> {
    var se = this;
    var result = false;
    return new Promise((resolve, reject) => {
      se.storage.get('auth_token').then(auth_token => {
        if (auth_token) {
          var text = "Bearer " + auth_token;
          var headerobj =
          {
            'cache-control': 'no-cache',
            'content-type': 'application/json',
            authorization: text
          }

          se.gf.RequestApi('GET', C.urls.baseUrl.urlSVC3 + 'review?BookingId=' + trip.booking_id, null, null, 'MyTrip', 'CheckBookingReview').then((data: any) => {
            if (data) {
              //Trả về isSuccess = true => chưa review
              //Trả về false => đã review hoặc có lỗi
              data = JSON.parse(data);
              result = data.isSuccess && !data.isReview;
              resolve(result);
            }
          });
        }
      })
    })
  }

  /**
     * Load thông báo của user
     */
  loadUserNotificationAndMapFlightChange() {
    var se = this;
    if (!se.networkProvider.isOnline()) {
      se.gf.showWarning('Không có kết nối mạng', 'Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng', 'Đóng');
      return;
    }
    se.storage.get('auth_token').then(auth_token => {
      if (auth_token) {
        var text = "Bearer " + auth_token;
        var options = {
          method: 'GET',
          url: C.urls.baseUrl.urlMobile + '/mobile/OliviaApis/GetNotificationByUser',
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
            error.page = "inbox";
            error.func = "loadUserNotification";
            error.param = JSON.stringify(options);
            C.writeErrorLog(error, response);
          } else {
            if (body && body != "[]") {
              var data = JSON.parse(body);
              if (data && data.length > 0 && se.listMyTrips.length > 0) {
                se.listMyTrips.forEach((el) => {
                  //Lấy ra object notify theo loại noti thay đổi chuyến bay và có trong listmytrip
                  var objnoti = data.filter((item, index) => {
                    return item.bookingCode == el.booking_id && item.notifyAction == 'flychangeinfo';
                  });
                  if (objnoti && objnoti.length > 0) {
                    objnoti.forEach((itemnotify: any) => {
                      //Lấy ra index của object mytrip theo số bkg
                      var idx = se.listMyTrips.findIndex((el) => { return el.booking_id == itemnotify.bookingCode });
                      var objmap = se.listMyTrips[idx];
                      if (itemnotify.switchObj) {
                        var objFlightChange = itemnotify.switchObj.split('|');
                        //bind lại thông tin chuyến bay thay đổi
                        // if(objmap && objmap.bookingsComboData && objmap.bookingsComboData.length >0){
                        //   var olbFlightObject = objFlightChange[0].split(' ');
                        //   if(olbFlightObject && olbFlightObject.length >=3){
                        //     let fn = olbFlightObject[0] + ' ' + olbFlightObject[1];
                        //     if(objmap.bookingsComboData[0].flightNumner == fn){
                        //       objmap.bookingsComboData[0].changeFlightInfo = true;
                        //       objmap.bookingsComboData[0].newFlightTime = olbFlightObject[olbFlightObject.length -1];
                        //     }
                        //     if(objmap.bookingsComboData[1].flightNumner == fn){
                        //       objmap.bookingsComboData[1].changeFlightInfo = true;
                        //       objmap.bookingsComboData[1].newFlightTime = olbFlightObject[olbFlightObject.length -1];
                        //     }
                        //   }else{

                        //     if(objmap.bookingsComboData[0].flightNumner == objFlightChange[0]){
                        //       objmap.bookingsComboData[0].changeFlightInfo = true;
                        //       objmap.bookingsComboData[0].newFlightTime = objFlightChange[1];
                        //     }
                        //     if(objmap.bookingsComboData[1].flightNumner == objFlightChange[0]){
                        //       objmap.bookingsComboData[1].changeFlightInfo = true;
                        //       objmap.bookingsComboData[1].newFlightTime = objFlightChange[1];
                        //     }
                        //   }
                        // }
                        if (objmap && objmap.bookingsComboData && objmap.bookingsComboData.length > 0) {
                          var newFlightObject = objFlightChange[1].split(' ');
                          var oldFlightObjectOldTime = objFlightChange[0].split(' ');
                          if (newFlightObject && newFlightObject.length > 3) {
                            let fn = newFlightObject[0] + ' ' + newFlightObject[1];
                            if (objmap.bookingsComboData[0].flightNumner == fn) {
                              objmap.bookingsComboData[0].changeFlightInfo = true;
                              objmap.bookingsComboData[0].oldFlightTime = oldFlightObjectOldTime[oldFlightObjectOldTime.length - 1];
                              objmap.bookingsComboData[0].departureTime = newFlightObject[newFlightObject.length - 1];
                            }
                            if (objmap.bookingsComboData[1] && objmap.bookingsComboData[1].flightNumner == fn) {
                              objmap.bookingsComboData[1].changeFlightInfo = true;
                              objmap.bookingsComboData[1].oldFlightTime = oldFlightObjectOldTime[oldFlightObjectOldTime.length - 1];
                              objmap.bookingsComboData[1].departureTime = newFlightObject[newFlightObject.length - 1];
                            }
                          } else if (newFlightObject && newFlightObject.length > 2) {
                            let fn = newFlightObject[0];
                            if (objmap.bookingsComboData[0].flightNumner == fn) {
                              objmap.bookingsComboData[0].changeFlightInfo = true;
                              objmap.bookingsComboData[0].oldFlightTime = oldFlightObjectOldTime[oldFlightObjectOldTime.length - 1];
                              objmap.bookingsComboData[0].departureTime = newFlightObject[newFlightObject.length - 1];
                            }
                            if (objmap.bookingsComboData[1] && objmap.bookingsComboData[1].flightNumner == fn) {
                              objmap.bookingsComboData[1].changeFlightInfo = true;
                              objmap.bookingsComboData[1].oldFlightTime = oldFlightObjectOldTime[oldFlightObjectOldTime.length - 1];
                              objmap.bookingsComboData[1].departureTime = newFlightObject[newFlightObject.length - 1];
                            }
                          }

                        }

                      }
                    })
                  }
                })
              }
            }
          }
        });
      }
    })
  }

  async presentPopoverHis(ev: any, trip) {
    var se = this;
    const popover = await this.popoverController.create({
      component: InsurrancepopoverPage,
      event: ev,
      translucent: true,
      cssClass: 'popover-history'
    });
    se.valueGlobal.popover = popover;
    var arrinsurranceHis = [];
    let bkgflyinfo = JSON.parse(trip.booking_json_data);
    var departFlightNumber = '', returnFlightNumber = '';
    var bookingsComboData = [];
    //se.listClaimed = [];
    if (bkgflyinfo && bkgflyinfo.length > 1) {
      departFlightNumber = bkgflyinfo[0].FlightNumner;
      returnFlightNumber = bkgflyinfo[1].FlightNumner;
      let obj = {
        departureDate: bkgflyinfo[0].DepartureDate,
        departureTime: bkgflyinfo[0].DepartureTime,
        departCode: bkgflyinfo[0].DepartCode,
        arrivalCode: bkgflyinfo[0].ArrivalCode,
        flightNumber: bkgflyinfo[0].FlightNumner,
        flightNumner: bkgflyinfo[0].FlightNumner,
        flightFrom: bkgflyinfo[0].FlightFrom,
        flightTo: bkgflyinfo[0].FlightTo,
        airlineName: bkgflyinfo[0].AirlineName
      };
      bookingsComboData.push(obj);
      let obj1 = {};
      if (bkgflyinfo.length > 1) {
        obj1 = {
          departureDate: bkgflyinfo[1].DepartureDate,
          departureTime: bkgflyinfo[1].DepartureTime,
          departCode: bkgflyinfo[1].DepartCode,
          arrivalCode: bkgflyinfo[1].ArrivalCode,
          flightNumber: bkgflyinfo[1].FlightNumner,
          flightNumner: bkgflyinfo[0].FlightNumner,
          flightFrom: bkgflyinfo[1].FlightFrom,
          flightTo: bkgflyinfo[1].FlightTo,
          airlineName: bkgflyinfo[1].AirlineName
        };
        bookingsComboData.push(obj1);
      }
    }
    trip.bookingsComboData = bookingsComboData;
    trip.insuranceInfo.adultList.forEach(element => {
      let claimed = false, claimedDepart = false, claimedReturn = false;
      if (element.claimedFlights && element.claimedFlights.length > 0) {
        element.claimedFlights.forEach((fn) => {
          se.listClaimed.push({ flight_number: fn.replace(" ", ""), insurance_code: element.id, bookingid: trip.booking_id });
        })
      }

      let fnDepart = departFlightNumber.replace(" ", ""),
        fnReturn = returnFlightNumber.replace(" ", "");
      if (se.listClaimed && se.listClaimed.length > 0) {
        // claimed = se.listClaimed.filter((item)=>{ return item.insurance_code == element.id && item.bookingid == trip.booking_id}).length >1 ? true : false;
        // claimedDepart = se.listClaimed.filter((el)=>{return el.flight_number ==  fnDepart && el.insurance_code == element.id && el.bookingid == trip.booking_id}).length >0 ? true : false;
        // claimedReturn = se.listClaimed.filter((el)=>{return el.flight_number ==  fnReturn && el.insurance_code == element.id && el.bookingid == trip.booking_id}).length >0 ? true : false;
        var listclaim = se.listClaimed.filter((item) => { return item.insurance_code == element.id && item.bookingid == trip.booking_id });
        var listuniqueclaimed = [];
        if (listclaim && listclaim.length > 0) {
          listclaim.forEach(element => {
            if (listuniqueclaimed.length == 0) {
              listuniqueclaimed.push(element);
            } else {
              var bexists = listuniqueclaimed.filter((el) => { return el.flight_number == element.flight_number }).length > 0 ? true : false;
              if (!bexists) {
                listuniqueclaimed.push(element);
              }
            }
          });
        }

        claimed = listuniqueclaimed.length > 1 ? true : false;

        var listclaimdepart = se.listClaimed.filter((el) => { return el.flight_number == fnDepart && el.insurance_code == element.id && el.bookingid == trip.booking_id });
        var listuniqueclaimdepart = [];
        if (listclaimdepart && listclaimdepart.length > 0) {
          listclaimdepart.forEach(element => {
            if (listuniqueclaimdepart.length == 0) {
              listuniqueclaimdepart.push(element);
            } else {
              var bexists = listuniqueclaimdepart.filter((el) => { return el.flight_number == element.flight_number }).length > 0 ? true : false;
              if (!bexists) {
                listuniqueclaimdepart.push(element);
              }
            }
          });
        }
        claimedDepart = listuniqueclaimdepart.length > 1 ? true : false;

        var listclaimreturn = se.listClaimed.filter((el) => { return el.flight_number == fnReturn && el.insurance_code == element.id && el.bookingid == trip.booking_id });
        var listuniqueclaimreturn = [];
        if (listclaimreturn && listclaimreturn.length > 0) {
          listclaimreturn.forEach(element => {
            if (listuniqueclaimreturn.length == 0) {
              listuniqueclaimreturn.push(element);
            } else {
              var bexists = listuniqueclaimreturn.filter((el) => { return el.flight_number == element.flight_number }).length > 0 ? true : false;
              if (!bexists) {
                listuniqueclaimreturn.push(element);
              }
            }
          });
        }
        claimedReturn = listuniqueclaimreturn.length > 1 ? true : false;

      }
      //Nếu chưa có tron listclaimed thì kiểm tra tiếp trong list chuyến bay ban đầu(cho trường hợp hủy chuyến)
      if (se.listClaimedFlightOriginal && se.listClaimedFlightOriginal.length > 0) {
        if (!claimedDepart) {
          claimedDepart = se.listClaimedFlightOriginal.filter((el) => { return el.flight_number == fnDepart && el.insurance_code == element.insurance_code && el.bookingid == trip.booking_id }).length > 0 ? true : false;
        }
        if (!claimedReturn) {
          claimedReturn = se.listClaimedFlightOriginal.filter((el) => { return el.flight_number == fnReturn && el.insurance_code == element.insurance_code && el.bookingid == trip.booking_id }).length > 0 ? true : false;
        }
      }
      var itemAdult = { claimed: claimed, insurance_code: element.id, customer_name: element.name, customer_id: element.identification, customer_address: element.address, customer_dob: element.birth, claimedDepart: claimedDepart, claimedReturn: claimedReturn }
      arrinsurranceHis.push(itemAdult);
    });

    let listChild = [];
    trip.insuranceInfo.childList.forEach(element => {
      let claimed = false, claimedDepart = false, claimedReturn = false;
      if (element.claimedFlights && element.claimedFlights.length > 0) {
        element.claimedFlights.forEach((fn) => {
          if (!se.checkExitClaim(se.listClaimed, element, trip.booking_id)) {
            se.listClaimed.push({ flight_number: fn, insurance_code: element.id, bookingid: trip.booking_id });
          }
        })
      }

      let fnDepart = departFlightNumber.replace(" ", ""),
        fnReturn = returnFlightNumber.replace(" ", "");
      if (se.listClaimed && se.listClaimed.length > 0) {
        // claimed = se.listClaimed.filter((item)=>{ return item.insurance_code == element.id && item.bookingid == trip.booking_id}).length >1 ? true : false;
        // claimedDepart = se.listClaimed.filter((el)=>{return el.flight_number ==  fnDepart && el.insurance_code == element.id && el.bookingid == trip.booking_id}).length >0 ? true : false;
        // claimedReturn = se.listClaimed.filter((el)=>{return el.flight_number ==  fnReturn && el.insurance_code == element.id && el.bookingid == trip.booking_id}).length >0 ? true : false;
        var listclaim = se.listClaimed.filter((item) => { return item.insurance_code == element.id && item.bookingid == trip.booking_id });
        var listuniqueclaimed = [];
        listclaim.forEach(element => {
          if (listuniqueclaimed.length == 0) {
            listuniqueclaimed.push(element);
          } else {
            var bexists = listuniqueclaimed.filter((el) => { return el.flight_number == element.flight_number }).length > 0 ? true : false;
            if (!bexists) {
              listuniqueclaimed.push(element);
            }
          }
        });
        claimed = listuniqueclaimed.length > 1 ? true : false;

        var listclaimdepart = se.listClaimed.filter((el) => { return el.flight_number == fnDepart && el.insurance_code == element.id && el.bookingid == trip.booking_id });
        var listuniqueclaimdepart = [];
        listclaimdepart.forEach(element => {
          if (listuniqueclaimdepart.length == 0) {
            listuniqueclaimdepart.push(element);
          } else {
            var bexists = listuniqueclaimdepart.filter((el) => { return el.flight_number == element.flight_number }).length > 0 ? true : false;
            if (!bexists) {
              listuniqueclaimdepart.push(element);
            }
          }
        });
        claimedDepart = listuniqueclaimdepart.length > 1 ? true : false;

        var listclaimreturn = se.listClaimed.filter((el) => { return el.flight_number == fnReturn && el.insurance_code == element.id && el.bookingid == trip.booking_id });
        var listuniqueclaimreturn = [];
        listclaimreturn.forEach(element => {
          if (listuniqueclaimreturn.length == 0) {
            listuniqueclaimreturn.push(element);
          } else {
            var bexists = listuniqueclaimreturn.filter((el) => { return el.flight_number == element.flight_number }).length > 0 ? true : false;
            if (!bexists) {
              listuniqueclaimreturn.push(element);
            }
          }
        });
        claimedReturn = listuniqueclaimreturn.length > 1 ? true : false;
      }
      //Nếu chưa có tron listclaimed thì kiểm tra tiếp trong list chuyến bay ban đầu(cho trường hợp hủy chuyến)
      if (se.listClaimedFlightOriginal && se.listClaimedFlightOriginal.length > 0) {
        if (!claimedDepart) {
          claimedDepart = se.listClaimedFlightOriginal.filter((el) => { return el.flight_number == fnDepart && el.insurance_code == element.insurance_code && el.bookingid == trip.booking_id }).length > 0 ? true : false;
        }
        if (!claimedReturn) {
          claimedReturn = se.listClaimedFlightOriginal.filter((el) => { return el.flight_number == fnReturn && el.insurance_code == element.insurance_code && el.bookingid == trip.booking_id }).length > 0 ? true : false;
        }
      }
      var itemchild = { claimed: claimed, insurance_code: element.id, customer_name: element.name, customer_id: element.identification, customer_address: element.address, customer_dob: element.birth, claimedDepart: claimedDepart, claimedReturn: claimedReturn }
      se.arrchildinsurrance.push(itemchild);
      listChild.push(element);
    });

    se.gf.setParams({ childlist: listChild, trip: trip, listInsurrance: arrinsurranceHis, departFlightNumber: departFlightNumber, returnFlightNumber: returnFlightNumber, listClaimed: se.listClaimed }, 'insurrenceHistory');
    return await popover.present();
  }

  /**
   * Show popup claim bảo hiểm
   * @param trip thông tin chuyến đi
   * @param item thông tin bảo hiểm
   * @param type loại bảo hiểm (1 - trễ chiều đi; 2 - trễ chiều về; 3 - hủy chiều đi; 4 - hủy chiều về)
   * @param flightNumner số hiệu chuyến bay
   */
  async showInsuranceDetail(trip, item, type, flightNumber, ischild) {
    var se = this;
    if (ischild && !se.checkChildAge(item, (type == 1 || type == 3) ? true : false)) {
      se.gf.showToastWarning('Trẻ em dưới 14 tuổi sẽ thực hiện yêu cầu bồi thường bảo hiểm theo người lớn đi cùng');
      return;
    }
    se.checkValidDate(trip, (type == 1 || type == 3) ? se.cincombodepartureflightnumberdisplay : se.cincomboarrivalflightnumberdisplay).then((valid) => {
      if (valid) {
        se.gf.setParams({ trip: trip, currentTrip: se.currentTrip }, 'mytripbookingdetail');
        let listChild = [];
        //Lọc lại những item child chưa được claim
        se.arrchild.forEach(element => {
          let hadclaimed = false;
          if (se.listClaimed && se.listClaimed.length > 0) {
            hadclaimed = se.listClaimed.filter((el) => { return el.flight_number == flightNumber.replace(" ", "") && element.id == el.insurance_code && el.bookingid == trip.booking_id }).length > 0 ? true : false;
          }
          if (!hadclaimed) {
            listChild.push(element);
          }
        });

        if (ischild && listChild.length <= 1) {
          listChild = [];
        }

        se.gf.setParams({ childlist: listChild, item: item, trip: trip, type: type, flightNumber: flightNumber, ischild: ischild }, 'insurrenceDetail');
        se.valueGlobal.backpageCathay = 'order';
        se.router.navigateByUrl("/insurrancedetail");
      } else {
        se.showWarning('Chuyến bay chưa khởi hành nên quý khách chưa thực hiện claim bảo hiểm!')
      }
    })
  }

  checkValidDate(trip, flightNumber): Promise<any> {
    return new Promise((resolve, reject) => {
      let d = moment(new Date()).format('YYYY-MM-DD');
      let obj = trip.bookingsComboData.filter((f) => {
        if (f.departureDate) {
          let arr = f.departureDate.split('-');
          let newdate = new Date(arr[2], arr[1] - 1, arr[0]);
          let df = moment(newdate).format('YYYY-MM-DD');
          return f.flightNumner && f.flightNumner.replace(' ', '') == flightNumber.replace(' ', '') && moment(d).diff(df, 'days') >= 0;
        }

      });
      console.log(obj);

      resolve(obj && obj.length > 0);
    })
  }

  /**
   * Valid tuổi trẻ em claim riêng > 14 tuổi
   * @param child 
   * @returns 
   */
  checkChildAge(child, isdepart) {
    let arr = child.birth.split('-');
    let newdate = new Date(arr[2], arr[1] - 1, arr[0]);
    let chilđob = moment(newdate).format('YYYY-MM-DD');
    console.log(moment(moment(isdepart ? this.cincombodeparture : this.cincomboarrival).format('YYYY-MM-DD')).diff(chilđob, 'days'));
    return moment(moment(isdepart ? this.cincombodeparture : this.cincomboarrival).format('YYYY-MM-DD')).diff(chilđob, 'days') > 5113
  }

  /**
   * Show option chọn claim bảo hiểm
   * @param trip thông tin chuyến đi
   * @param item thông tin bảo hiểm
   */
  async showActionSheetInsurrance(trip, item, ischild) {
    var se = this;
    let claimedDepart = false, claimedReturn = false;
    if (se.listClaimed && se.listClaimed.length > 0) {
      let fnDepart = se.cincombodepartureflightnumberdisplay.replace(" ", ""),
        fnReturn = se.cincomboarrivalflightnumberdisplay.replace(" ", "");
      claimedDepart = se.listClaimed.filter((el) => { return el.flight_number == fnDepart && el.insurance_code == item.insurance_code }).length > 0 ? true : false;
      claimedReturn = se.listClaimed.filter((el) => { return el.flight_number == fnReturn && el.insurance_code == item.insurance_code }).length > 0 ? true : false;

      //Nếu chưa có tron listclaimed thì kiểm tra tiếp trong list chuyến bay ban đầu(cho trường hợp hủy chuyến)
      if (se.listClaimedFlightOriginal && se.listClaimedFlightOriginal.length > 0) {
        if (!claimedDepart) {
          claimedDepart = se.listClaimedFlightOriginal.filter((el) => { return el.flight_number.replace(" ", "") == fnDepart && el.insurance_code == item.insurance_code && el.bookingid == trip.booking_id }).length > 0 ? true : false;
        }
        if (!claimedReturn) {
          claimedReturn = se.listClaimedFlightOriginal.filter((el) => { return el.flight_number.replace(" ", "") == fnReturn && el.insurance_code == item.insurance_code && el.bookingid == trip.booking_id }).length > 0 ? true : false;
        }
      }
    }
    let actionSheet = await se.actionsheetCtrl.create({
      cssClass: 'action-sheets-insurrance',
      buttons: [
        {
          text: "Trễ chuyến " + se.cincombodepartureflightnumberdisplay + "| " + se.departCodeDisplay,
          handler: () => {
            claimedDepart ? se.showWarning('Chuyến bay này đã được yêu cầu bảo hiểm. Xin vui lòng chọn lại.') : se.showInsuranceDetail(trip, item, 1, se.cincombodepartureflightnumberdisplay, ischild);
          },
          cssClass: claimedDepart ? 'has-claimed' : '',
        },
        {
          text: "Trễ chuyến " + se.cincomboarrivalflightnumberdisplay + "| " + se.arrivalCodeDisplay,
          handler: () => {
            claimedReturn ? se.showWarning('Chuyến bay này đã được yêu cầu bảo hiểm. Xin vui lòng chọn lại.') : se.showInsuranceDetail(trip, item, 2, se.cincomboarrivalflightnumberdisplay, ischild);
          },
          cssClass: claimedReturn ? 'has-claimed' : '',
        },
        {
          text: "Hủy chuyến " + se.cincombodepartureflightnumberdisplay + "| " + se.departCodeDisplay,
          handler: () => {
            claimedDepart ? se.showWarning('Chuyến bay này đã được yêu cầu bảo hiểm. Xin vui lòng chọn lại.') : se.showInsuranceDetail(trip, item, 3, se.cincombodepartureflightnumberdisplay, ischild);
          },
          cssClass: claimedDepart ? 'has-claimed' : '',
        },
        {
          text: "Hủy chuyến " + se.cincomboarrivalflightnumberdisplay + "| " + se.arrivalCodeDisplay,
          handler: () => {
            claimedReturn ? se.showWarning('Chuyến bay này đã được yêu cầu bảo hiểm. Xin vui lòng chọn lại.') : se.showInsuranceDetail(trip, item, 4, se.cincomboarrivalflightnumberdisplay, ischild);
          },
          cssClass: claimedReturn ? 'has-claimed' : '',
        },
      ]
    });
    actionSheet.present();
  }

  async showWarning(msg) {
    var se = this;
    const toast = await se.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top',
    });
    toast.present();
  }

  refreshToken() {
    var se = this;
    se.storage.get('auth_token').then(auth_token => {
      if (auth_token) {
        var text = "Bearer " + auth_token;
        var options = {
          method: 'GET',
          url: C.urls.baseUrl.urlMobile + '/api/Account/reloadTokenClaims',
          headers:
          {
            'cache-control': 'no-cache',
            'content-type': 'application/json',
            authorization: text
          },
        }
        request(options, function (error, response, body) {
          if (error) {
            error.page = "tab3";
            error.func = "refreshToken";
            error.param = JSON.stringify(options);
            C.writeErrorLog(error, response);
          } else {
            var json = JSON.parse(body);
            if (json.auth_token) {
              se.storage.remove('auth_token');
              se.storage.set("auth_token", json.auth_token);
              se.getdata(json.auth_token, false);
            }
          }
        })
      }
    })
    se.reloadcount++;
  }

  showInsurranceInfo() {
    var se = this;
    se.gf.setParams({ currentTrip: se.currentTrip }, 'mytripbookingdetail');
    se.router.navigateByUrl('/insurrancenote');
  }

  /**
   * Refresh lại thông tin bảo hiểm đã claim
   * @param bkgid id bkg đã claim bảo hiểm
   */
  public async refreshInsurranceInfo(): Promise<void> {
    var se = this;
    let objClaimed = se.activityService.objClaimed;
    if (objClaimed) {
      // if(!se.listClaimed){
      //   se.listClaimed = [];
      // }
      if (!se.listClaimedFlightOriginal) {
        se.listClaimedFlightOriginal = [];
      }

      let fn = objClaimed.flightNumber.replace(" ", "");
      var objcheck = { flight_number: fn, insurance_code: objClaimed.code, bookingid: se.activityService.insurranceBookingId };
      if (!se.checkExitClaim(se.listClaimed, objcheck, se.activityService.insurranceBookingId)) {
        se.listClaimed.push(objcheck);
        if (objClaimed.flightNumberOriginal) {
          se.listClaimedFlightOriginal.push({ flight_number: objClaimed.flightNumberOriginal, insurance_code: objClaimed.code, bookingid: se.activityService.insurranceBookingId });
        }
      }

      if (objClaimed.listchildclaimed && objClaimed.listchildclaimed.length > 0) {
        objClaimed.listchildclaimed.forEach(element => {
          var objChildcheck = { flight_number: fn, insurance_code: element.code };
          if (!se.checkExitClaim(se.listClaimed, objChildcheck, se.activityService.insurranceBookingId)) {
            se.listClaimed.push(objChildcheck);
            if (objClaimed.flightNumberOriginal) {
              se.listClaimedFlightOriginal.push({ flight_number: objClaimed.flightNumberOriginal, insurance_code: element.code, bookingid: se.activityService.insurranceBookingId });
            }
          }
        });
      }
    }

  }

  doRefresh(event) {
    var se = this;
    if (!se.isConnected) {
      se.gf.showToastWarning('Thiết bị đang không kết nối mạng, vui lòng bật kết nối để tiếp tục thao tác!');
      se.hasloaddata = true;
      se.loaddatadone = true;
      return;
    }
    se.mytripcount = 0;
    se.nexttripcounttext = "";
    se.pageIndex = 1;
    se.hasdata = false;
    se.listMyTrips = [];
    se.listHistoryTrips = [];
    se.arrinsurrance = [];
    se.hasloaddata = false;
    se.loaddatadone = false;
    this.buttonCheckin = true;
    this.buttonBooking = false;
    se.getdata(null, false);
    setTimeout(() => {
      if (event) {
        event.target.complete();
      }
      se._mytripservice.publicLoadDataMytripHistorySubject(0);
      se.getdata(null, true);
    }, 1000);
    se.storage.remove('listrequesttrips');
    se.storage.get('auth_token').then(auth_token => {
      se.loginuser = auth_token;
    });
    //se.loadOrder();
  }

  refreshData() {
    var se = this;
    se.pageIndex = 1;
    se.presentLoadingData();
    se.getdata(null, false);
    //se.loadOrder();
  }

  showPolicy(trip) {
    var se = this;
    if (trip.off_hotel_paypolicy) {
      let textstr = trip.off_hotel_paypolicy;
      // if(trip.off_hotel_paypolicy.indexOf(':') != -1){
      //   textstr = trip.off_hotel_paypolicy.split(':')[1];
      // }
      this.gf.setParams({ showFromMytrip: true, textcancel: textstr, RoomName: trip.room_name }, 'roomInfo');
      this.searchhotel.backPage = "tab3";
      this.navCtrl.navigateForward('/roomcancel');
    }
  }
  showRules() {
    var se = this;
    this.navCtrl.navigateForward("/rules");
  }
  loadLocation(): Promise<any> {
    var se = this;
    return new Promise((resolve, reject) => {
      if (se._flightService.listAirport && se._flightService.listAirport.length > 1) {
        resolve(se._flightService.listAirport);
      } else {
        let urlPath = C.urls.baseUrl.urlFlight + "gate/apiv1/AllPlace?token=3b760e5dcf038878925b5613c32615ea3ds";
        var options = {
          method: 'GET',
          url: urlPath,
          timeout: 10000, maxAttempts: 5, retryDelay: 2000,
          'headers': {
            "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
            'Content-Type': 'application/json; charset=utf-8'
          },
        };

        request(options, function (error, response, body) {
          if (error) {
            error.page = "searchhotel";
            error.func = "getItems";
            error.param = JSON.stringify(options);
            C.writeErrorLog(error, response);
            resolve([]);
            throw new Error(error);
          };
          let result = JSON.parse(body);
          if (result && result.length > 0) {
            se.zone.run(() => {
              se._flightService.listAirport = [...result];
              resolve([...result]);
            })

          } else {
            resolve([]);
          }
        })
      }
    })

  }
  payment(trip) {
    var se = this;
    if (!se.isConnected) {
      se.gf.showToastWarning('Thiết bị đang không kết nối mạng, vui lòng bật kết nối để tiếp tục thao tác!');
      se.hasloaddata = true;
      return;
    }
    se.activityService.objPaymentMytrip = { returnPage: 'mytrip', tripindex: se.currentTrip, paymentStatus: 0, bookingid: trip.HotelIdERP, trip: trip };

    C.writePaymentLog("order", "payment", "purchase", trip.HotelIdERP);
    se.navCtrl.navigateForward("/roompaymentlive/1");
  }
  copyClipboard(text) {

    this.clipboard.copy(text);

    this.presentToastr('Đã sao chép');
  }
  async presentToastr(msg) {
    let toast = await this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
  paymentselect(trip, stt) {
    var se = this;
    if (!se.isConnected) {
      se.gf.showToastWarning('Thiết bị đang không kết nối mạng, vui lòng bật kết nối để tiếp tục thao tác!');
      se.hasloaddata = true;
      return;
    }
    se._mytripservice.backroute = "order";
    se.activityService.objPaymentMytrip = { returnPage: 'mytrip', tripindex: se.currentTrip, paymentStatus: 0, bookingid: trip.HotelIdERP, trip: trip };
    this.activityService.objPaymentMytrip.trip.priceShow = se.amount_after_tax;
    if (trip.booking_type == 'COMBO_FLIGHT') {
      if (stt == 0) {
        se.navCtrl.navigateForward("/mytripaymentflightcombo/0");
      }
      else {
        se.navCtrl.navigateForward("/mytripaymentflightcombo/1");
      }

    } else if (trip.booking_type == 'COMBO_VXR') {
      if (stt == 0) {
        se.navCtrl.navigateForward("/mytripaymentcarcombo/0");
      }
      else {
        se.navCtrl.navigateForward("/mytripaymentcarcombo/1");
      }

    }
    else if (trip.isBookingVMBQT&& trip.isTravelPort) {
      se._flightService.itemFlightInternational = null;
      se.activityService.objPaymentMytrip = trip;
      this.gf.showLoading();
      let url = C.urls.baseUrl.urlFlightInt + `api/bookings/${trip.booking_id}/summary?${new Date().getTime()}`;
      this.gf.RequestApi('GET', url, {}, {}, 'flightadddetailsinternational', 'getSummaryBooking').then((data) => {
        this.gf.hideLoading();
        this._flightService.itemFlightCache.dataSummaryBooking = data.data;
        se.navCtrl.navigateForward("/flightinternationalpaymentselect");
      })

    }
    else if (trip.isFlyBooking) {
      if (stt == 0) {
        se.navCtrl.navigateForward("/mytripaymentflightselect/0");
      }
      else {
        se.navCtrl.navigateForward("/mytripaymentflightselect/1");
      }

    }
    else if (trip.booking_type == 'TOUR') {
      se._tourService.BookingTourMytrip = trip;
      se._tourService.itemDetail = null;
      se.navCtrl.navigateForward("/tourpaymentselect");
    }

    else {
      // stt 0:CKNH
      if (stt == 0) {
        se.navCtrl.navigateForward("/mytripaymentselect/0");
      }
      else {
        se.navCtrl.navigateForward("/mytripaymentselect/1");
      }
    }
    C.writePaymentLog("order", "paymentselect", "purchase", trip.HotelIdERP);
  }

  showHistoryTrip() {
    if (!this.isConnected) {
      this.gf.showToastWarning('Thiết bị đang không kết nối mạng, vui lòng bật kết nối để tiếp tục thao tác!');
      return;
    }
    this._mytripservice.backroute = "order";
    if (!this._mytripservice.rootPage) {
      this._mytripservice.rootPage = "homehotel";
    }
    this.navCtrl.navigateForward("mytriphistory");
  }




  showtripdetail(trip) {
    if (!this.isConnected) {
      this.gf.showToastWarning('Thiết bị đang không kết nối mạng, vui lòng bật kết nối để tiếp tục thao tác!');
      return;
    }
    if (trip.payment_status == 1 || trip.payment_status == 5 || trip.payment_status == 9 || (trip.payment_status == 0 && trip.deliveryPaymentDisplay) ) {//test vvc
      if (trip) {
        this.enableheader = false;
        this._mytripservice.tripdetail = trip;
        this._mytripservice.currentTrip = this.currentTrip;
        //this.nativePageTransitions.slide(this.options);
        if (this._mytripservice.rootPage == "homeflight") {
          this._mytripservice.backroute = "tabs/tab1";
        } else {
          this._mytripservice.backroute = "/app/tabs/tab3";
        }
        this.navCtrl.navigateForward('mytripdetail', { animated: true });
      }
    }

  }

  getRatingStar(trip) {
    let se = this;
    switch (trip.rating) {
      case 50:
        trip.RatingStar = "./assets/star/ic_star_5.svg";
        break;
      case 45:
        trip.RatingStar = "./assets/star/ic_star_4.5.svg";
        break;
      case 40:
        trip.RatingStar = "./assets/star/ic_star_4.svg";
        break;
      case 35:
        trip.RatingStar = "./assets/star/ic_star_3.5.svg";
        break;
      case 30:
        trip.RatingStar = "./assets/star/ic_star_3.svg";
        break;
      case 25:
        trip.RatingStar = "./assets/star/ic_star_2.5.svg";
        break;
      case 20:
        trip.RatingStar = "./assets/star/ic_star_2.svg";
        break;
      case 15:
        trip.RatingStar = "./assets/star/ic_star_1.5.svg";
        break;
      case 10:
        trip.RatingStar = "./assets/star/ic_star_1.svg";
        break;
      case 5:
        trip.RatingStar = "./assets/star/ic_star_0.5.svg";
        break;
      default:
        break;
    }
  }

  getHoteldeal() {
    var se = this;
    var options = {
      method: 'POST',
      url: C.urls.baseUrl.urlMobile + '/mobile/OliviaApis/TopDeals?pageIndex=1&pageSize=200' + (se.memberid ? '&memberid=' + se.memberid : ''),
      timeout: 10000, maxAttempts: 5, retryDelay: 2000,
      headers:
      {

        apisecret: '2Vg_RTAccmT1mb1NaiirtyY2Y3OHaqUfQ6zU_8gD8SU',
        apikey: '0HY9qKyvwty1hSzcTydn0AHAXPb0e2QzYQlMuQowS8U'
      }
    };
    request(options, function (error, response, body) {
      if (response.statusCode != 200) {
        var objError = {
          page: "main",
          func: "getHoteldeal",
          message: response.statusMessage,
          content: response.body,
          param: JSON.stringify(options),
          type: "warning"
        };
        C.writeErrorLog(objError, response);
      }
      if (error) {
        error.page = "main";
        error.func = "getHoteldeal";
        error.param = JSON.stringify(options);
        C.writeErrorLog(error, response);
      };
      se.storage.set('listtopdealdefault', JSON.parse(body));
      se.loaddatatopdeal(JSON.parse(body));
    });
  }

  showBlog(menu) {
    var se = this;
    if (menu.linkBlog) {
      se.gf.showLoading();
      se.mapBlogId(menu.linkBlog).then((id) => {
        se.gf.hideLoading();
        if (id) {
          se.navCtrl.navigateForward("/blog/" + id);
        } else {
          se.gf.showToastWarning("Không tìm thấy bài viết. Xin vui lòng quay lại sau!");
        }
      })
      //se.navCtrl.navigateForward("/blog/"+);
    }
  }

  mapBlogId(item): Promise<any> {
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
        se.zone.run(() => {
          var data = JSON.parse(body);
          resolve(data.post.ID);
        })
      })
    })


  }

  doInfinite(infiniteScroll) {
    this.zone.run(() => {
      if (this.listMyTrips.length < this.totalTrip) {
        this.pageIndex = this.pageIndex + 1;
        this.getdata(null, false);
        this._infiniteScroll = infiniteScroll;
      }
    })
  }
  nextSupport(trip) {
  
    this.activityService.objPaymentMytrip = { trip: trip };
    if (!trip.isRequestTrip && trip.isFlyBooking) {
      this.navCtrl.navigateForward('/orderrequestsupport');
    } else {
      this.navCtrl.navigateForward('/ordersupport/0');
    }

  }

  getCathayClaimInfo(bkgid): Promise<any> {
    return new Promise((resole, reject) => {
      let url = C.urls.baseUrl.urlMobile + '/api/Dashboard/GetCathayByKey?key=' + bkgid;
      let header = {
        apisecret: '2Vg_RTAccmT1mb1NaiirtyY2Y3OHaqUfQ6zU_8gD8SU',
        apikey: '0HY9qKyvwty1hSzcTydn0AHAXPb0e2QzYQlMuQowS8U'
      }
      this.gf.RequestApi('GET', url, header, null, 'MytripDetail', "getCathayClaimInfo").then((data) => {
        if (data) {
          resole(data);
        } else {
          resole(false);
        }
      })
    })
  }
  requestCathay(name, trip, gender) {
    if (gender.indexOf('Bé') == 0) {
      this.getCathay(name, trip);
      return;
    }
    this.activityService.objCathayMytrip = { name: name, trip: trip };
    this.valueGlobal.backpageCathay = 'order';
    this.navCtrl.navigateForward('/mytripcathay/' + trip.booking_id);
  }
  getCathay(cusname, trip) {
    var co = 0;
    this.presentLoadingData();
    this.gf.getCathayByKey(trip.booking_id).then((data) => {
      this.myloader.dismiss();
      var json = JSON.parse(data);
      if (json.result) {
        this.noLoginObj = json;

        if (
          this.noLoginObj &&
          this.noLoginObj.insurObj &&
          this.noLoginObj.insurObj.adultList.length > 0
        ) {
          this.childList = this.noLoginObj.insurObj.childList;
          if (this.childList.length > 0) {
            let i = 1;
            this.childList.forEach(element => {
              element.birth = element.customer_dob;
              element.id = i;
              i++;
              element.name = element.customer_name;
              if (element.claiming_flights && element.customer_name.toLowerCase().trim() == cusname.toLowerCase().trim()) {
                this.presentToastwarming('Trẻ em đã claim chuyến bay ' + element.claiming_flights + '');
                co = 1;
              }
            });

          }

        }

      }
      if (co == 0) {
        this.presentToastwarming('Trẻ em dưới 14 tuổi sẽ thực hiện yêu cầu bồi thường bảo hiểm theo người lớn đi cùng');
      }
    })

  }
  async presentToastwarming(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top',
    });
    toast.present();
  }


  getBookingTourDetail(trip) {
    let headers = {
      apisecret: '2Vg_RTAccmT1mb1NaiirtyY2Y3OHaqUfQ6zU_8gD8SU',
      apikey: '0HY9qKyvwty1hSzcTydn0AHAXPb0e2QzYQlMuQowS8U'
    };
    this.gf.RequestApi('GET', C.urls.baseUrl.urlMobile + '/tour/api/TourApi/GetTourById?id=' + trip.hotel_id.replace('TO', ''), headers, {}, 'order', 'getBookingTourDetail').then((data) => {
      if (data && data.Status == "Success" && data.Response) {
        trip.itemTourDetail = data.Response;
        if (trip.itemTourDetail && trip.itemTourDetail.Image) {

          trip.itemTourDetail.ImagesSlide = trip.itemTourDetail.Image.split(', ');
          let countstring = trip.itemTourDetail.ProgramContent.match(/cdn2/g || []).length;
          for (let index = 0; index < countstring; index++) {
            trip.itemTourDetail.ProgramContent = trip.itemTourDetail.ProgramContent.replace('src="//cdn2', 'src="https://cdn2');
          }

        }
        if (trip.itemTourDetail.AvgPoint && (trip.itemTourDetail.AvgPoint.toString().length == 1 || trip.itemTourDetail.AvgPoint === 10)) {
          trip.itemTourDetail.AvgPoint = trip.itemTourDetail.AvgPoint + ".0";
        }

      }
    })
  }

  expandDiv(type) {
    if (type == 1) {
      this.expandDivIncludePrice = !this.expandDivIncludePrice;

      if (this.expandDivIncludePrice) {
        var divCollapse = $('.div-wrap-includeprice.div-collapse');
        if (divCollapse && divCollapse.length > 0) {
          divCollapse.removeClass('div-collapse').addClass('div-expand');
        }

      } else {
        var divCollapse = $('.div-wrap-includeprice.div-expand');
        if (divCollapse && divCollapse.length > 0) {
          divCollapse.removeClass('div-expand').addClass('div-collapse');
        }

      }
    }
    else if (type == 2) {
      this.expandDivTourInfo = !this.expandDivTourInfo;

      if (this.expandDivTourInfo) {
        var divCollapse = $('.div-wrap-tourinfo.div-collapse');
        if (divCollapse && divCollapse.length > 0) {
          divCollapse.removeClass('div-collapse').addClass('div-expand');
        }

        setTimeout(() => {
          if ($('#contentcontentIncludePrice') && $('#contentcontentIncludePrice').length > 0) {
            document.getElementById('contentcontentIncludePrice').scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 50)

      } else {
        var divCollapse = $('.div-wrap-tourinfo.div-expand');
        if (divCollapse && divCollapse.length > 0) {
          divCollapse.removeClass('div-expand').addClass('div-collapse');
        }

        setTimeout(() => {
          if ($('#contentTourInfo') && $('#contentTourInfo').length > 0) {
            document.getElementById('contentTourInfo').scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 50)

      }
    }
    else if (type == 3) {
      this.expandDivTourNotes = !this.expandDivTourNotes;

      if (this.expandDivTourNotes) {
        var divCollapse = $('.div-wrap-tournotes.div-collapse');
        if (divCollapse && divCollapse.length > 0) {
          divCollapse.removeClass('div-collapse').addClass('div-expand');
        }

        setTimeout(() => {
          if ($('#contentTourNotes') && $('#contentTourNotes').length > 0) {
            document.getElementById('contentTourNotes').scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 50)

      } else {
        var divCollapse = $('.div-wrap-tournotes.div-expand');
        if (divCollapse && divCollapse.length > 0) {
          divCollapse.removeClass('div-expand').addClass('div-collapse');
        }

        setTimeout(() => {
          if ($('#contentTourNotes') && $('#contentTourNotes').length > 0) {
            document.getElementById('contentTourNotes').scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 50)

      }
    }
    else {

    }
  }

  showTourInfo() {
    this._mytripservice.tripdetail = this.listMyTrips[0];
    this.navCtrl.navigateForward('/mytriptourinfo');
  }

  openLinkCondition() {
    this.safariViewController.isAvailable()
      .then((available: boolean) => {
        if (available) {
          this.safariViewController.show({
            url: 'https://www.ivivu.com/dieu-kien-dieu-khoan-hang-khong',
            hidden: false,
            animated: false,
            transition: 'curl',
            enterReaderModeIfAvailable: true,
            tintColor: '#23BFD8'
          })
            .subscribe((result: any) => {
              if (result.event === 'opened') console.log('Opened');
              else if (result.event === 'loaded') console.log('Loaded');
              else if (result.event === 'closed') {

              }

            },
              (error: any) => console.error(error)
            );

        } else {
        }
      }
      );
  }


  getSummaryBooking(trip) {
    let url = C.urls.baseUrl.urlFlightInt + `api/bookings/${trip.booking_id}/summary?${new Date().getTime()}`;
    this.gf.RequestApi('GET', url, {}, {}, 'flightadddetailsinternational', 'getSummaryBooking').then((data) => {
      if (data.data) {
        trip.dataSummaryBooking = data.data;
        console.log(data.data);
        this.loadsummarydone = true;
        if (trip.dataSummaryBooking.departFlightData) {
          this.getDetailTicket(trip.dataSummaryBooking.departFlightData, trip, 1);
        }

        if (trip.dataSummaryBooking.returnFlightData && trip.dataSummaryBooking.returnFlightData.id) {
          this.getDetailTicket(trip.dataSummaryBooking.returnFlightData, trip, 0);
        }
      }

    })
  }

  getDetailTicket(item, trip, isdepart) {
    let se = this;
    let url = C.urls.baseUrl.urlFlight + `gate/apiv1/GetDetailTicketAirBus?airlineCode=${item.airline}&ticketType=${item.ticketClass}&flightNumber=${item.flightNumber}&fromPlace=${item.fromPlaceCode}&toPlace=${item.toPlaceCode}&resbookCode=${item.ticketType||''}&airbusCode=${item.aircraft||''}&departDate=${moment(item.departTime).format('YYYY-MM-DD')}&bookingDate=${moment(trip.bookingDate).format('YYYY-MM-DD')}`;
    this.gf.RequestApi('GET', url, {}, {}, 'flightadddetailsinternational', 'getSummaryBooking').then((data) => {
      if (data) {
        se.zone.run(() => {
          trip.loadsummarydone = true;
          if (isdepart) {
            trip.departTicketInfo = data;
          } else {
            trip.returnTicketInfo = data;
          }
        })
      }
    })
  }

  expandCondition(trip) {
    if (!trip.loadsummarydone) {
      this.gf.showAlertMessageOnly('Đang tải chi tiết vé, xin vui lòng đợi trong giây lát!');
      return;
    }
    trip.expanddivcondition = !trip.expanddivcondition;
    if (trip.expanddivcondition) {
      var divCollapse = $('.div-wrap-condition.div-collapse');
      if (divCollapse && divCollapse.length > 0) {
        divCollapse.removeClass('div-collapse').addClass('div-expand');
      }

    } else {
      var divCollapse = $('.div-wrap-condition.div-expand');
      if (divCollapse && divCollapse.length > 0) {
        divCollapse.removeClass('div-expand').addClass('div-collapse');
      }
      this.scrollToTopGroup(1);
    }

  }

  expandRefund(trip) {
    trip.expanddivrefund = !trip.expanddivrefund;
    if (trip.expanddivrefund) {
      var divCollapse = $('.div-wrap-refund.div-collapse');
      if (divCollapse && divCollapse.length > 0) {
        divCollapse.removeClass('div-collapse').addClass('div-expand');
      }

    } else {
      var divCollapse = $('.div-wrap-refund.div-expand');
      if (divCollapse && divCollapse.length > 0) {
        divCollapse.removeClass('div-expand').addClass('div-collapse');
      }
      this.scrollToTopGroup(2);
    }

  }

  scrollToTopGroup(value) {
    //scroll to top of group
    setTimeout(() => {
      var objHeight = value == 1 ? $('.div-condition') : $('.div-refund').last();
      if (objHeight && objHeight.length > 0) {
        var h = 0;
        h = objHeight[0].offsetTop;
        if (this.scrollArea) {
          this.scrollArea.scrollToPoint(0, h, 500);
        }

      }
    }, 100)
  }
  //}
  getDetailTicketFromDat(stt): Promise<any> {
    var se = this;
    return new Promise((resolve, reject) => {
      if (stt == 0) {
        var airlineCode = this.getairlineCode(stt);
        var ticketClass = se.listMyTrips[0].bookingsComboData[0].ticketClass;
        var departDate = se.listMyTrips[0].bookingsComboData[0].departTime;
        var flightNumber = se.listMyTrips[0].bookingsComboData[0].flightNumner;
        var fromplace = se.listMyTrips[0].bookingJsonDataParse[0].departCode;
        var toplace = se.listMyTrips[0].bookingJsonDataParse[0].arrivalCode;
      } else {
        var airlineCode = this.getairlineCode(stt);
        var ticketClass = se.listMyTrips[0].bookingsComboData[1].ticketClass;
        var departDate = se.listMyTrips[0].bookingsComboData[1].departTime;
        var flightNumber = se.listMyTrips[0].bookingsComboData[1].flightNumner;
        var fromplace = se.listMyTrips[0].bookingJsonDataParse[1].departCode;
        var toplace = se.listMyTrips[0].bookingJsonDataParse[1].arrivalCode;
      }

      var options = {
        method: 'GET',
        url: C.urls.baseUrl.urlFlight + "gate/apiv1/GetDetailTicketAirBus?airlineCode=" + airlineCode + "&ticketType=" + ticketClass + "&flightNumber=" + flightNumber + "&departDate=" + departDate + "&bookingDate=" + moment(this.listMyTrips[0].bookingDate).format('YYYY-MM-DD')+`&fromPlace=${fromplace}&toPlace=${toplace}`,
        timeout: 180000, maxAttempts: 5, retryDelay: 20000,
        headers: {

        }
      };
      request(options, function (error, response, body) {
        let objError = {
          page: "flightsearchresult",
          func: "selectTicket",
          message: response.statusMessage,
          content: response.body,
          type: "warning",
          param: JSON.stringify(options)
        };
        if (error) {
          error.page = "flightsearchresult";
          error.func = "selectTicket";
          error.param = JSON.stringify(options);
          C.writeErrorLog(objError, response);
        }
        if (response.statusCode == 200) {
          let result = JSON.parse(body);
          if (stt == 0) {
            se.baggageHandedDepart = se.listMyTrips[0].bookingJsonDataParse[0] && se.listMyTrips[0].bookingJsonDataParse[0].ticketConditions && se.listMyTrips[0].bookingJsonDataParse[0].ticketConditions.BaggageHanded ? se.listMyTrips[0].bookingJsonDataParse[0].ticketConditions.BaggageHanded : result.ticketCondition.baggageHanded;
            se.luggageSignedDepart = se.listMyTrips[0].bookingJsonDataParse[0] && se.listMyTrips[0].bookingJsonDataParse[0].ticketConditions && se.listMyTrips[0].bookingJsonDataParse[0].ticketConditions.LuggageSigned ? se.listMyTrips[0].bookingJsonDataParse[0].ticketConditions.LuggageSigned : result.ticketCondition.luggageSigned;
            se.departConditionInfo = result;
            if (se.listMyTrips[0] && se.listMyTrips[0].bookingsComboData && se.listMyTrips[0].bookingsComboData.length > 0) {
              se.listMyTrips[0].bookingsComboData[0].passengers.forEach(element => {
                element.hanhLyshow = "";
                if (element.hanhLy && se.luggageSignedDepart) {
                  element.hanhLyshow = Number(element.hanhLy.toString().replace('kgs', '').replace('kg', '')) + Number(se.luggageSignedDepart.toString().replace('kgs', '').replace('kg', ''));
                } else {
                  if (element.hanhLy) {
                    element.hanhLyshow = element.hanhLy;
                  } else {
                    element.hanhLyshow = se.luggageSignedDepart;
                  }

                }
                if (element.hanhLyshow) {
                  element.hanhLyshow = element.hanhLyshow.toString().replace('kgs', '').replace('kg', '');
                }
              });
            }
            se._departTicketInfoCRM = se.listMyTrips[0].bookingJsonDataParse[0] && se.listMyTrips[0].bookingJsonDataParse[0].ticketConditions ? se.listMyTrips[0].bookingJsonDataParse[0] : null;
            // let _departChangeDepartTimeCRM = !((_departTicketInfoCRM && (!_departTicketInfoCRM.ticketConditions.ChangeDepartTime || _departTicketInfoCRM.ticketConditions.ChangeDepartTime.indexOf('Không') != -1)) || !_departTicketInfoCRM );
            se.listMyTrips[0].departChangeDepartTime = !((result && (!result.ticketCondition.changeDepartTime || result.ticketCondition.changeDepartTime.indexOf('Không') != -1)) || !result );
          } else {
            se.baggageHandedReturn = se.listMyTrips[0].bookingJsonDataParse[1] && se.listMyTrips[0].bookingJsonDataParse[1].ticketConditions && se.listMyTrips[0].bookingJsonDataParse[1].ticketConditions.BaggageHanded ? se.listMyTrips[0].bookingJsonDataParse[1].ticketConditions.BaggageHanded : result.ticketCondition.baggageHanded;
            se.luggageSignedReturn = se.listMyTrips[0].bookingJsonDataParse[1] && se.listMyTrips[0].bookingJsonDataParse[1].ticketConditions && se.listMyTrips[0].bookingJsonDataParse[1].ticketConditions.LuggageSigned ? se.listMyTrips[0].bookingJsonDataParse[1].ticketConditions.LuggageSigned : result.ticketCondition.luggageSigned;
            
            se.returnConditionInfo = result;
            if (se.listMyTrips[0] && se.listMyTrips[0].bookingsComboData && se.listMyTrips[0].bookingsComboData.length > 1) {
              se.listMyTrips[0].bookingsComboData[1].passengers.forEach(element => {
                element.hanhLyshow = "";
                if (element.hanhLy && se.luggageSignedReturn) {
                  element.hanhLyshow = Number(element.hanhLy.toString().replace('kgs', '').replace('kg', '')) + Number(se.luggageSignedReturn.toString().replace('kgs', '').replace('kg', ''));
                } else {
                  if (element.hanhLy) {
                    element.hanhLyshow = element.hanhLy;
                  } else {
                    element.hanhLyshow = se.luggageSignedReturn;
                  }

                }
                if (element.hanhLyshow) {
                  element.hanhLyshow = element.hanhLyshow.toString().replace('kgs', '').replace('kg', '');
                }
              });
            }
            se._returnTicketInfoCRM = se.listMyTrips[0].bookingJsonDataParse[1]&& se.listMyTrips[0].bookingJsonDataParse[1].ticketConditions ? se.listMyTrips[0].bookingJsonDataParse[1] : null;
            // let _returnChangeDepartTimeCRM = !((_returnTicketInfoCRM && (!_returnTicketInfoCRM.ticketConditions.ChangeDepartTime || _returnTicketInfoCRM.ticketConditions.ChangeDepartTime.indexOf('Không') != -1)) || !_returnTicketInfoCRM );
            se.listMyTrips[0].returnChangeDepartTime = !((result && (!result.ticketCondition.changeDepartTime || result.ticketCondition.changeDepartTime.indexOf('Không') != -1)) || !result );
          }
          resolve(result);

        }
      })
    })
  }
  getairlineCode(stt) {
    var se = this;
    var airlineName = "";
    if (se.listMyTrips[0].bookingsComboData) {
      if (stt == 0) {
        if (se.listMyTrips[0].bookingsComboData[0].airlineName.indexOf('VIETJET') != -1) {
          airlineName = "VietJetAir"
        } else if (se.listMyTrips[0].bookingsComboData[0].airlineName.indexOf('Vietnam Airlines') != -1 || se.listMyTrips[0].bookingsComboData[0].airlineName.indexOf('VIETNAM AIRLINES') != -1) {
          airlineName = "VietnamAirlines"
        } else {
          airlineName = "BambooAirways"
        }
      } else {
        if (se.listMyTrips[0].bookingsComboData[1].airlineName.indexOf('VIETJET') != -1) {
          airlineName = "VietJetAir"
        } else if (se.listMyTrips[0].bookingsComboData[1].airlineName.indexOf('Vietnam Airlines') != -1 || se.listMyTrips[0].bookingsComboData[1].airlineName.indexOf('VIETNAM AIRLINES') != -1) {
          airlineName = "VietnamAirlines"
        } else {
          airlineName = "BambooAirways"
        }
      }
    }

    return airlineName;
  }
  dkv() {
    this.isdkv = !this.isdkv
  }
  policy() {
    this.ishdnp = !this.ishdnp;
  }
  phuthuP() {
    this.isptp = !this.isptp;
  }
  info() {
    this.isttt = !this.isttt;
  }
  openWebpage(url) {
    // var url = "https://www.ivivu.com/dieu-kien-dieu-khoan-hang-khong";
    this.safariViewController.isAvailable()
      .then((available: boolean) => {
        if (available) {
          this.safariViewController.show({
            url: url,
            hidden: false,
            animated: false,
            transition: 'curl',
            enterReaderModeIfAvailable: true,
            tintColor: '#23BFD8'
          })
            .subscribe((result: any) => {

            },
              (error: any) => console.error(error)
            );

        } else {
          // use fallback browser, example InAppBrowser
        }
      })
  }
  parseDatetime(date: string, time: string) {
    let dateObj = date.split("/");
    let dtStr = dateObj[1] + "/" + dateObj[0] + "/" + dateObj[2] + " " + time;
    return new Date(dtStr);
  }
  getAirportByCode(code) {
    var se = this, res = "";
    if (se._flightService.listAirport && se._flightService.listAirport.length > 0) {
      let itemmap = se._flightService.listAirport.filter((item) => { return item.code == code });
      res = (itemmap && itemmap.length > 0) ? itemmap[0].airport : "";
    }
    return res;
  }
  getmhoteldetail() {
    var se = this;
    let url = C.urls.baseUrl.urlPost + "/mhoteldetail/" + se.listMyTrips[0].booking_id;
    var options = {
      method: 'POST',
      url: url,
      timeout: 180000, maxAttempts: 5, retryDelay: 2000,
    };
    request(options, function (error, response, body) {
      if (response.statusCode != 200) {
        var objError = {
          page: "policy",
          func: "getdata",
          message: response.statusMessage,
          content: response.body,
          type: "warning",
          param: JSON.stringify(options)
        };
        C.writeErrorLog(objError, response);
      }
      if (error) {
        error.page = "policy";
        error.func = "loaddata";
        error.param = JSON.stringify(options);
        C.writeErrorLog(objError, response);
      }
      if (response.statusCode == 200) {
        if (body) {
          let jsondata = JSON.parse(body);
          se.zone.run(() => {
            se.cin = jsondata.CheckinTime;
            se.cout = jsondata.CheckoutTime;
            se.HotelPolicies = jsondata.HotelPolicies
          })
        }

      }
    })
  }
  isJson(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }

  buildLinkQrCode(trip) {
    this.zone.run(() => {
      this.qrcodeurl = `https://cdn1.ivivu.com/newcdn/qr-payment?bankname=${trip.textbank}&amount=${this.gf.convertStringToNumber((this.amount_after_tax ? this.amount_after_tax : trip.amount_after_tax))}&description=${trip.booking_id}`;
    })

  }

  async downloadqrcode(trip) {
    let storageDirectory = '';
    if (this.platform.is('ios')) {
      storageDirectory = this.file.dataDirectory + `qrcode_${trip.booking_id}.png`;
    }
    else if (this.platform.is('android')) {
      storageDirectory = this.file.externalDataDirectory + `qrcode_${trip.booking_id}.png`;
    }
    else {
      return false;
    }
    storageDirectory = normalizeURL(storageDirectory);
    this.gf.showLoading();
    try {
      this.socialSharing.saveToPhotoAlbum(this.qrcodeurl).then(() => {
        this.gf.hideLoading();
        this.presentToastr('Đã lưu');
      });
    } catch (error) {
      this.gf.hideLoading();
    }
  }
  goToLogin() {
    this.navCtrl.navigateForward('/login');
  }
  goToRegister() {
    this.navCtrl.navigateForward('/register');
  }

  showCheckinOnline(trip) {
    if (trip) {
      this.enableheader = false;
      if (this._mytripservice.rootPage == "homeflight") {
        this._mytripservice.backroute = "tabs/tab1";
      } else {
        this._mytripservice.backroute = "/app/tabs/tab3";
      }

      this._mytripservice.tripdetail = trip;
      this.navCtrl.navigateForward('/mytripcheckinonline');
    }

  }
  share(item) {
    this.socialSharing.share(null, null, item.CheckinInfo,null).then(() => {
      // Success!
    }).catch(() => {
      // Error!
    });
  }
  sharePDF(url){
    this.socialSharing.share(null, null, null, url).then(() => {
      // Success!
    }).catch(() => {
      // Error!
    });
  }
  async downloadimg(item,trip) {
    console.log(trip);
    if (trip.bookingsComboData[0].airlineName.indexOf('Vietnam Airlines') != -1  || trip.bookingsComboData[0].airlineName.indexOf('VIETNAM AIRLINES') != -1 || trip.bookingsComboData[0].airlineName.indexOf('BAMBOO') != -1) {
      this.downloadPDF(item.CheckinInfo);
    } else {
      try {
        this.socialSharing.saveToPhotoAlbum(item.CheckinInfo).then(() => {
          // this.gf.hideLoading();
          this.presentToastr('Đã lưu');
        });
      } catch (error) {
        this.gf.hideLoading();
      }
    }
   
  }
  
  checkinOnline(trip) {
    
    var se = this;
    let temp = trip.bookingsComboData[0].arrivalDate.split("/");
    let daytemp=temp[2]+ temp[1] + temp[0];
    var dep = moment(daytemp+ " " + trip.bookingsComboData[0].arrivalTime, "YYYYMMDD HH:mm")
    let diffminutes = moment(dep).diff(new Date(), 'minutes');
    if (diffminutes > 210) {
      this.gf.showLoading();
      var options = {
        method: 'POST',
        url: C.urls.baseUrl.urlMobile + '/app/CRMOldApis/CreateSupportRequest',
        timeout: 10000, maxAttempts: 5, retryDelay: 2000,
        headers:
        {
          'cache-control': 'no-cache',
          'content-type': 'application/json'
        },
        body:
        {
          bookingCode: trip.booking_id,
          customerEmail: trip.cus_email,
          customerName: trip.cus_name,
          customerPhone: trip.cus_phone,
          requestContent: "Yêu cầu checkin Online",
          requestType: "Yêu cầu checkin Online",
          sourceRequest: "App"
        },
        json: true
      };
      request(options, function (error, response, body) {
        if (body.error == 0) {
          trip.bookingjson[0].RequestCheckin=1;
          se.gf.hideLoading();
          alert("Gửi yêu cầu checkin online thành công");
        }
  
      })
    }else{
      this.zone.run(() => {
        trip.bookingjson[0].RequestCheckin=0;
        trip.ischeckinOnl=true;
        alert("Chuyến bay trong khung đóng chuyến. Qúy khách vui lòng làm thủ tục tại kios hoặc quầy checkin tại sân bay");
      })

    }
  }

  downloadPDF(url) {
    // ;
    //  url = 'https://cdn1.ivivu.com/files/2023/04/28/10/BoardingPass_.pdf';
    this.fileTransfer.download(url, this.file.documentsDirectory + 'BoardingPass.pdf').then((entry) => {
      // console.log('download complete: ' + entry.toURL());
      this.presentToastr('Đã lưu');
    }, (error) => {
      // handle error
    });
  }
  downloadPDFVC(url) {
    // ;
    //  url = 'https://cdn1.ivivu.com/files/2023/04/28/10/BoardingPass_.pdf';
    this.fileTransfer.download(url, this.file.documentsDirectory + 'filename.pdf').then((entry) => {
      // console.log('download complete: ' + entry.toURL());
      this.presentToastr('Đã lưu');
    }, (error) => {
      // handle error
    });
  }
  ticketinfo(){
    this.isTTV=!this.isTTV;
  }
  showPrice(){
    this.expandPrice = !this.expandPrice;
  }
  GetVoucherLinks(booking_id): Promise<any>{
    return new Promise((resolve, reject) => {
      this.gf.RequestApi('GET', C.urls.baseUrl.urlTicket + '/api/Reservation/GetVoucherLinks?bookingCode='+booking_id , {}, {}, '', '').then((data) => {
        if (data && data.success) {

            resolve(data.data);
           
        }
      });
    })

  }

  async showQrCodeSlide(){
    if(this.ischeckqrLink){
      this._mytripservice.objectDetail = this.objectDetail;
        const modal: HTMLIonModalElement = await this.modalCtrl.create({
          component: MytripTicketQrcodeSlidePage,
        });
        modal.present();
        
    }
  }
  async openSort() {
    // if(!this.loadpricedone){
    //   this.gf.showToastWarning('Đang tìm vé máy bay tốt nhất. Xin quý khách vui lòng đợi trong giây lát!');
    //   return;
    // }
    let actionSheet = await this.actionsheetCtrl.create({
      cssClass: 'action-sheets-tourlist-sort',
      buttons: [
        {
          text: "Ngày khởi hành",
          cssClass: "btn-Checkin cls-border-bottom",
          handler: () => {
            this.buttonCheckin = true
            this.buttonCheckin ? $(".btn-Checkin > span").addClass('selected') : $(".btn-Checkin > span").removeClass('selected');

            this.buttonBooking = false;
            if (this.buttonCheckin) {
              this.sortMytrip();
            }
          }
        },
        {
          text: "Ngày đặt booking",
          cssClass: "btn-Booking cls-border-bottom",
          handler: () => {
            this.buttonBooking = true;
            this.buttonBooking ? $(".btn-Booking > span").addClass('selected') : $(".btn-Booking > span").removeClass('selected');

            this.buttonCheckin = false;
            if (this.buttonBooking) {
              this.sortMytripBooking();
            }
          }
        }
       

      ]

    });

    this.buttonCheckin ? $(".btn-Checkin > span").addClass('selected') : $(".btn-Checkin > span").removeClass('selected');
    this.buttonBooking ? $(".btn-Booking > span").addClass('selected') : $(".btn-Booking > span").removeClass('selected');
    actionSheet.present();

  }
}





