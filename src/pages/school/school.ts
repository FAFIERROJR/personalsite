import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { School } from '../../models/school';
import { Coursework } from '../../models/coursework';
import { SchoolsProvider } from '../../providers/schoolsprovider/schoolsprovider';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs';

/**
 * Generated class for the SchoolPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment: 'school/:school_name'
})
@Component({
  selector: 'page-school',
  templateUrl: 'school.html',
})
export class SchoolPage {
  schools: {[key: string]: School}
  schools_obvs : Observable<{[key: string ]: School[]}>
  school_name: string
  schools_sub: Subscription
  school: School

  constructor(public navCtrl: NavController, public navParams: NavParams, public schoolsProvider: SchoolsProvider) {
    this.school_name = this.navParams.get('school_name')
    this.schools = {}
    this.school = new School('', 0, 0)
  }

  ngOnInit(){
    this.schools_obvs = this.schoolsProvider.getSchools();
    this.schools_sub = this.schools_obvs.subscribe((schools: {[key: string ]: School[]}) =>{
      for(let school in schools.schools){
        if(this.school_name == schools.schools[school].name){
          this.school = schools.schools[school]
        }
      }
    },
    err => console.log(err),
    () =>{
      if(this.school.name == ''){
        this.navCtrl.setRoot('ErrorPage', {'error': 'No-such-school', 'errmsg': 'I didn\'t go to that school!'})
      }
    }
  )

  }

  ngOnDestroy(){
    this.schools_sub.unsubscribe()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchoolPage');
  }

}
