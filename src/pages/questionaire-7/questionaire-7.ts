import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, NavParams, ModalController } from 'ionic-angular';
import { Report } from '../../models/mockEiReport';
import { Questionaire_6Page } from '../questionaire-6/questionaire-6';
import { SubmissionPage } from '../submission/submission';
import { HelpModalPage } from '../help-modal/help-modal';

@IonicPage()
@Component({
  selector: 'page-questionaire-7',
  templateUrl: 'questionaire-7.html',
})
export class Questionaire_7Page {
  //report: Report;
  //params: Object;
  pushPagePrevious: any;
  pushPageNext: any;
  constructor(public translate: TranslateService,
    public navParams: NavParams, 
    public navCtrl: NavController,
    public modalCtrl: ModalController) {
    //this.report = navParams.get('report');
   // console.log(this.report);
    this.pushPagePrevious = Questionaire_6Page;
    this.pushPageNext = SubmissionPage;
    //this.params = { id: 42 };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionairePage');
  }

  presentHelpModal() {
    console.log('Click Received');
    let helpModal = this.modalCtrl.create(HelpModalPage);
    helpModal.present();
  }
}
