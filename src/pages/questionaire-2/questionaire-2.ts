import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, NavParams, ModalController } from 'ionic-angular';
import { Report } from '../../models/mockEiReport';
import { HelpModalPage } from '../help-modal/help-modal';



@IonicPage()
@Component({
  selector: 'page-questionaire-2',
  templateUrl: 'questionaire-2.html',
})
export class Questionaire_2Page {

  constructor(private navCtrl: NavController,
    public modalCtrl: ModalController) {

  }

  presentHelpModal() {
    console.log('Click Received');
    let helpModal = this.modalCtrl.create(HelpModalPage);
    helpModal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Questionaire_2Page');
  }

}
