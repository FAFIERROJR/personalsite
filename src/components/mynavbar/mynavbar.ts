import { Component, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * Generated class for the MynavbarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'mynavbar',
  templateUrl: 'mynavbar.html'
})
export class MynavbarComponent {

  @Output() home: EventEmitter<boolean>

  constructor() {
    console.log('Hello MynavbarComponent Component');
    this.home = new EventEmitter<boolean>()
  }

  goHome(){
    this.home.emit(true)
    console.log('emitting')
  }

}
