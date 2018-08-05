import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { KirimKeluhanPage } from "../kirim-keluhan/kirim-keluhan";

/**
 * Generated class for the DetailPelayananPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-pelayanan',
  templateUrl: 'detail-pelayanan.html',
})
export class DetailPelayananPage {

  constructor(public nav: NavController, public navParams: NavParams) {
  }
  kirimKeluhan(){
  		this.nav.push(KirimKeluhanPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPelayananPage');
  }

}
