import { Component, EventEmitter, Output } from '@angular/core'
import { School } from '../../models/school'
import { NavParams, NavController, Events } from 'ionic-angular'
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
  @Output() nav: EventEmitter<any>

  constructor(public navParams: NavParams, public navCtrl: NavController, public schoolsProvider: EfSchoolsProvider) {
    this.schools = new Observable<School[]>()
    console.log('Hello EducationComponent Component')
    this.nav = new EventEmitter<any>();
  }
  
  ngOnInit(){
    this.schools = this.schoolsProvider.getSchools()
    this.schools.subscribe((schools_data) =>{
      console.log(schools_data)
    });

    //sort the schools by descending end year
    this.schools = this.schools.map<School[], School[]>(schools_stream => {
      schools_stream.sort((school_a, school_b) => {
        if (school_a.endYear < school_b.endYear){
          return 1;
        }
        else{
          return -1;
        }
      })
      return schools_stream
    })
  }

  go_to_school(school_key: string){
    this.nav.emit({'page': 'SchoolPage', 'params': { 'school_key': school_key}})
  }

}
