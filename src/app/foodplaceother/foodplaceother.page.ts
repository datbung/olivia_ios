import { foodService } from './../providers/foodService';
import { GlobalFunction } from './../providers/globalfunction';
import { SearchHotel } from './../providers/book-service';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ModalController, NavController, ActionSheetController } from '@ionic/angular';
import { C } from './../providers/constants';
import * as moment from 'moment';
@Component({
  selector: 'app-foodplaceother',
  templateUrl: './foodplaceother.page.html',
  styleUrls: ['./foodplaceother.page.scss'],
})
export class FoodplaceotherPage implements OnInit {
  _email: any;
  hoten;phone = "";
  Province=1; District;
  arrCity = [];
  arrDistrict = [];
  textcity = "Hồ Chí Minh";
  textdist = "Quận/Huyện";
  ischeckcity = 0;
  ischeckdist = 0;
  address="";
  constructor(public storage: Storage,public actionSheetController: ActionSheetController,
    public modalCtrl:ModalController,private searchhotel:SearchHotel,
    private navCtrl:NavController, public gf: GlobalFunction,public _foodService:foodService) { 
    console.log("test");
      this.storage.get('infocus').then(infocus => {
      if (infocus) {
        if (infocus.ho&&infocus.ten) {
          this.hoten = infocus.ho+' '+infocus.ten;
        } else {
          if (infocus.ho) {
            this.hoten=infocus.ho;
          }
          else if (infocus.ten) {
            this.hoten=infocus.ten;
          }
        }
        this.phone = infocus.phone;
      }
    })
    //this.getAddress();
  }

