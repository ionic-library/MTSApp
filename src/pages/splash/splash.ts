import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Lang, User, LangCodes } from '../../providers';
import { SitePages } from '../../pages';

@IonicPage()
@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage {

  constructor(public navCtrl: NavController, public user: User) {

    console.log(this.user.isLangSet);
    if (this.user.isLangSet) {
      console.log("lang is set: " + user.Lang);
    }
  }

  public setEnglish() {
    console.log(this.user.isLangSet);
    //this.user.setLang(LangCodes.EN);
   // this.navCtrl.push(SitePages.Home);
  }

  ionViewDidLoad() {
    console.log(this.user.isLangSet);
    //console.log('ionViewDidLoad SplashPage');
  }

}
