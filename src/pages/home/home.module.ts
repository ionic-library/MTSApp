import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { HomePage } from './home';
import { HomePageCarouselComponent } from '../../components/home-page-carousel/home-page-carousel';

@NgModule({
  declarations: [
    HomePage,
    HomePageCarouselComponent
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    TranslateModule.forChild()
  ],
  exports: [
    HomePage
  ]
})
export class HomePageModule { }
