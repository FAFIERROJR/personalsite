import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjectPage } from './project';
import { ComponentsModule } from '../../components/components.module';
import { HomePageModule } from '../home/home.module';

@NgModule({
  declarations: [
    ProjectPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjectPage),
    ComponentsModule,
    HomePageModule
  ],
})
export class ProjectPageModule {}
