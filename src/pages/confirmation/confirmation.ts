import { HomePage } from './../home/home';
import { SitePages } from '..';
import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';
import { HelpModalPage } from "../help-modal/help-modal";

@IonicPage()
@Component({
  selector: 'page-confirmation',
  templateUrl: 'confirmation.html'
})
export class ConfirmationPage {

  constructor(private navCtrl: NavController,
    public modalCtrl: ModalController) { }

  presentHelpModal() {
    console.log('Click Received');
    let helpModal = this.modalCtrl.create(HelpModalPage);
    helpModal.present();
  }

  navigateHome = () => this.navCtrl.push(SitePages.Home);

  ionViewDidLoad = () => console.log("Loadded ConfirmationPage");

}
