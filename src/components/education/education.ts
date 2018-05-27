import { Component } from '@angular/core';
import { School } from '../../models/school';
import { NavParams, NavController } from 'ionic-angular';
import { EducationPage } from '../../pages/education/education';
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

  constructor(public navParams: NavParams, public navCtrl: NavController) {
    console.log('Hello EducationComponent Component')
    this.schools = new Array

    let csulb = new School('California State University Long Beach', 2016, 2018,
     'https://firebasestorage.googleapis.com/v0/b/personalsite-d1f5a.appspot.com/o/CSULB.jpg?alt=media&token=8eb5eed8-7834-4353-b19d-119cfea92571')
    let ucsc = new School('University of California at Santa Cruz', 2015, 2016,
      'https://firebasestorage.googleapis.com/v0/b/personalsite-d1f5a.appspot.com/o/ucsc.jpg?alt=media&token=0dcd2637-63cd-4fb9-b5d8-775e976d7d3e')
    let lahc = new School('Los Angeles Harbor College', 2012, 2015,
    'https://firebasestorage.googleapis.com/v0/b/personalsite-d1f5a.appspot.com/o/LAHC.jpg?alt=media&token=7326980d-7006-4dd4-9254-e8de159b9dd8')

    this.schools.push(csulb)
    this.schools.push(ucsc)
    this.schools.push(lahc)
  }

  go_to_school(school_name: string){
    this.navCtrl.push('EducationPage', {'school_name': school_name })
  }

}
