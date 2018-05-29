import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { HelpModalPage } from '../help-modal/help-modal';

@IonicPage()
@Component({
  selector: 'page-job-search',
  templateUrl: 'job-search.html',
})
export class JobSearchPage {

  constructor(public translate: TranslateService, public modalCtrl: ModalController) {
  }

  ionViewDidLoad = () => console.log('ionViewDidLoad JobSearchPage');

  presentHelpModal() {
    console.log('Click Received');
    let helpModal = this.modalCtrl.create(HelpModalPage);
    helpModal.present();
  }

}
