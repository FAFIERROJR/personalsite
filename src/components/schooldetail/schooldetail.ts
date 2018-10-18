import { Component, Input, Output, EventEmitter } from '@angular/core';
import { School } from '../../models/school';
import { EfSchoolsProvider } from '../../providers/efschoolsprovider/efschoolsprovider';
import { Observable } from 'rxjs';
import { Course } from '../../models/course';

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

  @Input() school_key: string
  school: Observable<School>
  @Output() nav: EventEmitter<any>

  constructor(public schoolsProvider: EfSchoolsProvider) {
    console.log('Hello SchooldetailComponent Component');
    this.school = new Observable<School>()
    this.nav = new EventEmitter<any>();
  }

  ngOnInit(){
    console.log(this.school_key)
    this.school = this.schoolsProvider.getSchool(this.school_key)
    this.school.subscribe((school) => console.log(school))

  //   //test code////
  //  let school  = new School('ts','testschool', 2013, 1233,)
  //  let course = new Course()
  //  course.courseName = "testcourse"
  //  school.courses = []
  //  school.courses.push(course)
  //  this.school = Observable.of(school)
  //  //////////////////////////////////////
  }

  goToPage(page: string, params: string){
    console.log('emitting...')
    this.nav.emit({'page': page, 'params': params})
  }

}
