import { BenefitFinderPage } from './../benefit-finder/benefit-finder';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { MynotificationsPage } from '../mynotifications/mynotifications';
import { SitePages } from '..';

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

  constructor(private navCtrl: NavController) { }

  private openPage(page) {
    console.log('Navigating to' + page);
    this.navCtrl.push(page);
  }

  public navigateToEIReportingPage = () => this.openPage(SitePages.EiReporting);
  public navigateToSearchPage = () => this.openPage(SitePages.JobSearch);
  public navigateToMynotificationsPage = () => this.openPage(SitePages.MyNotifications);
  public navigateToBenefitFinderPage = () => this.openPage(SitePages.BenefitFinder);
  public navigateToSCLocationPage = () => this.openPage(SitePages.SCCLocations);
  public navigateToLifeEventsPage = () => this.openPage(SitePages.LifeEvents);

}
