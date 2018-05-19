import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MynotificationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mynotifications',
  templateUrl: 'mynotifications.html',
})
export class MyNotificationsPage {

  constructor() {
  }

  ionViewDidLoad= () => console.log('Loaded MyNotificationsPage');

}
