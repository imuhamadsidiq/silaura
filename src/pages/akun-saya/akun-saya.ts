import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InboxPage } from "../inbox/inbox";
import { ChangeProfilePage } from "../change-profile/change-profile";
import { ChangePasswordPage } from "../change-password/change-password";
import { DetailPelayananPage} from "../detail-pelayanan/detail-pelayanan";
import { LoginPage} from "../login/login";
/**
 * Generated class for the AkunSayaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-akun-saya',
  templateUrl: 'akun-saya.html',
})
export class AkunSayaPage {

  constructor(public nav: NavController, public navParams: NavParams) {
  }

  inbox(){
  	this.nav.push(InboxPage);
  }

   changeProfile(){
  	this.nav.push(ChangeProfilePage);
  }

   changePassword(){
  	this.nav.push(ChangePasswordPage);
  }

   detailPelayanan(){
  	this.nav.push(DetailPelayananPage);
  }

    logOut(){
  	this.nav.push(LoginPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AkunSayaPage');
  }

}
