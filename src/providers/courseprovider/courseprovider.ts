import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../../models/course';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the CourseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CourseProvider {
  route = "https://api.franciscofierro.us/api/courses"
  //route = "http://localhost:5000/api/schools"

  constructor(public http: HttpClient) {
    console.log('Hello CourseProvider Provider');
  }

  getAllCourses(): Observable<Course[]>{
    return this.http.get<Course[]>(this.route)
  }
  
  getCoursesForSchool(schoolKey: string): Observable<Course[]>{
    return this.http.get<Course[]>(this.route + '/getBySchool/' + schoolKey);
  }

  getCourse(courseKey: string): Observable<Course>{
    return this.http.get<Course>(this.route + '/' + courseKey)
  }


}
