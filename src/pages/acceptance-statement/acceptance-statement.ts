import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Report } from '../../models/mockEiReport';
import { SitePages } from '..';

/**
 * Generated class for the AcceptanceStatementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-acceptance-statement',
  templateUrl: 'acceptance-statement.html',
})
export class AcceptanceStatementPage {

  report: Report;

  constructor(public translate: TranslateService,
    public navParams: NavParams, public navCtrl: NavController) {
    this.report = navParams.get('report');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcceptanceStatementPage');
  }

  acceptStatement = (report) => this.navCtrl.push(SitePages.Questionaire, {report})

  refuseStatement = (event: Event) => {event.preventDefault(); this.navCtrl.push(SitePages.Home)}

}