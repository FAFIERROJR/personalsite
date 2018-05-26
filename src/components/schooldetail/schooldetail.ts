import { Component } from '@angular/core';

/**
 * Generated class for the SchooldetailComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'schooldetail',
  templateUrl: 'schooldetail.html'
})
export class SchooldetailComponent {

  text: string;

  constructor() {
    console.log('Hello SchooldetailComponent Component');
    this.text = 'Hello World';
  }

}
