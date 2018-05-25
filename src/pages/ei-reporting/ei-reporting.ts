import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Reports } from '../../mocks/providers/mock-ei-reports';
import { Report } from '../../models/mockEiReport';
import { SitePages } from '..';
import { HelpModalPage } from "../help-modal/help-modal";

/**
 * Generated class for the EiReportingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ei-reporting',
  templateUrl: 'ei-reporting.html',
})
export class EiReportingPage {

  public currentReports: Report[];

  constructor( private navCtrl: NavController,
               public reports: Reports,
               public modalCtrl: ModalController) {
    this.currentReports = this.reports.query();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EiReportingPage');
  }

  presentHelpModal() {
    console.log('Click Received');
    let helpModal = this.modalCtrl.create(HelpModalPage);
    helpModal.present();
  }

  startReport = (report) => this.navCtrl.push(SitePages.AcceptanceStatement, {report});
}
