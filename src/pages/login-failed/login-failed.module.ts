import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginFailedPage } from './login-failed';

@NgModule({
  declarations: [
    LoginFailedPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginFailedPage),
  ],
})
export class LoginFailedPageModule {}
