import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BenefitFinderPage } from './benefit-finder';

@NgModule({
  declarations: [
    BenefitFinderPage,
  ],
  imports: [
    IonicPageModule.forChild(BenefitFinderPage),
  ],
})
export class BenefitFinderPageModule {}
