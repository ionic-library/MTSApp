import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { HelpModalPage } from '../help-modal/help-modal'; 

@IonicPage()
@Component({
  selector: 'page-benefit-finder',
  templateUrl: 'benefit-finder.html',
})
export class BenefitFinderPage {

  constructor(public translate: TranslateService, public modalCtrl: ModalController) {
  }

  ionViewDidLoad = () => console.log('Loaded BenefitFinderPage');

  presentHelpModal() {
    console.log('Click Received');
    let helpModal = this.modalCtrl.create(HelpModalPage);
    helpModal.present();
  }

}
