import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { GridPage } from './grid';

@NgModule({
  declarations: [
    GridPage,
  ],
  imports: [
    IonicPageModule.forChild(GridPage),
    TranslateModule.forChild()
  ],
  exports: [
    GridPage
  ]
})
export class GridPageModule { }
