import { Component, OnInit,ViewChild } from '@angular/core';
import { Keyboard } from '@ionic-native/keyboard/ngx'
@Component({
  selector: 'app-cooperateverifyotp',
  templateUrl: './cooperateverifyotp.page.html',
  styleUrls: ['./cooperateverifyotp.page.scss'],
})
export class CooperateverifyotpPage implements OnInit {

  @ViewChild('ipOTP1') ipOTP1;
  @ViewChild('ipOTP2') ipOTP2;
  @ViewChild('ipOTP3') ipOTP3;
  @ViewChild('ipOTP4') ipOTP4;
  @ViewChild('ipOTP5') ipOTP5;
  @ViewChild('ipOTP6') ipOTP6;
  num1 = ""; num2 = ""; num3 = ""; num4 = ""; num5 = ""; num6 = "";
  constructor( public keyboard: Keyboard) { }

  ngOnInit() {
  }
  goback(){

  }
  change1() {
    if (this.num1) {
      this.ipOTP2.setFocus();
      this.keyboard.show();
    }
  }
  change2() {
    if (this.num2) {
      this.ipOTP3.setFocus();
      this.keyboard.show();
    }
  }
  change3() {
    if (this.num3) {
      this.ipOTP4.setFocus();
      this.keyboard.show();
    }
  }
  change4() {
    if (this.num4) {
      this.ipOTP5.setFocus();
      this.keyboard.show();
    }
  }
  change5() {
    if (this.num5) {
      this.ipOTP6.setFocus();
      this.keyboard.show();
    }
  }

}
