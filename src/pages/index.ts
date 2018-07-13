export enum SitePages {
  Splash = "SplashPage",
  AcceptanceStatement = "AcceptanceStatementPage",
  BlankPage = "BlankPage",
  Confirmation = "ConfirmationPage",
  EILogin = "LoginPage",
  EiDashboard = "EiDashboardPage",
  EiReporting = "EiReportingPage",
  Home = "HomePage",
  IssueWithReport = "IssueWithReportPage",
  Questionaire = "QuestionairePage",
  Questionaire2 = "Questionaire_2Page",
  Questionaire3 = "Questionaire_3Page",
  Questionaire5 = "Questionaire_5Page",
  Questionaire6 = "Questionaire_6Page",
  Questionaire7 = "Questionaire_7Page",
  Settings = "SettingsPage",
  Support = "SupportPage",
  LoginFalied = "LoginFailedPage",
  HelpModal = "HelpModalPage",
  Submission = "SubmissionPage",
  Locations = "LocationsPage",
  eula = "EulaPage"
}

// The page the user lands on after opening the app and without a session
export const FirstRunPage = SitePages.Splash;

// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
export const MainPage = SitePages.Home;
