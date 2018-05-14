import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Home page where user selects services from an
 * icon grid.
*/
@IonicPage()
@Component({
  selector: 'page-grid',
  templateUrl: 'grid.html'
})
export class GridPage {

  constructor(public navCtrl: NavController) { }
  
}