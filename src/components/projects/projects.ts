import { Component } from '@angular/core';

/**
 * Generated class for the ProjectsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'projects',
  templateUrl: 'projects.html'
})
export class ProjectsComponent {

  text: string;

  constructor() {
    console.log('Hello ProjectsComponent Component');
    this.text = 'Hello World';
  }

}
