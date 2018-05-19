// The page the user lands on after opening the app and without a session
export const FirstRunPage = 'HomePage';

// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
export const MainPage = 'HomePage';

// The initial root pages for our tabs (remove if not using tabs)
export const Tab1Root = 'ListMasterPage';
export const Tab2Root = 'SearchPage';
export const Tab3Root = 'SettingsPage';

export class SitePages {
    public readonly EiReporting : string = 'EiReportingPage';
    public readonly Home : string = 'HomePage';
    public readonly BenefitFinder : string  = 'BenefitFinderPage' ;
    public readonly JobSearch : string = 'JobSearchPage' ;
    public readonly LifeEvents : string = 'LifeEventsPage' ;
    public readonly MyNotifications : string = 'MynotificationsPage' ;
    public readonly SCCLocations : string = 'ScLocationsPage' ;
    public readonly Confirmation : string = 'ConfirmationPage';
    public readonly Questionaire : string = 'QuestionairePage';
    public readonly EILogin : string = 'LoginPage';
//     'WelcomePage' ,
 //    'TabsPage' ,
  //   'CardsPage' ,
  //   'ContentPage' ,
  //   'SignupPage' ,
  //   'ListMasterPage' ,
  //   'MenuPage' ,
  //   'SettingsPage' ,
  //   'SearchPage' ,
  //   'IssueWithReportPage'
}
