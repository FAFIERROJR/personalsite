import { Component, Input } from '@angular/core';
import { School } from '../../models/school';
import { EfSchoolsProvider } from '../../providers/efschoolsprovider/efschoolsprovider';
import { Observable } from 'rxjs';

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

  constructor(public schoolsProvider: EfSchoolsProvider) {
    console.log('Hello SchooldetailComponent Component');
    this.school = new Observable<School>()
  }

  ngOnInit(){
    console.log(this.school_key)
    this.school = this.schoolsProvider.getSchool(this.school_key)
    this.school.subscribe((school) => console.log(school))
  }

}
