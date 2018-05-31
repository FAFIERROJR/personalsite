import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { School } from '../../models/school';
import { Coursework } from '../../models/coursework';

/**
 * Generated class for the SchoolPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-school',
  templateUrl: 'school.html',
})
export class SchoolPage {
  schools: {[key: string]: School}
  school_name: string

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.school_name = this.navParams.get('school_name')
    this.schools = {}
    this.load_school()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchoolPage');
  }

  load_csulb(){
    let csulb = new School('California State Univerisity Long Beach', 2016, 2017)
    csulb.gpa = 3.944
    let CECS491 = new Coursework()
    CECS491.name = 'CECS 491 Senior Project I/II'
    CECS491.description = 'Designed a web application during Fall semester using an iterative waterfall methodology. Implemented during Spring semester as a single-page application that will be ported to iOS and Android.  Employed agile SCRUM methodology Coded in TypeScript, HTML, and SASS using Ionic, Cordova, Bootstrap, Angular, AngularFire, and Firebase. Acted as the team lead during Spring semester. Delegated tasks. Oversaw progress of each team member and overall. Monitored burndown. '
    CECS491.link = 'https://speakup.host'

  }

  load_school(){
    if(this.school_name == 'California State Univerisity Long Beach'){
      this.load_csulb()
    }
    
  }

}
