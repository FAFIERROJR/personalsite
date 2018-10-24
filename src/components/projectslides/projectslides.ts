import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NavParams } from 'ionic-angular';
import { ProjectProvider } from '../../providers/projectprovider/projectprovider';
import { ReturnStatement } from '@angular/compiler';

/**
 * Generated class for the ProjectslidesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'projectslides',
  templateUrl: 'projectslides.html'
})
export class ProjectslidesComponent {

  slides: Observable<string[]>
  projectKey: string

  constructor(public navParams: NavParams, public projectProvider: ProjectProvider) {
    console.log('Hello ProjectslidesComponent Component');
    this.projectKey = this.navParams.get("projectKey")
    this.slides = new Observable<string[]>()
  }

  ngOnInit(){
    this.slides = this.projectProvider.getProject(this.projectKey).map(project => project.imgUrlList)
  }

}
