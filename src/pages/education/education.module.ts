import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EducationPage } from './education';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
  declarations: [
    EducationPage,
  ],
  imports: [
    IonicPageModule.forChild(EducationPage),
    ComponentsModule
  ],
})
export class EducationPageModule {}