  ngOnInit() {
  }
  closeModal()
  {
    if (this._foodService.ischeckchangeplace=="1") {
      this._foodService.listItemsCartrequest=[];
      this._foodService.totalPrice=0;
    }
    this.modalCtrl.dismiss();
  }
  ionViewWillEnter(){
    this.storage.get('email').then(email => {
      if(email){
        this._email = email;
      }
    })
  }
  sendRequest()
  {
    if (!this.checkInput()) {
      return;
    }
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
  presentActionSheetDistrict()
  async presentActionSheetDistrict() {
    var arrbtnDist = [];
    for (let i = 0; i < this.arrDistrict.length; i++) {
      var item = {
        text: this.arrDistrict[i].name, handler: () => {
          this.clickDist(this.arrDistrict[i]);
        }
      }
      arrbtnDist.push(item);
    }
    const actionSheet = await this.actionSheetController.create({
      header: 'Quận/Huyện',
      buttons: arrbtnDist,
    });
    await actionSheet.present();
  }
  clickCity(arr) {
    this.ischeckcity = 1;
    this.textcity = arr.name;
    this.Province = arr.id
  }
  clickDist(arr) {
    this.ischeckdist = 1;
    this.textdist = arr.name;
    this.District = arr.id
  }
  getAddress() {
    var se = this;
    let url = C.urls.baseUrl.urlFood + "/api/FOAdmin/GetData";
    this.gf.RequestApi("GET", url, {}, {}, "", "").then((data) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].levelId == 1) {
          se.arrCity.push(data[i]);
        }
        if (data[i].levelId == 2) {
          se.arrDistrict.push(data[i]);
        }
      }
    })
  }
  checkInput()
  {
    this.hoten = this.hoten.trim();
    this._email = this._email.trim();
    this.address = this.address.trim();
    if (this._foodService.ischeckchangeplace=="1") {
      if (this._foodService.listItemsCartrequest.length == 0) {
        return false;
      }
    }
    else{
      if (!this._foodService.isDinner) {
        if (this._foodService.listItemsCart.length == 0) {
          return false;
        }
      } else {
        if (this._foodService.listDinnerItemsCart.length == 0) {
          return false;
        }
      }
     
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
    if (!this.address) {
      alert("Xin vui lòng nhập địa chỉ giao hàng");
      return false;
    }
    var dataBooking
    if (this._foodService.ischeckchangeplace=="1") {
      dataBooking  = this._foodService.listItemsCartrequest;
    } else {
      if (!this._foodService.isDinner) {
        dataBooking  = this._foodService.listItemsCart;
      } else {
        dataBooking  = this._foodService.listDinnerItemsCart;
      }
    }
  
    var FobookingDetail = [];
    var FobookingDetailBook = [];
    for (let i = 0; i < dataBooking.length; i++) {
      var item = { tenMon: dataBooking[i].focategory.name, typePriceID:dataBooking[i].focategory.typePriceId , soLuong: dataBooking[i].quantity, monThem: dataBooking[i].extraDisplay,giaMon: dataBooking[i].itemPrice };
      FobookingDetail.push(item);
    }
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
      var ExtraBook = "";
      if (arrExtra.length > 0) {
        ExtraBook = JSON.stringify(arrExtra);
      } else {
        ExtraBook = "[]";
      }
      var itembook = { ComboId: dataBooking[i].focomboPeriod.comboId, Name: dataBooking[i].focomboPeriod.name, Quantity: dataBooking[i].quantity, Extra: ExtraBook, ItemPrice: dataBooking[i].itemPrice };
      FobookingDetailBook.push(itembook);
    }
    var startDate;
    var endDate;
    if (this._foodService.ischeckchangeplace=="1") {
      startDate  = this._foodService.listItemsCartrequest[0].focomboPeriod.startDate;
      endDate  = this._foodService.listItemsCartrequest[0].focomboPeriod.endDate;
    } else {
      if(!this._foodService.isDinner){
        startDate  = this._foodService.listItemsCart[0].focomboPeriod.startDate;
        endDate  = this._foodService.listItemsCart[0].focomboPeriod.endDate;
      }else{
        startDate  = this._foodService.listDinnerItemsCart[0].focomboPeriod.startDate;
        endDate  = this._foodService.listDinnerItemsCart[0].focomboPeriod.endDate;
      }
  
    }
    var currentdate = new Date();
    var currentdate1 = moment(currentdate).format();
    var bookingObject = {
      tenKhachHang: this.hoten,
      dienThoai: this.phone,
      email: this._email,
      diaChi: this.address,
      tenCombo: "Gói bữa ăn Tuần "+moment(startDate).format("DD/MM")+" - "+moment(endDate).format("DD/MM")+"",
      tongGia: this._foodService.totalPrice,
      chiTietMon: FobookingDetail,
      startDate: startDate,
      endDate: endDate
    }
    var bookingObjCreate = {
      CustomerName: this.hoten,
      CustomerPhone: this.phone,
      CustomerEmail: this._email,
      Province: 1,
      District: 0,
      Ward: 0,
      Address:  this.address,
      TotalPrice: this._foodService.totalPrice,
      Note: "",
      BookingDate: currentdate1,
      StartDate: startDate,
      EndDate: endDate,
      Source: 6,
      FobookingDetail: FobookingDetailBook,
      IsInvoice: false,
      CompanyName: "",
      CompanyAddress: "",
      CompanyTaxCode: "",
      BillingAddress: "",
      MemberId: "",
      Status: 1,
      Repeat:false
    }
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
    this.gf.sendRequest(bookingObject).then(data => {
      this.gf.CreateBooking(bookingObjCreate).then(databook => {
        databook = JSON.parse(databook);
        if (databook.status == 1) {
          this.modalCtrl.dismiss();
          this.searchhotel.backPage = "foodplaceotherpage";
          this.storage.remove("listItemsCart");
          this._foodService.countcart=0;
          this._foodService.listItemsCart =[];
          this._foodService.listAddToCart =[];
          this._foodService.listItemsCartrequest=[];
          this._foodService.totalPrice=0;
          this._foodService.itemCartChange.emit(0);
        }
      })
    
    })
    return true
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
  hasWhiteSpace(s) {
    return s.indexOf(' ') >= 0;
  }
}
