import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage, IonicPageModule, Events } from 'ionic-angular';
import { Subscription } from 'rxjs';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  ngOnViewWillLeave(){
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
