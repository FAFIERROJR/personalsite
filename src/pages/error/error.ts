import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Segment } from 'ionic-angular';

/**
 * Generated class for the ErrorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment: 'error/:error'
})
@Component({
  selector: 'page-error',
  templateUrl: 'error.html',
})
export class ErrorPage {
  error: string
  errmsg: string

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.errmsg = this.navParams.get('errmsg')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ErrorPage');
  }

}
