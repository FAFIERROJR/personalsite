import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage, IonicPageModule } from 'ionic-angular';
import { EducationPage } from '../education/education';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  educationPage = EducationPage

  constructor(public navCtrl: NavController) {

  }

}
