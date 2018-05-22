import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LifeEventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-life-events',
  templateUrl: 'life-events.html',
})
export class LifeEventsPage {

  constructor() {
  }

  ionViewDidLoad = () => console.log('ionViewDidLoad LifeEventsPage');

}
