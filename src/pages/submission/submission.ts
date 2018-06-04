import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { ConfirmationPage } from '../confirmation/confirmation';
import { SitePages } from "../index";
import { TranslateService } from '@ngx-translate/core';
/**
 * Generated class for the SubmissionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-submission',
  templateUrl: 'submission.html',
})
export class SubmissionPage {

  constructor(public navCtrl: NavController, public translateService: TranslateService) {
  }

  goToConfirmation(){
    this.navCtrl.push(SitePages.Confirmation)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubmissionPage');
  }

}
