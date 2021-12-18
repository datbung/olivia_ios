import { OverlayEventDetail } from '@ionic/core';
import { FoodplaceotherPage } from './../foodplaceother/foodplaceother.page';
import { foodService } from './../providers/foodService';
import { GlobalFunction, ActivityService } from './../providers/globalfunction';
import { NavController, ActionSheetController, LoadingController,ToastController, ModalController,AlertController } from '@ionic/angular';
import { Component, OnInit, NgZone } from '@angular/core';
import { Storage } from '@ionic/storage';
import { C } from './../providers/constants';
import * as moment from 'moment';
import * as request from 'requestretry';
import { RoomInfo,SearchHotel } from '../providers/book-service';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { ValueGlobal } from './../providers/book-service';
import { ConfirmemailPage } from '../confirmemail/confirmemail.page';
@Component({
  selector: 'app-foodadddetail',
  templateUrl: './foodadddetail.page.html',
  styleUrls: ['./foodadddetail.page.scss'],
})
export class FoodadddetailPage implements OnInit {
  _email: any;
  // validemail: boolean= true;
  auth_token: any = '';
  hoten; phone = "";
  companyname; address=""; tax; addressorder;
  ischeck: boolean; ishide; note = "";
  ischeckedit = true;
  arrCity = [];
  arrDistrict= [];
  arrWard = [];
  textcity = "Hồ Chí Minh";
  textdist = "Quận/Huyện";
  textward = "Phường/Xã";
  ischeckcity = 0;
  ischeckdist = 0;
  ischeckward = 0;
  shipaddress = ''; Province=1; District; Ward;
  cusaddress; totalPrice; installmentPriceStr;Invoice;memberid;
  public loader: any;ischecklogin=true;Repeat=false;
  isDinner=false;isFood=false;texttimeFood="";texttimeDinner="";
  actionSheetDistrict: HTMLIonActionSheetElement;
  actionSheetWard: HTMLIonActionSheetElement;paymentType;checkchangeemail=false;
  ishideNameMail=true;hotenhddt;emailhddt
  constructor(public actionSheetController: ActionSheetController, public navCtrl: NavController, public storage: Storage, public zone: NgZone, public gf: GlobalFunction,
    public _foodService: foodService, public modalCtrl: ModalController, public router: Router, public valueGlobal: ValueGlobal, public loadingCtrl: LoadingController,private activityService: ActivityService,private toastCtrl: ToastController
    ,public Roomif: RoomInfo, public searchhotel: SearchHotel,public alertCtrl: AlertController) {
    setTimeout(()=>{
      $(".homefood-header").removeClass("cls-visible").addClass("cls-disabled");
      if(document.getElementsByClassName("homefood-footer")[1]){
        document.getElementsByClassName("homefood-footer")[0]['style'].display ='none';
        document.getElementsByClassName("homefood-footer")[1]['style'].display ='none';
      }
    },200)
  }
  getInfo()
  {
    this.storage.get('infocus').then(infocus => {
      if (infocus) {
        if (infocus.ho && infocus.ten) {
          this.hoten = infocus.ho + ' ' + infocus.ten;
        } else {
          if (infocus.ho) {
            this.hoten = infocus.ho;
          }
          else if (infocus.ten) {
            this.hoten = infocus.ten;
          }
        }
        if (infocus.phone) {
          this.phone = infocus.phone;
        } else {
          this.ischeckedit = false;
        }
      }
      else {
        this.ischeckedit = false;
      }
    })
  
    this.storage.get('email').then(email => {
      if (email) {
        this._email = email;
      }
    })
    this.storage.get('jti').then((uid: any) => {
      if (uid) {
        this.memberid = uid;
        this.ischecklogin=true;
      }
      else{
        this.ischecklogin=false;
      }
      this.getAddress();
    })
    this.storage.get('Invoice').then((Invoice: any) => {
      if (Invoice) {
        this.ischeck = true;
      }
      else{
        this.ischeck = false;
      }
    })
    this.storage.get('Repeat').then((Repeat: any) => {
      if (Repeat) {
        this.Repeat = Repeat;
      }
      else{
        this.Repeat=false;
      }
    })
    this.totalPrice = this._foodService.totalPrice
    this.zone.run(() => {
      let priceinstallment = Math.round(this.totalPrice * 1 / 12 * 1.05);
      this.installmentPriceStr = priceinstallment.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.").replace(/\,/g, '.') + "đ/tháng";
    })
  }
  getAddress() {
    var se = this;
    let url = C.urls.baseUrl.urlFood + "/api/FOAdmin/GetData";
    this.gf.RequestApi("GET", url, {}, {}, "", "").then((data) => {
      se.arrCity=[];
      se.arrDistrict=[];
      se.arrWard=[];
      for (let i = 0; i < data.length; i++) {
        if (data[i].levelId == 1&&data[i].status == 1) {
          se.arrCity.push(data[i]);
        }
        if (data[i].levelId == 2&&data[i].status == 1) {
          se.arrDistrict.push(data[i]);
        }
        if (data[i].levelId == 3&&data[i].status == 1) {
          se.arrWard.push(data[i]);
        }
      }
      se.sortDist();
      if (this.searchhotel.backPage && this.searchhotel.backPage=='foodpaymentselect') {
        this.storage.get('shipaddress').then(shipaddress => {
          if (shipaddress) {
            this.cusaddress = shipaddress.address + ', ' + shipaddress.ward.name + ', ' + shipaddress.district.name + ', ' + shipaddress.province.name;
            this.shipaddress = shipaddress.address;
            this.Ward = shipaddress.ward.id;
            this.District = shipaddress.district.id;
            this.Province = shipaddress.province.id;
            this.textward = shipaddress.ward.name;
            this.textdist = shipaddress.district.name;
            this.textcity = shipaddress.province.name;
            this.ischeckcity = 1;
            this.ischeckdist = 1;
            this.ischeckward = 1;
          }
          else {
            this.ischeckedit = false
          }
        })
        this.storage.get('order').then(order => {
          if (order) {
            this.companyname = order.companyname;
            this.address = order.address;
            this.tax = order.tax;
            this.addressorder = order.addressorder;
            this.hotenhddt=order.hotenhddt;
            this.emailhddt=order.emailhddt;
            this.ishideNameMail=order.ishideNameMail;
            this.ishide = true;
            this.ischeck = true;
          } else {
            this.ishide = false;
            this.ischeck = false;
          }
        })
      } else {
        se.GetLastBookingByMember()
      }
    })

  }
  GetLastBookingByMember()
  {
    var se=this;
    var options = {
      'method': 'GET',
      'url': C.urls.baseUrl.urlFood+'/api/FOBooking/GetLastBookingByMember?memberId='+this.memberid+'&phone='+this.phone+'&email='+this._email+'',
      'headers': {
        'token': '584f470f-7a45-4793-a136-0084fadea81c'
      }
    };
    request(options, function (error, response) { 
      if (error) throw new Error(error);
      var json=JSON.parse(response.body)
      if (json.status=="1") {
        se.cusaddress = json.response.fullAddress;
        se.shipaddress = json.response.address;
        se.Ward = json.response.ward;
        se.District = json.response.district;
        se.Province = json.response.province;
        var textadd= se.cusaddress.split(',');
        if (textadd[1]) 
        {
          if (se.Ward==0) {
            se.textward = "Phường/Xã";
            se.ischeckward = 0;
          }
          else{
            se.textward=textadd[1]
          }
        }
        else
        {
          se.textward = "Phường/Xã";
          se.ischeckward = 0;
        }
        if (textadd[2]) {
          if (se.Ward==0) {
            se.textdist = "Quận/Huyện";
            se.ischeckdist = 0;
          }
          else{
            se.textdist=textadd[2]
          }
        }
        else
        {
          se.textdist = "Quận/Huyện";
          se.ischeckdist = 0;
        }
        if (textadd[3]) {
          se.textcity = textadd[3];
        }
        se.ischeckcity = 1;
        se.ischeckdist = 1;
        se.ischeckward = 1;
        se.paymentType=json.response.paymentType;
        //Xuất hóa đơn
        if (json.response.isInvoice) {
          se.companyname =json.response.companyName;
          se.address =json.response.companyAddress;
          se.tax =json.response.companyTaxCode;
          se.addressorder = json.response.billingAddress;
          se.ishide = true;
          se.ischeck = true;
        } else {
          se.ishide = false;
          se.ischeck = false;
        }
      }
      else{
        se.ischeckedit = false
      }
      
    });
  }
  sortDist()
  {
    this.arrDistrict.sort(function (a, b) {
      var nameA = a.name.toUpperCase(); // bỏ qua hoa thường
      var nameB = b.name.toUpperCase(); // bỏ qua hoa thường
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // name trùng nhau
      return 0;
    });
  }
  ngOnInit() {
  }
  edit(co) {
    this.zone.run(() => {
      if (co == 0) {
        if (this.ischeck) {
          this.ishide = false;
        } else {
          this.ishide = true;
        }
      }
      else {
        this.ishide = false;
        this.ischeck = true;
      }
    })

  }
  goback() {

    if(this.actionSheetDistrict){
      this.actionSheetDistrict.dismiss();
    }
    if(this.actionSheetWard){
      this.actionSheetWard.dismiss();
    }
    // if(this._foodService.isDinner){
    //   this.valueGlobal.backValue = "foodadddetail";
    //   this.navCtrl.navigateBack('/fooddinnerdetail');
    // }else{
    //   this.navCtrl.navigateBack('/foodbill');
    // }
    this.navCtrl.navigateBack('/foodbill');
  }
  installment() {
    var se = this;
    if (!se.checkInput(1)) {
      return;
    }
    if(!se.validateEmail(se._email) || !se.gf.checkUnicodeCharactor(se._email)){
      se.gf.showToastWarning('email không hợp lệ. Vui lòng kiểm tra lại');
      return;
    }
    let checkappleemail=(se._email.includes("appleid") || se._email.includes('vivumember.info'));
    if (!checkappleemail) {
      se.getInstallment(se.totalPrice * 1);
    }else{
      se.showConfirmEmail(2);
    }
  }
  async presentToastWarning(msg) {
    let toast = await this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });

    toast.present();
  }
  next() {
    if (!this.checkInput(0)) {
      return;
    }
    if(!this.validateEmail(this._email) || !this.gf.checkUnicodeCharactor(this._email)){
      this.gf.showToastWarning('email không hợp lệ. Vui lòng kiểm tra lại');
      return;
    }
    if (!this.checkchangeemail) {
      if (this.paymentType) {
        if(this.paymentType==1) {
           this.navCtrl.navigateForward('foodpaymentchoosebank');
         }
         else{
           this.navCtrl.navigateForward('foodpaymentselect');
         }
       }
       else
       {
         this.navCtrl.navigateForward('foodpaymentselect');
       }
    }
     
    
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //var re = /^[a-zA-Z\-0-9][a-zA-Z\-0-9_]+(\.[a-zA-Z\-0-9][a-zA-Z\-0-9]+)@[a-z0-9]{2,}(\.[a-z0-9]{2,}){2,}$/;
    //var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@[a-z0-9]{2,}(\.[a-z0-9]{2,}){1,}$/;
    return re.test(String(email).toLowerCase());
    //return this.gf.checkUnicodeCharactor(email);
  }
  change() {
    this.zone.run(() => {
      this.ischeckedit = false;
      this.Province = 1;
      this.textdist = "Quận/Huyện";
      this.textward = "Phường/Xã";
      this.ischeckdist = 0;
      this.ischeckward = 0;
      this.Ward = "";
      this.District = "";
      this.textcity = "Hồ Chí Minh";
    })
  }
  ionViewWillEnter() {
    this.ischeckedit = true;
    for (let i = 0; i < this._foodService.listItemsCart.length; i++) {
      const element = this._foodService.listItemsCart[i];
      if (element.isDinner) {
        this.isDinner=true;
      }
      else{
        this.isFood=true;
      }
      
    }
    this.funcshipTime();
    this.getInfo();

  }
  async presentActionSheetCity() {
    var arrbtnCity = [];
    for (let i = 0; i < this.arrCity.length; i++) {
      var item = {
        text: this.arrCity[i].name, handler: () => {
          this.clickCity(this.arrCity[i]);
        }
      }
      arrbtnCity.push(item);
    }
    const actionSheet = await this.actionSheetController.create({
      header: 'Tỉnh / Thành phố',
      buttons: arrbtnCity,
    });
    await actionSheet.present();
  }
  async presentActionSheetDistrict() {
    // if (this.ischeckcity!=1) {
    //   alert("Vui lòng chọn Tỉnh/Thành phố");
    //   return;
    // }

    var arrbtnDist = [];
    for (let i = 0; i < this.arrDistrict.length; i++) {
      if (this.arrDistrict[i].parentId == this.Province) {
        var item = {
          text: this.arrDistrict[i].name, handler: () => {
            this.clickDist(this.arrDistrict[i]);
          }
        }
        arrbtnDist.push(item);
      }
    }
    this.actionSheetDistrict = await this.actionSheetController.create({
      header: 'Quận/Huyện',
      buttons: arrbtnDist,
      cssClass:'cssdistrict',
    });
    await this.actionSheetDistrict.present();
  }
  async presentActionSheetWard() {
    // if (this.ischeckcity!=1) {
    //   alert("Vui lòng chọn Tỉnh/Thành phố");
    //   return;
    // }
    if (this.ischeckdist!=1) {
      alert("Vui lòng chọn Quận/Huyện");
      return;
    }
    var arrbtnWard = [];
    for (let i = 0; i < this.arrWard.length; i++) {
      if (this.arrWard[i].parentId==this.District) {
        var item = {
          text: this.arrWard[i].name, handler: () => {
            this.clickWard(this.arrWard[i]);
          }
        }
        arrbtnWard.push(item);
      }
    }
    this.actionSheetWard = await this.actionSheetController.create({
      header: 'Phường/Xã',
      buttons: arrbtnWard,
      cssClass:'cssdistrict'
    });
    await this.actionSheetWard.present();
  }
  clickCity(arr) {
    this.ischeckcity = 1;
    this.textcity = arr.name;
    this.Province = arr.id;
    this.District = "";
    this.textdist = "Quận/Huyện";
    this.ischeckdist = 0;
    this.Ward = "";
    this.textward = "Phường/Xã";
    this.ischeckward = 0;
  }
  clickDist(arr) {
      this.ischeckdist = 1;
      this.textdist = arr.name;
      this.District = arr.id;
      this.Ward="";
      this.textward="Phường/Xã";
      this.ischeckward = 0;
  }
  clickWard(arr) {
    this.ischeckward = 1;
    this.textward = arr.name;
    this.Ward = arr.id
  }
  phonenumber(inputtxt) {
    var n = Number(inputtxt);
    if (n) {
      var test1 = inputtxt.length;
      if (inputtxt) {
        if (test1 == 10) {
          return true;
        }
        else {
          return false;
        }
      }
      else {
        return false;
      }
    }
    else {
      return false;
    }
  }
  getInstallment(price) {
    var se = this;
    this.presentLoading();
    var options = {
      method: 'GET',
      url: C.urls.baseUrl.urlContracting + '/api/toolsapi/getInstallmentInfo',
      qs:
      {
        amount: price.toString()
      },
      headers:
        {}
    };

    request(options, function (error, response, body) {
      var rs = JSON.parse(body);
      se.activityService.objBankInStallment = rs;
      se.Roomif.email=se._email;
      se.Roomif.hoten=se.hoten;
      se.Roomif.phone=se.phone;
      if (se.loader) {
        se.loader.dismiss();
      }
      se.navCtrl.navigateForward('/foodinstallment');
    });
  }
  checkInput(value)
  {
    this.checkchangeemail=false;
    this.hoten = this.hoten ? this.hoten.trim() : '';
    this._email = this._email ? this._email.trim() : '';
    this.address = this.address ? this.address.trim() : '';
    if (this._foodService.listItemsCart.length == 0) {
          return false;
    }
    // if(!this._foodService.isDinner){
    //   if (this._foodService.listItemsCart.length == 0) {
    //     return false;
    //   }
    // }else{//Bua toi
    //   if (this._foodService.listDinnerItemsCart.length == 0) {
    //     return false;
    //   }
    // }

    if (this._foodService.listItemsCart.length == 0) {
          return false;
        }
    if (!this.hoten) {
      alert("Xin vui lòng nhập họ tên");
      return false;
    }
    if (!this.phone || !this.phonenumber(this.phone)) {
      alert("Số điện thoại không hợp lệ. Xin vui lòng nhập lại.");
      return false;
    }
    if (!this._email) {
      alert("Xin vui lòng nhập email");
      return false;
    }
    if (!this.Province) {
      alert("Xin vui lòng chọn Tỉnh/ Thành phó giao hàng");
      return false;
    }
    else
    {
      if (this.Province!=1) {
        alert("Dịch vụ bữa trưa chỉ hoạt động ở Hồ Chí Minh");
        this.searchhotel.backPage="foodbill";
        this.navCtrl.navigateBack('/app/tabs/tab1');
        return false;
      }
    }
    if (!this.District) {
      alert("Xin vui lòng chọn Quận/ Huyện giao hàng");
      return false;
    }
    if (!this.Ward) {
      alert("Xin vui lòng chọn Xã/ Phường giao hàng");
      return false;
    }
    if (!this.shipaddress) {
      alert("Xin vui lòng nhập địa chỉ giao hàng");
      return false;
    }
    if (this.ischeck) {
      if (this.companyname && this.address && this.tax) {
        this.Invoice = true;
        this.addressorder = this._email;
        this.Roomif.nameOrder = this.hoten;
        if (!this.ishideNameMail ) {
          if (this.emailhddt && this.hotenhddt) {
            if(!this.validateEmail(this.emailhddt) || !this.gf.checkUnicodeCharactor(this.emailhddt)){
              this.gf.showToastWarning('email xuất hóa đơn không hợp lệ. Vui lòng kiểm tra lại');
              return;
            }
            else{
              this.addressorder = this.emailhddt;
              this.Roomif.nameOrder = this.hotenhddt;
            }
          }
          else{
            alert("Xin vui lòng nhập đầy đủ thông tin xuất hóa đơn");
            return false;
          }
        } 
        this.storage.set("Invoice", true);
        var order1 = { companyname: this.companyname, address: this.address, tax: this.tax, addressorder: this.addressorder,ishideNameMail: this.ishideNameMail,hotenhddt:this.hotenhddt,emailhddt:this.emailhddt}
        this.storage.set("order", order1);
      }
      else {
        alert("Xin vui lòng nhập đầy đủ thông tin xuất hóa đơn");
        return false;
      }
    }
    else {
      this.Invoice = false;
      this.storage.set("Invoice", false);
      this.companyname = "";
      this.address = "";
      this.tax = "";
      this.addressorder = "";
    }
    if (this._email) {
      var checkappleemail=(this._email.includes("appleid") || this._email.includes('vivumember.info'));
      if (checkappleemail && value == 0) {
        this.checkchangeemail=true;
        this.showConfirmEmail(value);
      }
    }
    var currentdate = new Date();
    var currentdate1 = moment(currentdate).format();
    var dataBooking;
    // if(!this._foodService.isDinner){
    //   dataBooking = this._foodService.listItemsCart;
    // }else{
    //   dataBooking = this._foodService.listDinnerItemsCart;
    // }
    dataBooking = this._foodService.listItemsCart;
    var FobookingDetail = [];
    for (let i = 0; i < dataBooking.length; i++) {
      var arrExtra = [];
      if (dataBooking[i].itemExtraOther && dataBooking[i].itemExtraOther.length > 0) {
        dataBooking[i].itemExtraOther.forEach(element => {
          arrExtra.push(element);
        });
      }
      if (dataBooking[i].itemExtraWater && dataBooking[i].itemExtraWater.length > 0) {
        //arrExtra.push(dataBooking[i].itemExtraWater);
        dataBooking[i].itemExtraWater.forEach(element => {
          arrExtra.push(element);
        });
      }
      var Extra = "";
      if (arrExtra.length > 0) {
        Extra = JSON.stringify(arrExtra);
      }else{
        Extra = "[]";
      }
      //debugger
      var item = { ComboId: dataBooking[i].focomboPeriod.comboId, Name:dataBooking[i].focomboPeriod.name , Quantity: dataBooking[i].quantity, Extra: Extra,ItemPrice: dataBooking[i].focategory.totalPriceItem, applyFor: dataBooking[i].applyFor, pricePerDay: dataBooking[i].focategory.pricePerDay, startDate: dataBooking[i].startDate, endDate: dataBooking[i].endDate };
      // if(!this._foodService.isDinner){
      //   item = { ComboId: dataBooking[i].focomboPeriod.comboId, Name:dataBooking[i].focomboPeriod.name , Quantity: dataBooking[i].quantity, Extra: Extra,ItemPrice: dataBooking[i].totalPriceItem, applyFor: dataBooking[i].applyFor, pricePerDay: dataBooking[i].focategory.pricePerDay, startDate: dataBooking[i].focategory.startDate, endDate: dataBooking[i].focategory.endDate };
      // }else{
      //   item = { ComboId: dataBooking[i].focomboPeriod.comboId, Name:dataBooking[i].focomboPeriod.name , Quantity: dataBooking[i].quantity, Extra: Extra,ItemPrice: dataBooking[i].itemPrice };
      // }
      FobookingDetail.push(item);
    }
    //let minstartdate = Math.min(FobookingDetail.map(o => o.startDate.replace("-","")) );
    let arrmindate = FobookingDetail.map((md) =>  {return moment(md.startDate).format('YYYY-MM-DD') });
    let arrmaxdate = FobookingDetail.map((md) =>  {return moment(md.endDate).format('YYYY-MM-DD') });
    let mindate = arrmindate.sort()[0],
        maxdate = arrmaxdate.sort()[arrmaxdate.length -1];
    //thêm giờ giao hàng
    if (this.isFood && this.isDinner) {
      this.note=this.texttimeFood + " | " + this.texttimeDinner;
    } else {
      if (this.isFood) {
        this.note=this.texttimeFood;
      } else if (this.isDinner) {
        this.note=this.texttimeDinner;
      }
    }
    var bookingObject = {
      CustomerName: this.hoten,
      CustomerPhone: this.phone,
      CustomerEmail: this._email,
      Province: this.Province,
      District: this.District,
      Ward: this.Ward,
      Address: this.shipaddress,
      TotalPrice: this._foodService.totalPrice,
      Note: this.note,
      BookingDate: currentdate1,
      // StartDate: (!this._foodService.isDinner) ? this._foodService.listItemsCart[0].focomboPeriod.startDate : this._foodService.listDinnerItemsCart[0].focomboPeriod.startDate,
      // EndDate: (!this._foodService.isDinner) ? this._foodService.listItemsCart[0].focomboPeriod.endDate : this._foodService.listDinnerItemsCart[0].focomboPeriod.endDate,
      StartDate: mindate,
      EndDate: maxdate,
      Source: 6,
      FobookingDetail: FobookingDetail,
      IsInvoice: this.Invoice,
      CompanyName: this.companyname,
      CompanyAddress: this.address,
      CompanyTaxCode: this.tax,
      BillingAddress: this.addressorder,
      companycontactname: this.Roomif.nameOrder,
      MemberId:this.memberid,
      Status: 2,
      Repeat:this.Repeat
    }
    this._foodService.objBooking = bookingObject;
    var itemward = { id: this.Ward, name: this.textward }
    var itemwdist = { id: this.District, name: this.textdist }
    var itempro = { id: this.Province, name: this.textcity }
    var cusadd = { address: this.shipaddress, ward: itemward, district: itemwdist, province: itempro }
    this.storage.set("shipaddress", cusadd);
    var info;
    var textfullname = this.hoten.split(' ')
    if (textfullname.length > 2) {
      let name = '';
      for (let i = 1; i < textfullname.length; i++) {
        if (i == 1) {
          name += textfullname[i];
        } else {
          name += ' ' + textfullname[i];
        }
      }
      info = { ho: textfullname[0], ten: name, phone: this.phone }
    } else if (textfullname.length > 1) {
      info = { ho: textfullname[0], ten: textfullname[1], phone: this.phone }
    }
    else if (textfullname.length == 1) {
      info = { ho: textfullname[0], ten: "", phone: this.phone }
    }
    this.storage.set("infocus", info);
    this.storage.set("email", this._email);
    this.storage.set("Repeat", this.Repeat);
    return true
  }
  async changeplace() {
    this._foodService.ischeckchangeplace="0";
    const modal: HTMLIonModalElement =
      await this.modalCtrl.create({
        component: FoodplaceotherPage,
      });
    modal.present();
    modal.onDidDismiss().then((data: OverlayEventDetail) => {
      this.navCtrl.navigateForward(['/app/tabs/tab1']);
    })
  }
  async presentLoading() {
    this.loader = await this.loadingCtrl.create({
    });
    this.loader.present();
  }
  goToLogin() {
    this.storage.get('auth_token').then(auth_token => {
      if (!auth_token) {
        this.valueGlobal.logingoback = 'foodadddetail';
        this.router.navigateByUrl('/login');
      }
    });
  }
  public async showConfirmEmail(value){
    let alert = await this.alertCtrl.create({
      message: "Vui lòng cập nhật địa chỉ email để đảm bảo quý khách nhận được thông tin booking từ iVIVU!",
      cssClass: "cls-alert-showmore",
      buttons: [
        {
        text: 'Đổi email',
        role: 'OK',
        handler: () => {
          this.showChangeEmail(value);
        }
      }
    ]
  });
  alert.present();
}

