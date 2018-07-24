import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SchoolPage } from './school';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    SchoolPage,
  ],
  imports: [
    IonicPageModule.forChild(SchoolPage),
    ComponentsModule
  ],
})
export class SchoolPageModule {}
