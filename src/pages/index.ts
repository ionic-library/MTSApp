import { IssueWithReportPage } from './issue-with-report/issue-with-report';
import { BenefitFinderPage } from './benefit-finder/benefit-finder';

export enum SitePages {
  Splash = 'SplashPage',
  AcceptanceStatement = 'AcceptanceStatementPage',
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
  Questionaire2 = 'Questionaire_2Page',
  SCCLocations = 'SccLocationsPage' ,
  Settings = 'SettingsPage',
  LoginFalied = 'LoginFailedPage',
  HelpModal = 'HelpModalPage',
  Submission = 'SubmissionPage'
}

// The page the user lands on after opening the app and without a session
export const FirstRunPage = SitePages.Home;

// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
export const MainPage = SitePages.Home;

