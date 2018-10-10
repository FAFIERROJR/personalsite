import { Component, Output, EventEmitter } from '@angular/core';
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

  @Output() nav: EventEmitter<any>

  constructor(public navCtrl: NavController, public events: Events) {
    console.log('Hello TabsComponent Component');
    this.nav = new EventEmitter<any>();
  }

  goToPage(page: string){
    this.nav.emit({'page': page, 'params': null})
  }

}
