import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { User, ProvincesProvider} from '../../providers';
import { MainPage } from '../';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { sin: string,
             accesscode: string,
             residence: string } = {
    sin : "",
    accesscode: "",
    residence: "ON"
  };


  // Our translated text strings
  private loginErrorString: string;

  constructor(private navCtrl: NavController,
    private user: User,
    private toastCtrl: ToastController,
    private translateService: TranslateService,
    public provinces: ProvincesProvider) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
  }



  // Attempt to login in through our User service
  doLogin() {
    this.user.login(this.account).subscribe((resp) => {
      this.navCtrl.setRoot(MainPage)
      this.navCtrl.popToRoot();
    }, (err) => {
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: this.loginErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });

  }
}
