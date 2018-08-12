import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChangePasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-change-password',
  templateUrl: 'change-password.html',
})
export class ChangePasswordPage {
	
	public type_pass_lama = 'password';
	public type_pass_baru = 'password';
	public type_pass_confirm = 'password';
  	public showPass 		= false;
  	public showPassBaru 	= false;
  	public showPassConfirm 	= false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

   showPassword() {
    this.showPass = !this.showPass; 
    
 
    if(this.showPass){
      this.type_pass_lama = 'text';
    } else {
      this.type_pass_lama = 'password';
    }
 
  } 

  showPasswordBaru() { 
     this.showPassBaru = !this.showPassBaru; 
 
 
    if(this.showPassBaru){
      this.type_pass_baru = 'text';
    } else {
      this.type_pass_baru = 'password';
    }
 
  } 

    
  showPasswordConfirm() { 
     this.showPassConfirm = !this.showPassConfirm;
 
 
    if(this.showPassConfirm){
      this.type_pass_confirm = 'text';
    } else {
      this.type_pass_confirm = 'password';
    }
 
  } 

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangePasswordPage');
  }

}
