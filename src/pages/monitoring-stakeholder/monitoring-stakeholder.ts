import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MonitoringDetailPage} from "../monitoring-detail/monitoring-detail"; 
/**
 * Generated class for the MonitoringStakeholderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-monitoring-stakeholder',
  templateUrl: 'monitoring-stakeholder.html',
})
export class MonitoringStakeholderPage {

  constructor(public nav: NavController, public navParams: NavParams) {
  }

  detailMonitoring(){
  	this.nav.push(MonitoringDetailPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MonitoringStakeholderPage');
  }

}
