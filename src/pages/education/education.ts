import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

/**
 * Generated class for the EducationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-education',
  templateUrl: 'education.html',
})
export class EducationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit(){
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EducationPage')
  }


  goHome(){
    this.navCtrl.setRoot('HomePage')
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

}