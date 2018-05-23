import { SinValidator } from './../../validators/sin';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  login : FormGroup;
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
  submitAttempt : boolean;

  constructor( public navCtrl: NavController,
               public user: User,
               public toastCtrl: ToastController,
               public translateService: TranslateService,
               public provinces: ProvincesProvider,
               private formBuilder: FormBuilder ) {

    this.login = this.formBuilder.group({
      "sin" : ['', Validators.compose([Validators.required, Validators.minLength(9), SinValidator.isValid])],
      "accessCode" : ['', Validators.required],
      "provinceOfResidence" : ['', Validators.required]
    });

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })

    this.submitAttempt = false;
  }

  showError(str : string) : boolean {
    return !this.login.controls[str].valid && (this.login.controls[str].dirty || this.submitAttempt);
  }

  // Attempt to login in through our User service
  doLogin() {
    this.submitAttempt = true;
    if (!this.login.valid){
      let toast = this.toastCtrl.create({
        message: 'You Suck',
        duration: 3000,
        position: 'top'
      })
      toast.present();
      return;
    }


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
