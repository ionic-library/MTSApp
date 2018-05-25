import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { HelpModalPage } from '../help-modal/help-modal';


/**
 * Generated class for the IssueWithReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-issue-with-report',
  templateUrl: 'issue-with-report.html',
})
export class IssueWithReportPage {

  constructor(public modalCtrl: ModalController) { }

  presentHelpModal() {
    console.log('Click Received');
    let helpModal = this.modalCtrl.create(HelpModalPage);
    helpModal.present();
  }

  ionViewDidLoad = () => console.log('ionViewDidLoad IssueWithReportPage');

}
