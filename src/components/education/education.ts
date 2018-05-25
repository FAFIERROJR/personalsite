import { Component } from '@angular/core';
import { School } from '../../models/school';

/**
 * Generated class for the EducationComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'education',
  templateUrl: 'education.html'
})
export class EducationComponent {

  schools: School[]

  constructor() {
    console.log('Hello EducationComponent Component')
    this.schools = new Array

    let csulb = new School('California State University Long Beach', 2016, 2018)
    let ucsc = new School('University of California at Santa Cruz', 2015, 2016)
    let lahc = new School('Los Angeles Harbor College', 2012, 2015)

    this.schools.push(csulb)
    this.schools.push(ucsc)
    this.schools.push(lahc)
  }

}
