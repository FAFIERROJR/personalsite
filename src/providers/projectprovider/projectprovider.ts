import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Project } from '../../models/project';

/*
  Generated class for the ProjectProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProjectProvider {
  route = "https://api.franciscofierro.us/api/projects"
  //route = "http://localhost:5000/api/schools"


  constructor(public http: HttpClient) {
    console.log('Hello ProjectProvider Provider');
  }

  getAllProjects(): Observable<Project[]>{
    return this.http.get<Project[]>(this.route)
  }
  
  getProjectsForCourse(courseName: string): Observable<Project[]>{
    return this.http.get<Project[]>(this.route + '/course/' + courseName);
  }

  getProject(projectKey: string): Observable<Project>{
    return this.http.get<Project>(this.route + '/' + projectKey)
  }

}
