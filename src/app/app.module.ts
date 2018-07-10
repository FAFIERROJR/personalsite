import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { NavbarexternallinksComponent} from '../components/navbarexternallinks/navbarexternallinks'

import { AngularFireModule } from 'angularfire2'
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore'
import { SchoolsProvider } from '../providers/schoolsprovider/schoolsprovider';
import {EfSchoolsProvider} from '../providers/efschoolsprovider/efschoolsprovider';
import { HttpClientModule} from '@angular/common/http';


export const firebaseConfig = {
  apiKey: "AIzaSyAZ1e8Zw1yThZ9LHnS1i6xk8dfmkdUJrKA",
  authDomain: "personalsite-d1f5a.firebaseapp.com",
  databaseURL: "https://personalsite-d1f5a.firebaseio.com",
  projectId: "personalsite-d1f5a",
  storageBucket: "personalsite-d1f5a.appspot.com",
  messagingSenderId: "574793251773"
};


@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFirestore,
    SchoolsProvider,
    EfSchoolsProvider
  ]
})
export class AppModule {}
