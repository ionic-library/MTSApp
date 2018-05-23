import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, NavParams } from 'ionic-angular';
import { Report } from '../../models/mockEiReport';



@IonicPage()
@Component({
  selector: 'page-questionaire-2',
  templateUrl: 'questionaire-2.html',
})
export class Questionaire_2Page {


  ionViewDidLoad() {
    console.log('ionViewDidLoad Questionaire_2Page');
  }

}
