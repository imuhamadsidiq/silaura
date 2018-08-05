import {Component} from "@angular/core";
import {NavController,ToastController,AlertController} from "ionic-angular";
import {LoginPage} from "../login/login";
import {HomePage} from "../home/home";


@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  constructor(public nav: NavController,public toastCtrl: ToastController,public alertCtrl: AlertController) {
  }

  // register and go to home page
  register() {
    this.nav.setRoot(HomePage);
  }

  // go to login page
  login() {
    this.nav.setRoot(LoginPage);
  }

  terms(){
      let forgot = this.alertCtrl.create({
      title: 'Terms & Condition',
      message: "Donec non feugiat felis, in suscipit justo. Fusce mauris purus, consectetur vitae tellus quis, dictum facilisis lacus. Sed est diam, pharetra eget risus rhoncus, blandit pharetra elit. Suspendisse auctor malesuada varius. Proin lorem lorem, gravida maximus nisl eget, tristique mattis nisl. In hac habitasse platea dictumst. Sed in velit vel nisi mollis aliquet. Quisque ultrices augue quis justo sodales aliquet. Proin sed urna rhoncus, lacinia dolor at, mollis neque. Praesent interdum a lectus vitae elementum. Nullam gravida vitae erat sit amet accumsan. Ut pharetra ligula nec metus luctus laoreet. Cras et urna pretium quam ornare fringilla. Suspendisse potenti.",
      
      buttons: [
        {
          text: 'Close',
          handler: data => {
            console.log('Cancel clicked');
          }
        } 
      ]
    });
    forgot.present();

  }
}
