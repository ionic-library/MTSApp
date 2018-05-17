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

  openPage(page) {
    console.log(page);
    switch (page) {
      case 'myNotification':
        this.navCtrl.push('MynotificationsPage')
        break;
      case 'benefitFinder':
        this.navCtrl.push('BenefitFinderPage')
        break;
      case 'jobSearch':
        this.navCtrl.push('SearchPage')
        break;
      case 'eiReport':
        this.navCtrl.push('EiReportingPage')
        break;
      case 'scLocations':
        this.navCtrl.push('ScLocationsPage')
        break;
      case 'lifeEvents':
        this.navCtrl.push('LifeEventsPage')
    }
  }
}
