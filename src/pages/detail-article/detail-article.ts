import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailPelayananPage } from "../detail-pelayanan/detail-pelayanan";
/**
 * Generated class for the DetailArticlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-article',
  templateUrl: 'detail-article.html',
})
export class DetailArticlePage {

  constructor(public nav: NavController, public navParams: NavParams) {
  }

  detailPelayanan(){ 
  	this.nav.push(DetailPelayananPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailArticlePage');
  }

}
