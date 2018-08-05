import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home"; 
import {TripsPage} from "../trips/trips";
import {KeluhanSayaPage} from "../keluhan-saya/keluhan-saya"; 
import {MonitoringStakeholderPage} from "../monitoring-stakeholder/monitoring-stakeholder"; 
import {AkunSayaPage} from "../akun-saya/akun-saya"; 
/**
 * Generated class for the BerandaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-beranda',
  templateUrl: 'beranda.html',
})
export class BerandaPage {

	  tab1RootHome = HomePage;
      tab2RootKeluhanSaya = KeluhanSayaPage;
      tab3RootMonitoring = MonitoringStakeholderPage;
      tab4RootAkun = AkunSayaPage;

  constructor(public nav: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BerandaPage');
  }

}
