import { Component } from '@angular/core';

/**
 * Generated class for the HomePageCarouselComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'home-page-carousel',
  templateUrl: 'home-page-carousel.html'
})
export class HomePageCarouselComponent {

  text: string;

  constructor() {
    console.log('Hello HomePageCarouselComponent Component');
    this.text = 'Hello World';
  }

}
