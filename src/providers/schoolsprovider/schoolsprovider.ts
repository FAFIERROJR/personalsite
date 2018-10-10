import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SchooldetailComponent } from '../../components/schooldetail/schooldetail';
import {School} from '../../models/school'

/*
  Generated class for the SchoolsproviderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SchoolsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello SchoolsProvider');
  }

  getSchools(): Observable<{[key: string ]: School[]}>{
    let schools = this.http.get('../../assets/data/schools.json') as Observable<{[key: string ]: School[]}>
    schools.subscribe((schools_data) =>{
      console.log(schools_data)
    })
    return schools
  }

}
