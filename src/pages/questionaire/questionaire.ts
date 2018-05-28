import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, NavParams, ModalController } from 'ionic-angular';
import { Report } from '../../models/mockEiReport';
import { Questionaire_2Page } from '../questionaire-2/questionaire-2';
import { HelpModalPage } from '../help-modal/help-modal';

@IonicPage()
@Component({
  selector: 'page-questionaire',
  templateUrl: 'questionaire.html',
})
export class QuestionairePage {


  //report: Report;
  //params: Object;
  pushPage: any;
  constructor(public translate: TranslateService,
    public navParams: NavParams, 
    public navCtrl: NavController,
    public modalCtrl: ModalController) {
    //this.report = navParams.get('report');
   // console.log(this.report);
    this.pushPage = Questionaire_2Page;
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
