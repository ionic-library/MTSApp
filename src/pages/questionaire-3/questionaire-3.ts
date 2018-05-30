import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, NavParams, ModalController } from 'ionic-angular';
import { Report } from '../../models/mockEiReport';
import { Questionaire_2Page } from '../questionaire-2/questionaire-2';
import { Questionaire_5Page } from '../questionaire-5/questionaire-5';
import { HelpModalPage } from '../help-modal/help-modal';

@IonicPage()
@Component({
  selector: 'page-questionaire-3',
  templateUrl: 'questionaire-3.html',
})
export class Questionaire_3Page {
  //report: Report;
  //params: Object;
  pushPagePrevious: any;
  pushPageNext: any;
  constructor(public translate: TranslateService,
    public navParams: NavParams, 
    public navCtrl: NavController,
    private formBuilder: FormBuilder,
    public modalCtrl: ModalController) {
    //this.report = navParams.get('report');
   // console.log(this.report);
    this.pushPagePrevious = Questionaire_2Page;
    this.pushPageNext = Questionaire_5Page;
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
