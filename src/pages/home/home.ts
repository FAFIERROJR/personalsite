import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage, IonicPageModule, Events } from 'ionic-angular';
import { Subscription } from 'rxjs';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public events: Events) {
    events.subscribe('nav', (page) =>{
      navCtrl.push(page)
    })
  }

}
