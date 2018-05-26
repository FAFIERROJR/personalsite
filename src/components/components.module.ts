import { NgModule } from '@angular/core';
import { NavbarexternallinksComponent } from './navbarexternallinks/navbarexternallinks';
import { EducationComponent } from './education/education';
import { IonicModule } from 'ionic-angular';
import { SchooldetailComponent } from './schooldetail/schooldetail';
@NgModule({
	declarations: [
		NavbarexternallinksComponent,
    EducationComponent,
    SchooldetailComponent],
	imports: [IonicModule.forRoot(ComponentsModule),],
	exports: [NavbarexternallinksComponent,
    EducationComponent,
    SchooldetailComponent]
})
export class ComponentsModule {}
