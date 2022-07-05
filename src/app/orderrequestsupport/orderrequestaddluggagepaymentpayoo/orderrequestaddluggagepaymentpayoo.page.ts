import { ActivityService, GlobalFunction } from './../../providers/globalfunction';
import { NavController, Platform,ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, NgZone } from '@angular/core';
import * as request from 'requestretry';
import { C } from '../../providers/constants';
import * as moment from 'moment';
import { flightService } from '../../providers/flightService';
import { ValueGlobal } from './../../providers/book-service';
import { FlightquickbackPage } from '../../flightquickback/flightquickback.page';
import { CustomAnimations } from '../../providers/CustomAnimations';
import { SafariViewController } from '@ionic-native/safari-view-controller/ngx';

@Component({
  selector: 'app-orderrequestaddluggagepaymentpayoo',
  templateUrl: './orderrequestaddluggagepaymentpayoo.page.html',
  styleUrls: ['./orderrequestaddluggagepaymentpayoo.page.scss'],
})
export class OrderRequestAddluggagePaymentPayooPage implements OnInit {

  bookingCode; stt; text; qrimg; BillingCode; total; PeriodPaymentDate; textHours;
  intervalID: any;
  allowCheck: any = true;
  allowCheckHoldTicket: boolean = true;
  _inAppBrowser: any; _email
  constructor(private navCtrl: NavController, public gf: GlobalFunction,
    private activatedRoute: ActivatedRoute, private _flightService: flightService,
    public valueGlobal: ValueGlobal,private modalCtrl: ModalController,
    private zone: NgZone,
    public activityService: ActivityService,
    private safariViewController: SafariViewController) {
      this.bookingCode = this.activityService.objRequestAddLuggage.bookingCode;
  }

  ngOnInit() {
    //this.bookingCode = this.activatedRoute.snapshot.paramMap.get('code');
    this.stt = this.activatedRoute.snapshot.paramMap.get('stt');
    this._email = this._flightService.itemFlightCache.email;
    if (this.stt == 0) {
      this.BillingCode = this._flightService.itemFlightCache.BillingCode;
    }
    else {
      this.qrimg = this._flightService.itemFlightCache.qrimg;
      clearInterval(this.intervalID);
      this.intervalID = setInterval(() => {
        //this.checkqrcode();
        this.zone.run(()=>{
          this.callCheckPayment();
        })
       
      }, 1000 * 5);

      setTimeout(() => {
        clearInterval(this.intervalID);
      }, 60000 * 15);
    }
    this.total = this.activityService.objRequestAddLuggage.totalPrice.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
    this.PeriodPaymentDate = this._flightService.itemFlightCache.periodPaymentDate ? this.gf.getDayOfWeek(this._flightService.itemFlightCache.periodPaymentDate).dayname + ", " + moment(this._flightService.itemFlightCache.periodPaymentDate).format("DD") + " thg " + moment(this._flightService.itemFlightCache.periodPaymentDate).format("MM") : "";
  }
  goback() {
    if (this.stt == 1) {
      clearInterval(this.intervalID);
    }
    this.allowCheck = false;
    this.navCtrl.back();
  }
  next() {
    var se = this;
    if (this.stt == 0) {
      this.clearItemCache();
      this._flightService.itemTabFlightActive.emit(true);
      this.valueGlobal.backValue = "homeflight";
      this._flightService.itemFlightMytripRefresh.emit(true);
      this._flightService.bookingCodePayment = this.bookingCode;
      this._flightService.bookingSuccess = true;
      this.navCtrl.navigateBack('/app/tabs/tab1');
    }
    else {
      
      clearInterval(this.intervalID);
      se.checkqrcode();
      se.allowCheck = false;
      //se.callCheckPayment();
    }

  }

  checkHoldTicket(data) {
    var se = this, res = false;
    let url = C.urls.baseUrl.urlFlight + "/gate/apiv1/SummaryBooking/" + data.pnr.resNo;

    se.callCheckHoldTicket(url, data).then((check) => {
      if (!check && se.allowCheckHoldTicket) {
        res = false;
        setTimeout(() => {
          se.checkHoldTicket(data);
        }, 3000);
      } else {
        let startDate = moment(se._flightService.itemFlightCache.checkInDate).format('YYYY-MM-DD');
        let endDate = moment(se._flightService.itemFlightCache.checkOutDate).format('YYYY-MM-DD');
        if (check) {
          se.navCtrl.navigateForward('orderrequestaddluggagepaymentdone');

        } else {//hold vé thất bại về trang tìm kiếm
          se.gf.hideLoading();
          clearInterval(se.intervalID);
          se.gf.showAlertPaymentFail();

        }

      }
    })


    setTimeout(() => {

      se.allowCheckHoldTicket = false;

    }, 1000 * 30);

  }

