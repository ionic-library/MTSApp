import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { BenefitFinderPage } from './benefit-finder';

@NgModule({
  declarations: [
    BenefitFinderPage,
  ],
  imports: [
    IonicPageModule.forChild(BenefitFinderPage),
    TranslateModule.forChild()
  ],
})
export class BenefitFinderPageModule {}
