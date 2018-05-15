import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public translateService: TranslateService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionairePage');
  }

}