  callCheckHoldTicket(url, data) {
    var res = false, se = this;
    return new Promise((resolve, reject) => {
      var options = {
        method: 'GET',
        url: C.urls.baseUrl.urlFlight + "/gate/apiv1/SummaryBooking/" + data.pnr.resNo,
        timeout: 180000, maxAttempts: 5, retryDelay: 20000,
        headers: {
          "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
          'Content-Type': 'application/json; charset=utf-8',
        },
      };
      request(options, function (error, response, body) {
        if (error) {
          error.page = "globalfunction";
          error.func = "updatePaymentMethod";
          error.param = JSON.stringify(options);
        }
        if (response.statusCode == 200) {
          let result = JSON.parse(body);
          if(se._flightService){
            se._flightService.itemFlightCache.dataSummaryBooking = result;
          }
          //Thêm case check thanh toán thành công nhưng quá hạn giữ vé
          if(result.expIssueTicket){
              se.allowCheckHoldTicket = false;
              resolve(false);
            }else{
                if (data.ischeckpayment == 0)//trả sau
                {
                  if (result.isRoundTrip) {//khứ hồi
                    if (result.departFlight.atBookingCode != null && result.departFlight.atBookingCode.indexOf("T__") == -1 && result.returnFlight.atBookingCode != null && result.returnFlight.atBookingCode.indexOf("T__") == -1) {
                      resolve(true);
                    } else {
                      resolve(false);
                    }
                  } else {
                    if (result.departFlight.atBookingCode != null && result.departFlight.atBookingCode.indexOf("T__") == -1) {
                      resolve(true);
                    } else {
                      se._flightService.itemFlightCache.errorHoldTicket = 1;// không hold dc vé chiều đi
                      resolve(false);
                    }
                  }
                } else {//trả trước

                  if (result.isRoundTrip) {//khứ hồi
                    //Có mã giữ chỗ và trạng thái đã xuất vé cả 2 chiều thì trả về true - hoàn thành
                    if (result.departFlight.atBookingCode != null && result.departFlight.atBookingCode.indexOf("T__") == -1 && result.returnFlight.atBookingCode != null && result.returnFlight.atBookingCode.indexOf("T__") == -1
                      && result.departFlight.status == 4 && result.returnFlight.status == 4) {
                      resolve(true);
                    } else {
                      resolve(false);
                    }
                  } else {//Có mã giữ chỗ và trạng thái đã xuất vé thì trả về true - hoàn thành
                    if (result.departFlight.atBookingCode != null && result.departFlight.atBookingCode.indexOf("T__") == -1 && result.departFlight.status == 4) {
                      resolve(true);
                    } else {
                      resolve(false);
                    }
                  }
                }
              }
        }
      })


    })
  }

