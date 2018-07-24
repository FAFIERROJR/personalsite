import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { School } from '../../models/school';
import { Coursework } from '../../models/coursework';
import { SchoolsProvider } from '../../providers/schoolsprovider/schoolsprovider';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs';
import { EfSchoolsProvider } from '../../providers/efschoolsprovider/efschoolsprovider';

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
  schools: Observable<School[]>
  school_key: string
  school: School
  schools_sub: Subscription

  constructor(public navCtrl: NavController, public navParams: NavParams, public schoolsProvider: EfSchoolsProvider) {
    this.school_key = this.navParams.get('school_key')
    this.school = new School('', 0, 0)
  }

  ngOnInit(){
    this.schools = this.schoolsProvider.getSchools();
    this.schools_sub = this.schools.subscribe((schools: School[]) =>{
      console.log(schools, this.school_key)
      for(let school of schools){
        if(this.school_key == school.key){
          this.school = school
          console.log(school)
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
