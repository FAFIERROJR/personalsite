import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProjectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-project',
  templateUrl: 'project.html',
})
export class ProjectPage {
  courseName: string

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.courseName = this.navParams.get('courseName')
    console.log("courseName: ", this.courseName)
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectPage');
  }

}