  checkqrcode() {
    var se = this;
    se.gf.showLoading();
    var options = {
      'method': 'GET',
      'url': C.urls.baseUrl.urlFlight + '/gate/apiv1/PaymentCheck?id=' + se.bookingCode+'&IsPartialPayment=true',
      'headers': {
        "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
        'Content-Type': 'application/json; charset=utf-8'
      }
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      var rs = JSON.parse(response.body);
      se.gf.hideLoading();
      let startDate = moment(se._flightService.itemFlightCache.checkInDate).format('YYYY-MM-DD');
      let endDate = moment(se._flightService.itemFlightCache.checkOutDate).format('YYYY-MM-DD');
      if (rs.ipnCall == "CALLED_OK") {
        se.gf.hideLoading();
        clearInterval(se.intervalID);
        se.navCtrl.navigateForward('orderrequestaddluggagepaymentdone');

      }
      else if(rs.ipnCall == "CALLED_FAIL" && rs.errorCode == '99')//hủy
      {
        se.gf.hideLoading();
        clearInterval(se.intervalID);
        //se.navCtrl.navigateForward('/flightpaymenterror');
        se.gf.showAlertPaymentFail();
      }
      else if(rs.ipnCall == "CALLED_TIMEOUT" && rs.errorCode == '253')//case timeout
      {
        se.gf.hideLoading();
        clearInterval(se.intervalID);
        se._flightService.paymentError = rs;
        se.navCtrl.navigateForward('/flightpaymenttimeout');
      }
      else if(rs.ipnCall == "CALLED_FAIL" && rs.errorCode != '99')//hủy
                  {
                    se.gf.hideLoading();
                    clearInterval(se.intervalID);
                    se._flightService.paymentError = rs;
                    //se.navCtrl.navigateForward('/flightpaymenttimeout');
                    se.gf.showAlertPaymentFail();
                  }
        else{
          se.allowCheck = true;
          se.zone.run(()=>{
            se.callCheckPayment();
          })
          
        }
    });
  }

  callCheckPayment() {
    var se = this;
    if (se.allowCheck) {
      se.checkPayment();
    }

  }

  checkPayment() {
    var se = this;
    let url = C.urls.baseUrl.urlFlight + "gate/apiv1/PaymentCheck?id=" + se.bookingCode+'&IsPartialPayment=true';
    se.gf.Checkpayment(url).then((data) => {
      var checkpay = JSON.parse(data);
      let startDate = moment(se._flightService.itemFlightCache.checkInDate).format('YYYY-MM-DD');
      let endDate = moment(se._flightService.itemFlightCache.checkOutDate).format('YYYY-MM-DD');
       if (checkpay.ipnCall == "CALLED_OK") {
        se.gf.hideLoading();
        clearInterval(se.intervalID);
        se.navCtrl.navigateForward('orderrequestaddluggagepaymentdone');

      }
      else if(checkpay.ipnCall == "CALLED_FAIL" && checkpay.errorCode == '99')//hủy
      {
        se.gf.hideLoading();
        clearInterval(se.intervalID);
        se.gf.showAlertPaymentFail();
      }
      else if(checkpay.ipnCall == "CALLED_TIMEOUT" && checkpay.errorCode == '253')//case timeout
      {
        se.gf.hideLoading();
        clearInterval(se.intervalID);
        se._flightService.paymentError = checkpay;
        se.gf.showAlertPaymentFail();
      }
      else if(checkpay.ipnCall == "CALLED_FAIL" && checkpay.errorCode != '99')//hủy
                  {
                    se.gf.hideLoading();
                    clearInterval(se.intervalID);
                    se._flightService.paymentError = checkpay;
                    se.gf.showAlertPaymentFail();
                  }
    })
  }

  openWebpagePayoo() {
    var se = this;
    var url = "https://payoo.vn/mapv2/public/index.php?verify=true";

    se.safariViewController.isAvailable()
    .then((available: boolean) => {
      if (available) {
        se.safariViewController.show({
          url: url,
          hidden: false,
          animated: false,
          transition: 'curl',
          enterReaderModeIfAvailable: true,
          tintColor: '#23BFD8'
        })
        .subscribe((result: any) => {
            if(result.event === 'opened') console.log('Opened');
            else if(result.event === 'loaded') console.log('Loaded');
            else if(result.event === 'closed') 
            {
            }
            
          },
          (error: any) => console.error(error)
        );

      } else {
        // use fallback browser, example InAppBrowser
      }
    })
  }
  clearItemCache() {
    this._flightService.itemFlightCache = {};
    this._flightService.itemFlightCache.departLuggage = [];
    this._flightService.itemFlightCache.returnLuggage = [];
    this._flightService.itemFlightCache.jsonSeats = null;
    this._flightService.itemFlightCache.listdepartseatselected = "";
    this._flightService.itemFlightCache.listreturnseatselected = "";
    this._flightService.itemFlightCache.departLuggage = [];
    this._flightService.itemFlightCache.returnLuggage = [];
    this._flightService.itemFlightCache.hasChoiceLuggage = false;
    this._flightService.itemFlightCache.listSeatNormal = [];
    this._flightService.itemFlightCache.listReturnSeatNormal = [];
    this._flightService.itemFlightCache.departConditionInfo = null;
    this._flightService.itemFlightCache.returnConditionInfo = null;
    this._flightService.itemFlightCache.isnewmodelseat = false;
    this._flightService.itemFlightCache.isnewmodelreturnseat = false;
  }
  async showQuickBack() {
    const modal: HTMLIonModalElement =
      await this.modalCtrl.create({
        component: FlightquickbackPage,
        componentProps: {
          aParameter: true,
        },
        showBackdrop: true,
        backdropDismiss: true,
        enterAnimation: CustomAnimations.iosCustomEnterAnimation,
        leaveAnimation: CustomAnimations.iosCustomLeaveAnimation,
        cssClass: "modal-flight-quick-back",
      });
    modal.present();
  }

}
