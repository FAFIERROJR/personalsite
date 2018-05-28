import { NgModule } from '@angular/core';
import { NavbarexternallinksComponent } from './navbarexternallinks/navbarexternallinks';
import { EducationComponent } from './education/education';
import { IonicModule } from 'ionic-angular';
import { SchooldetailComponent } from './schooldetail/schooldetail';
import { SchoolPageModule } from '../pages/school/school.module';
@NgModule({
	declarations: [
		NavbarexternallinksComponent,
    EducationComponent,
    SchooldetailComponent],
    imports: [IonicModule.forRoot(ComponentsModule),
        SchoolPageModule,],
	exports: [NavbarexternallinksComponent,
    EducationComponent,
    SchooldetailComponent]
})
export class ComponentsModule {}
