import { Component, Input } from '@angular/core';
import { EfSchoolsProvider } from '../../providers/efschoolsprovider/efschoolsprovider';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the HonorsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'honors',
  templateUrl: 'honors.html'
})
export class HonorsComponent {

  honors: Observable<string[]>
  @Input() school_key: string

  constructor(public schoolsProvider: EfSchoolsProvider) {
    console.log('Hello HonorsComponent Component');

  }

  ngOnInit(){
    this.honors = this.schoolsProvider.getSchoolProperty(this.school_key, 'Honors') as Observable<string[]>;
  }

}
