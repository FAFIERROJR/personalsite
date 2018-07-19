import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { School } from '../../models/school';

/*
  Generated class for the EfSchoolsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EfSchoolsProvider {
  // route = "https://api.franciscofierro.us/api/schools"
  route = "https:localhost:5001/api/schools"

  constructor(public http: HttpClient) {
    console.log('Hello EfSchoolsProvider Provider');
  }

  getSchools(): Observable<School[]>{
    return this.http.get<School[]>(this.route)
  }

  getSchool(school_key: string): Observable<School>{
    return this.http.get<School>(this.route + '/' + school_key)
  }

  getSchoolProperty(school_key: string, school_property: string){
    return this.http.get(this.route + "/" + school_key + "/" + school_property);
  }

}