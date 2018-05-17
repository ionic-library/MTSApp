import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-confirmation',
  templateUrl: 'confirmation.html'
})
export class ConfirmationPage {

  constructor(public navCtrl: NavController) { }

  openPage(page) {
    console.log(page);
    switch (page) {
      case 'home':
        this.navCtrl.push('HomePage')
        break;
     

}
  }
}