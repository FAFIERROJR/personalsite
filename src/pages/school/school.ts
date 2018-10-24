import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { School } from '../../models/school';
import { Course } from '../../models/course';
import { SchoolsProvider } from '../../providers/schoolsprovider/schoolsprovider';
import { Observable } from 'rxjs/Observable';
import { Subscription, TestScheduler } from 'rxjs';
import { EfSchoolsProvider } from '../../providers/efschoolsprovider/efschoolsprovider';
import { MynavbarComponent } from '../../components/mynavbar/mynavbar';
import { HomePage } from '../home/home';

/**
 * Generated class for the SchoolPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment: 'school/:school_key'
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
  }

  goToPage(event: any){
    let page = event.page
    let params = event.params
    console.log("listening")
    if(page == 'HomePage'){
      this.navCtrl.setRoot(page)
    }
    else{
      this.navCtrl.push(page, params);
    }
  }

  goHome(){
    this.navCtrl.setRoot('HomePage')
  }

  ngOnInit(){
    this.schools = this.schoolsProvider.getSchools();
    this.schools_sub = this.schools.subscribe((schools: School[]) =>{
      console.log(schools, this.school_key)
      for(let school of schools){
        if(this.school_key == school.schoolKey){
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
    })


  //  //test code////
  //  let school  = new School('ts','testschool', 2013, 1233,)
  //  this.schools = Observable.of([school])
  //  //////////////////////////////////////

  }

  ngOnDestroy(){
    this.schools_sub.unsubscribe()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchoolPage');
  }

}
