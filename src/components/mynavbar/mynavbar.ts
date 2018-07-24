import { Component } from '@angular/core';

/**
 * Generated class for the MynavbarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'mynavbar',
  templateUrl: 'mynavbar.html'
})
export class MynavbarComponent {

  text: string;

  constructor() {
    console.log('Hello MynavbarComponent Component');
    this.text = 'Hello World';
  }

}