async showChangeEmail(value){
  var se = this;
  const modal: HTMLIonModalElement =
          await this.modalCtrl.create({
            component: ConfirmemailPage,
            componentProps: {
              aParameter: true,
            }
          });
        modal.present();
      
        modal.onDidDismiss().then((data: OverlayEventDetail) => {
          if(data && data.data && data.data.email){
            if(data.data.email){
              se.storage.remove("email");
              se.storage.set("email", data.data.email);
              se.storage.set("saveemail", data.data.email);
              se._email = data.data.email;
              if(se._foodService.objBooking){
                se._foodService.objBooking.CustomerEmail = data.data.email;
              }

              if (value==0) {
                if (se.paymentType) {
                  if(se.paymentType==1) {
                     se.navCtrl.navigateForward('foodpaymentchoosebank');
                   }
                   else{
                     se.navCtrl.navigateForward('foodpaymentselect');
                   }
                 }
                 else
                 {
                   se.navCtrl.navigateForward('foodpaymentselect');
                 }
              }
              else
              {
                se.getInstallment(se.totalPrice * 1);
              }
            }
          }
          
         
        })
}
//thêm giờ giao hàng
funcshipTime(){
  this.storage.get('timeShip').then(timeShip => {
    if (timeShip) {
      if (timeShip.food) {
        this.texttimeFood = timeShip.food;
      }
      else{
        this.texttimeFood = "11h15 - 11h30";
      }
      if (timeShip.dinner) {
        this.texttimeDinner = timeShip.dinner;
      }
      else{
        this.texttimeDinner = "16h00 - 16h30";
      }
    }
    else{
      this.texttimeFood = "11h15 - 11h30";
      this.texttimeDinner = "16h00 - 16h30";
      // if (this.isDinner && this.isFood) {
      //   this.note="Giao bữa trưa: 11h30 - 12h00 | Giao bữa tối: 16h30 - 17h00";
      // } 
      // else{
      //   if (this.isDinner) {
      //     this.note="Giao bữa tối: 16h30 - 17h00";
      //   }
      //   else if(this.isFood){
      //     this.note="Giao bữa trưa: 11h15 - 11h30";
      //   }
      // }
    }
  })
}
clickTime(time,stt){
  //0:bữa trưa | 1: bữa tối
  if (stt==0) {
    this.texttimeFood="";
    this.texttimeFood=time;
  }
  else{
    this.texttimeDinner="";
    this.texttimeDinner=time;
  }
}
showNameMail(ev)
{
  this.ishideNameMail=ev.detail.checked;
}
}
