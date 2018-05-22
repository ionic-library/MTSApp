import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, NavParams } from 'ionic-angular';
import { Report } from '../../models/mockEiReport';

/**
 * Generated class for the QuestionairePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-questionaire',
  templateUrl: 'questionaire.html',
})
export class QuestionairePage {

  report: Report;

  constructor(public translate: TranslateService,
    public navParams: NavParams, public navCtrl: NavController) {
    this.report = navParams.get('report');
    console.log(this.report);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionairePage');
  }

}
