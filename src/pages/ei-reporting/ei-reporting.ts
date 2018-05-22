import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Reports } from '../../mocks/providers/mock-ei-reports';
import { Report } from '../../models/mockEiReport';
import { SitePages } from '..';

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
               private reports: Reports) {
    this.currentReports = this.reports.query();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EiReportingPage');
  }

  startReport = (report) => this.navCtrl.push(SitePages.AcceptanceStatement, {report});
}
