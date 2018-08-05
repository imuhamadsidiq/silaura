import {Component} from "@angular/core";
import {NavController, PopoverController} from "ionic-angular";
import {Storage} from '@ionic/storage';

import {NotificationsPage} from "../notifications/notifications";
import {SettingsPage} from "../settings/settings";
import {TripsPage} from "../trips/trips";
import {DetailArticlePage} from "../detail-article/detail-article";
import {SearchLocationPage} from "../search-location/search-location";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  segmentHome: string = "beranda"; 
  // search condition

  searchQuery: string = '';
  items: string[];

  public search = {
    name: "XX",
    date: new Date().toISOString()
  }

  constructor(private storage: Storage, public nav: NavController, public popoverCtrl: PopoverController) {
  }

  onInput(){
      this.initializeItems(); 
  }

  onCancel(){
    this.items=[];
  }

  initializeItems() {
    this.items = [
      'Cakung',
      'Cempaka Putih',
      'Cengkareng',
      'Cilandak',
      'Clincing',
      'Cipayung',
      'Ciracas',
      'Duren Sawit',
      'Senen',
      'Johar Baru',
      'Cawang',
      'Kemayoran'
    ];
}
  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  detailPage(){
    this.nav.push(DetailArticlePage);
  }

  ionViewWillEnter() {
   
  }
 
  presentNotifications(myEvent) {
    console.log(myEvent);
    let popover = this.popoverCtrl.create(NotificationsPage);
    popover.present({
      ev: myEvent
    });
  }

  pageBeranda(){
     console.log("beranda");
      this.nav.push(TripsPage);  
  }

}

//
