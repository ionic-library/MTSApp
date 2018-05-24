import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Lang, User, LangCodes } from '../../providers';

/**
 * Generated class for the SplashPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage {

  constructor(public navCtrl: NavController, public user: User) {
    user.IsLangSet(function success(val) {
      if (val) {
        // User has selected lang. Do lang stuffs.
      } else {
        // Brand new user. Do a pile of new user stuff (register with MTS API) and let user select language.
      }
      console.log(val);

    }, function error() {
      // Error handler. Deal with later, likely do nothing but theoretically this should never happen with an HTML based app since we're in the web view
      console.log('error balls');
    });
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad SplashPage');
  }

}
