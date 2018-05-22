import { IssueWithReportPage } from './issue-with-report/issue-with-report';
import { BenefitFinderPage } from './benefit-finder/benefit-finder';

export enum SitePages {
  BenefitFinder = 'BenefitFinderPage',
  Confirmation = 'ConfirmationPage',
  EILogin = 'LoginPage',
  EiReporting = 'EiReportingPage',
  Home = 'HomePage',
  IssueWithReport = 'IssueWithReportPage',
  JobSearch = 'JobSearchPage' ,
  LifeEvents = 'LifeEventsPage' ,
  MyNotifications = 'MyNotificationsPage' ,
  Questionaire = 'QuestionairePage',
  SCCLocations = 'SccLocationsPage' ,
  Settings = 'SettingsPage'
}

// The page the user lands on after opening the app and without a session
export const FirstRunPage = SitePages.Home;

// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
export const MainPage = SitePages.Home;

