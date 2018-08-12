import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,AlertController } from 'ionic-angular';

/**
 * Generated class for the KirimKeluhanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kirim-keluhan',
  templateUrl: 'kirim-keluhan.html',
})
export class KirimKeluhanPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KirimKeluhanPage');
  }

  kirimUsulan(){
  	 let forgot = this.alertCtrl.create({
      title: 'Confirm',
      message: "Kirim Keluhan .",
      
      buttons: [
        {
          text: 'Kirim',
          handler: data => {
            console.log('Cancel clicked');
          }
        } 
      ]
    });
    forgot.present();
  }
}
