import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, NavParams } from 'ionic-angular';
import { Report } from '../../models/mockEiReport';
import { Questionaire_2Page } from '../questionaire-2/questionaire-2';

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
  params: Object;
  pushPage: any;
  constructor(){
    this.pushPage = Questionaire_2Page;
    this.params = { id: 42 };
  }
}
