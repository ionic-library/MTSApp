import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Home page where user selects services from an
 * icon grid.
*/
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) { }
  
}