import { Component } from '@angular/core'
import { School } from '../../models/school'
import { NavParams, NavController } from 'ionic-angular'
import { SchoolsProvider } from '../../providers/schoolsprovider/schoolsprovider';
import {EfSchoolsProvider} from '../../providers/efschoolsprovider/efschoolsprovider';
import { AnonymousSubject } from 'rxjs';
import { Observable } from 'rxjs/Observable';

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

  schools: Observable<School[]>;

  constructor(public navParams: NavParams, public navCtrl: NavController, public schoolsProvider: EfSchoolsProvider) {
    this.schools = new Observable<School[]>()
    console.log('Hello EducationComponent Component')
  }
  
  ngOnInit(){
    this.schools = this.schoolsProvider.getSchools()
    this.schools.subscribe((schools_data) =>{
      console.log(schools_data)
    });
  }

  go_to_school(school_key: string){
    this.navCtrl.push('SchoolPage', {'school_key': school_key })
  }

}
