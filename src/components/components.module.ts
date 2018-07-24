import { NgModule } from '@angular/core';
import { NavbarexternallinksComponent } from './navbarexternallinks/navbarexternallinks';
import { EducationComponent } from './education/education';
import { IonicModule } from 'ionic-angular';
import { SchooldetailComponent } from './schooldetail/schooldetail';
import { SchoolPageModule } from '../pages/school/school.module';
import { ProjectsComponent } from './projects/projects';
import { HonorsComponent } from './honors/honors';
import { TabsComponent } from './tabs/tabs';
import { MynavbarComponent } from './mynavbar/mynavbar';
@NgModule({
	declarations: [
		NavbarexternallinksComponent,
    EducationComponent,
    SchooldetailComponent,
    ProjectsComponent,
    HonorsComponent,
    TabsComponent,
    MynavbarComponent],
    imports: [IonicModule.forRoot(ComponentsModule),
    ],
	exports: [NavbarexternallinksComponent,
    EducationComponent,
    SchooldetailComponent,
    ProjectsComponent,
    HonorsComponent,
    TabsComponent,
    MynavbarComponent]
})
export class ComponentsModule {}
