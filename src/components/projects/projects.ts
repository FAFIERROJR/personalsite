import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Project } from '../../models/project';
import { ProjectProvider } from '../../providers/projectprovider/projectprovider';
import { Course } from '../../models/course';
import { CourseProvider } from '../../providers/courseprovider/courseprovider';
import { NavParams, ModalController } from 'ionic-angular';
import { ProjectslidesComponent } from '../projectslides/projectslides';

/**
 * Generated class for the ProjectsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'projects',
  templateUrl: 'projects.html'
})
export class ProjectsComponent {

  @Input() courseName: string
  projects: Observable<Project[]>

  constructor(public projectProvider: ProjectProvider, public modalCtrl: ModalController) {
    console.log('Hello ProjectsComponent Component')

  }

  ngOnInit(){
    console.log("courseName: ", this.courseName)
    if(this.courseName != undefined){
      this.projects = this.projectProvider.getProjectsForCourse(this.courseName)
    }else{
      this.projects = this.projectProvider.getAllProjects()
    }
    // //test code
    // let project : Project = new Project()
    // project.projectName = 'CECS491'
    // project.description = 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum '
    // this.projects = Observable.of([project, project])
  }

  popSlides(projectKey: string){
    this.modalCtrl.create(ProjectslidesComponent, {'projectKey': projectKey}).present()
  }
}
