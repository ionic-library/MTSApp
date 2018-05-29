import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, NavParams, ModalController  } from 'ionic-angular';
import { HelpModalPage } from '../help-modal/help-modal';

/**
 * Generated class for the LifeEventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-life-events',
  templateUrl: 'life-events.html',
})
export class LifeEventsPage {

  constructor(public translate: TranslateService, public modalCtrl: ModalController) {
  }

  ionViewDidLoad = () => console.log('ionViewDidLoad LifeEventsPage');

  presentHelpModal() {
    console.log('Click Received');
    let helpModal = this.modalCtrl.create(HelpModalPage);
    helpModal.present();
  }

}
