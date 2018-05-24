import { Component } from '@angular/core';

/**
 * Generated class for the NavbarexternallinksComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'navbarexternallinks',
  templateUrl: 'navbarexternallinks.html'
})
export class NavbarexternallinksComponent {

  text: string;

  constructor() {
    console.log('Hello NavbarexternallinksComponent Component');
    this.text = 'Hello World';
  }

}
