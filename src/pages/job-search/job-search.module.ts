import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { JobSearchPage } from './job-search';

@NgModule({
  declarations: [
    JobSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(JobSearchPage),
    TranslateModule.forChild()
  ],
})
export class JobSearchPageModule {}
