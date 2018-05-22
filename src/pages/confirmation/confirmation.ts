import { HomePage } from './../home/home';
import { SitePages } from '..';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-confirmation',
  templateUrl: 'confirmation.html'
})
export class ConfirmationPage {

  constructor(private navCtrl: NavController) { }

  navigateHome = () => this.navCtrl.push(SitePages.Home);

  ionViewDidLoad = () => console.log("Loadded ConfirmationPage");

}
