import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';

/**
 * Generated class for the TabsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'tabs',
  templateUrl: 'tabs.html'
})
export class TabsComponent {

  constructor(public navCtrl: NavController, public events: Events) {
    console.log('Hello TabsComponent Component');
  }

  goToPage(page: string){
    this.events.publish('nav', page)
  }

}
